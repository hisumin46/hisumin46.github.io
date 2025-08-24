// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// GitHub Pages 배포를 위한 설정
const SITE_URL = 'https://hisumin46.github.io';

// https://astro.build/config
export default defineConfig({
  // 사이트 URL 설정
  site: SITE_URL,
  
  // GitHub Pages 배포를 위한 base 설정 (리포지토리 이름이 username.github.io가 아닌 경우 설정 필요)
  // base: '/blog',
  
  // 통합 플러그인 설정
  integrations: [
    // React 지원
    react(),
    
    // MDX 지원
    mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: {
        theme: 'github-dark-dimmed',
        wrap: true
      }
    }),
    
    // Tailwind CSS
    tailwind({
      applyBaseStyles: false,
      nesting: true
    }),
    
    // 사이트맵 생성
    sitemap()
  ],
  
  // 빌드 설정
  build: {
    // 정적 사이트 생성
    format: 'directory',
    
    // 이미지 최적화 설정
    assets: '_astro'
  },
  
  // 이미지 설정
  image: {
    // Sharp를 사용한 이미지 최적화
    service: {
      entrypoint: 'astro/assets/services/sharp'
    },
    
    // 이미지 도메인 허용 목록
    domains: [],
    remotePatterns: [{
      protocol: 'https'
    }]
  },
  
  // Vite 설정
  vite: {
    // 빌드 최적화
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            // 벤더 청크 분리
            'vendor': ['react', 'react-dom'],
          }
        }
      }
    },
    
    // 개발 서버 설정
    server: {
      port: 4321,
      host: true
    }
  },
  
  // 마크다운 설정
  markdown: {
    // 구문 하이라이팅
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'github-dark-dimmed',
      wrap: true
    }
  },
  
  // 실험적 기능
  experimental: {
    // 정적 import.meta.env 지원
    staticImportMetaEnv: true
  }
});
