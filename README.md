# Tech Blog

Astro와 TypeScript로 구축한 정적 기술 블로그입니다.

## 주요 기능

- 🚀 **빠른 성능**: Astro의 Zero JavaScript로 최적화된 로딩 속도
- 📝 **MDX 지원**: 마크다운과 React 컴포넌트를 함께 사용
- 🎨 **모던 UI**: Tailwind CSS + shadcn/ui 디자인 시스템
- 🌙 **다크모드**: 시스템 설정 연동 및 수동 토글
- 🔍 **타입 안전**: TypeScript + Content Collections로 타입 세이프한 콘텐츠 관리
- 📱 **반응형**: 모바일 우선 반응형 디자인
- 🔖 **태그 시스템**: 카테고리별 포스트 분류
- 📊 **SEO 최적화**: 메타 태그, 사이트맵, RSS 피드 자동 생성

## 기술 스택

- **프레임워크**: [Astro](https://astro.build)
- **언어**: TypeScript
- **스타일링**: Tailwind CSS + shadcn/ui
- **콘텐츠**: MDX + Content Collections
- **배포**: GitHub Pages / Netlify / Vercel

## 시작하기

### 요구사항

- Node.js 18+ 
- npm 또는 yarn

### 설치

```bash
# 의존성 설치
npm install

# 개발 서버 시작
npm run dev

# 빌드
npm run build

# 빌드 결과 미리보기
npm run preview
```

### 개발 서버

```bash
npm run dev
```

브라우저에서 http://localhost:4321 로 접속

## 프로젝트 구조

```
├── src/
│   ├── components/         # 재사용 가능한 컴포넌트
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── ThemeToggle.astro
│   │   └── PostCard.astro
│   ├── content/           # 콘텐츠 파일
│   │   ├── config.ts      # Content Collections 설정
│   │   └── posts/         # 블로그 포스트 (MDX)
│   ├── layouts/           # 레이아웃 컴포넌트
│   │   ├── BaseLayout.astro
│   │   └── PostLayout.astro
│   ├── lib/               # 유틸리티 함수
│   │   └── utils.ts
│   ├── pages/             # 페이지 라우트
│   │   ├── index.astro    # 홈페이지
│   │   ├── posts/         # 포스트 관련 페이지
│   │   ├── tags/          # 태그 관련 페이지
│   │   └── about.astro    # 소개 페이지
│   └── styles/            # 전역 스타일
│       └── globals.css
├── public/                # 정적 파일
│   └── images/           # 이미지 파일
├── astro.config.mjs      # Astro 설정
├── tailwind.config.mjs   # Tailwind CSS 설정
└── tsconfig.json         # TypeScript 설정
```

## 블로그 포스트 작성

### 새 포스트 생성

`src/content/posts/` 디렉터리에 MDX 파일을 생성합니다:

```markdown
---
title: "포스트 제목"
description: "포스트 설명"
date: 2025-08-23
tags: ["tag1", "tag2"]
draft: false
featured: false
author: "작성자"
---

# 포스트 내용

마크다운과 MDX 컴포넌트를 자유롭게 사용할 수 있습니다.
```

### 프론트매터 필드

- `title`: 포스트 제목 (필수)
- `description`: 포스트 설명 (필수)  
- `date`: 작성일 (필수)
- `updated`: 수정일 (선택)
- `tags`: 태그 배열 (선택)
- `cover`: 커버 이미지 (선택)
- `draft`: 초안 여부 (기본: false)
- `featured`: 추천 포스트 여부 (기본: false)
- `author`: 작성자 (기본: "Admin")
- `tableOfContents`: 목차 표시 여부 (기본: true)

## 🧞 Commands

프로젝트 루트에서 실행하는 명령어들:

```bash
# 개발
npm run dev

# 빌드
npm run build

# 미리보기
npm run preview

# 타입 체크
npm run check

# 린트
npm run lint
npm run lint:fix

# 포맷팅
npm run format
npm run format:check
```

## 커스터마이징

### 테마 색상 변경

`src/styles/globals.css`에서 CSS 변수를 수정:

```css
:root {
  --primary: 222.2 47.4% 11.2%;
  --secondary: 210 40% 96.1%;
  /* ... */
}
```

### 사이트 정보 수정

`astro.config.mjs`에서 사이트 URL 변경:

```javascript
export default defineConfig({
  site: 'https://yourdomain.com',
  // ...
});
```

## 배포

### GitHub Pages

1. GitHub 리포지토리 설정에서 Pages 활성화
2. `astro.config.mjs`에서 `site` 설정
3. GitHub Actions로 자동 배포 설정

### Netlify / Vercel

빌드 명령어: `npm run build`  
배포 디렉터리: `dist`

## 라이센스

MIT License
