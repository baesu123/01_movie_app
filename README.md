# Movie App

간단한 React 기반 영화 검색 앱입니다. Vite로 설정되어 빠르게 개발할 수 있으며, 영화 목록 조회와 검색 기능을 제공합니다.

**주요 기능**

- 영화 목록 표시
- 검색어로 영화 필터링
- 재사용 가능한 컴포넌트 구조 (`MovieList`, `MovieListHeading`, `SearchBox` 등)

**사용 기술**

- React + JSX
- Vite (개발 서버 및 빌드)
- CSS (간단한 스타일링)

**프로젝트 구조 (주요 파일)**

- `src/App.jsx`: 앱 진입점 컴포넌트
- `src/main.jsx`: React 렌더링 엔트리
- `src/components/MovieList.jsx`: 영화 목록 컴포넌트
- `src/components/MovieListHeading.jsx`: 목록 헤더 컴포넌트
- `src/components/SearchBox.jsx`: 검색 입력 컴포넌트

**실행 방법**
개발 서버를 실행하려면 프로젝트 루트에서 다음을 실행하세요:

```bash
npm install
npm run dev
```

브라우저에서 표시된 로컬 주소로 접속하면 앱을 확인할 수 있습니다.

**기여 및 개선**

- 간단한 버그 리포트나 개선사항 PR 환영합니다.

---

필요하면 영문 README나 배포용 가이드도 만들어 드릴게요.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
