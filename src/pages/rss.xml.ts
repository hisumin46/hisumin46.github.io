import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('posts', ({ data }) => {
    return data.draft !== true;
  });

  // 날짜순 정렬
  const sortedPosts = posts.sort((a, b) => 
    b.data.date.valueOf() - a.data.date.valueOf()
  );

  return rss({
    title: 'Tech Blog',
    description: '개발 지식과 경험을 공유하는 기술 블로그',
    site: context.site || 'https://hisumin46.github.io',
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/posts/${post.slug}/`,
      categories: post.data.tags,
      author: post.data.author,
    })),
    customData: `<language>ko-kr</language>`,
    stylesheet: '/rss-styles.xsl',
  });
}