# PICSEL Web

포토부스를 찾고-찍고-사진 보관까지 한번에! Next.js 기반 웹 프로젝트입니다.

## Getting Started

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000)에서 확인할 수 있습니다.

---

## 코드 컨벤션

### 📂 1. 프로젝트 구조

```
📦 src
┣ 📂 api             # API 요청 관련 (axios, react-query)
┣ 📂 assets          # 이미지, 아이콘, 폰트 등 정적 파일
┣ 📂 components      # 공통 UI 컴포넌트 (버튼, 카드, 모달 등)
┣ 📂 features        # 주요 도메인 기능 (모듈 단위 관리)
┣ 📂 hooks           # 커스텀 훅 (useAuth, useLocation 등)
┣ 📂 utils           # 유틸리티 함수
┣ 📂 store           # Zustand 상태관리
┣ 📂 styles          # 전역 스타일
┗ 📂 app             # Next.js App Router 페이지
```

### 📝 2. 명명 규칙

#### 2.1 기본 규칙

| 스타일     | 용도                                    | 예시          |
| ---------- | --------------------------------------- | ------------- |
| PascalCase | 클래스, 인터페이스, 타입, 컴포넌트 폴더 | `TitleTitle`  |
| camelCase  | 변수, 함수, 기본 폴더                   | `titleTitle`  |
| kebab-case | 파일명(이미지)                          | `title-title` |
| UPPER_CASE | 상수변수                                | `TITLE_TITLE` |

#### 2.2 명명 세부 규칙

**Boolean 타입** — `is`로 시작

```tsx
let isAvailable = false;
```

**함수** — 이벤트 핸들러는 `handle`로 시작, 이름은 역할을 명확히 반영

```tsx
const handleClick = () => {};
const handleKeyDown = () => {};

// Bad
const a = 5;
const isPaginatable = a > 10;

// Good
const postCount = 5;
const hasPagination = postCount > 10;
```

축약은 최소한만 사용 (가독성 우선)

```tsx
// Bad
const onItmClk = () => {};

// Good
const onItemClick = () => {};
```

### 🔄 3. 순서 규칙

#### 3.1 import 순서

린트 설정을 통해 통일

#### 3.2 컴포넌트 내 선언 순서

1. `useRouter`, `useParams`, `useAppSelector`
2. `useQuery`
3. customHook
4. `useRef`
5. `useState`
6. 일반 변수들
7. mutation
8. 함수
9. 조건문
10. **`useEffect` (필수 최하단)**

### 📏 4. 개행 규칙

return문 바로 위는 한 줄 개행

```tsx
// Bad
const getResult = () => {
  ...
  return someDataInFalse;
}

// Good
const getResult = () => {
  ...

  return someDataInFalse;
}
```

### 🧰 5. 기타 컨벤션

- **ESLint와 Prettier 적용** 필수
- **화살표 함수 사용**
- **삼중 등호 연산자만 사용** (`===`)

```tsx
// Bad
if (numberB == '777') { ... }

// Good
if (numberB === 777) { ... }
```

### 📌 6. Attributes

- 인라인 스타일 사용 최소화
- Boolean 애트리뷰트 값 생략

```html
<!-- Good -->
<button disabled></button>
```

### 🔷 7. TypeScript 규칙

- `any` 사용 금지 → `unknown` 사용
- 가능한 모든 변수, 함수 매개변수, 반환 값에 명시적 타입 지정
- 재사용 가능한 타입은 별도 파일에 정의
- 객체 타입은 `interface` 사용
- Props와 State의 타입 정의 필수

```tsx
// Good
interface EpicStatusBoxProps {
  project?: ProjectData;
  statuses?: WorkspaceStatus[];
}

const EpicStatusBox = ({ project, statuses }: EpicStatusBoxProps) => {
  // ...
};

// Bad
const EpicStatusBox = ({
  project,
  statuses,
}: {
  project?: ProjectData;
  statuses?: WorkspaceStatus[];
}) => {
  // ...
};
```

### 📦 8. 상태 관리 (Zustand)

비구조화 할당 사용

```tsx
const { count, increment } = useStore();
```

### 🔄 9. 데이터 패칭 (TanStack Query)

쿼리 키는 API명과 최대한 일치하도록 설정 (GET 메소드일 때 `get` 제외)

```tsx
// getUserAPI → 쿼리 키: ['user', userId]
// patchUserAPI → 쿼리 키: ['patchUser', userId]
```

### 🌿 10. Git 규칙

#### 10.1 브랜치 전략: Git Flow

1. `main`에서 배포된 코드 관리
2. `develop`에서 새로운 기능 개발
3. 새로운 기능 개발 시 `feature` 브랜치에서 작업
4. 기능 완료 → `develop`에 Merge
5. 배포 준비 → `release` 브랜치에서 최종 수정 및 QA
6. `release` 완료 → `main`에 Merge & 배포
7. 긴급 버그 → `hotfix` 브랜치 생성 후 `main`과 `develop`에 반영

#### 10.2 브랜치 네이밍

```
main
└── develop
    └── feat/{이슈번호}    # 기능 개발
└── hotfix/{이슈번호}      # 긴급 버그 수정
```

예: `feat/23/auth/login`

#### 10.3 커밋 메시지 규칙

형식: `Type: 영어로 메시지`

| Type       | 설명                           |
| ---------- | ------------------------------ |
| `Feat`     | 새로운 기능 추가               |
| `Fix`      | 버그 수정                      |
| `Docs`     | 문서 수정                      |
| `Remove`   | 파일 삭제                      |
| `Style`    | 코드 스타일 변경 (동작 변경 X) |
| `Chore`    | 빌드/패키지 매니저 수정        |
| `Modify`   | 수정                           |
| `Refactor` | 코드 리팩토링                  |
| `Test`     | 테스트 코드 추가               |

#### 10.4 전체 플로우

1. `feat` 브랜치 생성 → 작업
2. 작업 완료 & 테스트 → PR 요청
