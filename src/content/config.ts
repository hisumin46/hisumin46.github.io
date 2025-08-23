import { z, defineCollection } from 'astro:content';

/**
 * 블로그 포스트 콘텐츠 컬렉션 정의
 */
const postsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    // 필수 필드
    title: z.string().max(100, '제목은 100자 이내여야 합니다'),
    description: z.string().max(200, '설명은 200자 이내여야 합니다'),
    date: z.coerce.date(),
    
    // 선택 필드
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    cover: image().optional(),
    coverAlt: z.string().optional(),
    draft: z.boolean().default(false),
    
    // SEO 필드
    canonicalUrl: z.string().url().optional(),
    ogImage: z.string().optional(),
    
    // 메타데이터
    author: z.string().default('Admin'),
    category: z.string().optional(),
    readingTime: z.number().optional(),
    featured: z.boolean().default(false),
    
    // 목차 관련
    tableOfContents: z.boolean().default(true),
    
    // 관련 포스트
    relatedPosts: z.array(z.string()).optional(),
  })
});

/**
 * 저자 정보 컬렉션 (확장 가능)
 */
const authorsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    email: z.string().email().optional(),
    bio: z.string().optional(),
    avatar: z.string().optional(),
    social: z.object({
      twitter: z.string().optional(),
      github: z.string().optional(),
      linkedin: z.string().optional(),
      website: z.string().url().optional(),
    }).optional(),
  })
});

/**
 * 카테고리 정보 컬렉션
 */
const categoriesCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    description: z.string().optional(),
    slug: z.string(),
    color: z.string().optional(),
    icon: z.string().optional(),
    order: z.number().default(0),
  })
});

// 컬렉션 내보내기
export const collections = {
  posts: postsCollection,
  authors: authorsCollection,
  categories: categoriesCollection,
};