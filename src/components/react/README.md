# React Components

이 디렉터리에는 Astro 프로젝트에서 사용할 React 컴포넌트들이 포함되어 있습니다.

## 사용 방법

Astro 파일에서 React 컴포넌트를 사용하려면:

```astro
---
import Counter from '@/components/react/Counter.tsx';
---

<!-- client:load - 페이지 로드 시 즉시 하이드레이션 -->
<Counter client:load initialCount={0} />

<!-- client:idle - 브라우저가 idle 상태일 때 하이드레이션 -->
<Counter client:idle initialCount={10} />

<!-- client:visible - 컴포넌트가 뷰포트에 보일 때 하이드레이션 -->
<Counter client:visible initialCount={5} />

<!-- client:only="react" - 서버 렌더링 없이 클라이언트에서만 렌더링 -->
<Counter client:only="react" initialCount={3} />
```

## 주의사항

- React 컴포넌트는 반드시 `client:*` 디렉티브와 함께 사용해야 인터랙티브하게 작동합니다
- 디렉티브 없이 사용하면 정적 HTML로만 렌더링됩니다
- TypeScript를 사용할 때는 `.tsx` 확장자를 사용하세요