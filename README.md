![INNOAUS](https://img.shields.io/badge/INNOAUS-5755d9?style=for-the-badge)
![Next JS](https://img.shields.io/badge/Next+AppRouter-black?style=for-the-badge&logo=next.js&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![MUI Badge](https://img.shields.io/badge/MUI-007FFF?logo=mui&logoColor=fff&style=for-the-badge)
![NextUI Badge](https://img.shields.io/badge/NextUI-000?logo=nextui&logoColor=fff&style=for-the-badge)
![NextAuth](https://img.shields.io/badge/NextAuth-6a42fd?style=for-the-badge)

## Project Summary | 프로젝트 설명

This template is an Admin Console that starts with a login page.
Once logged in, you can navigate to the /admin page.

로그인 페이지로 시작하는 Admin Console Template입니다.
로그인이 되면 /admin 페이지를 탐색할 수 있습니다.

![login](./public/images/login.png)
![dashboard](./public/images/dashboard.png)

## Tech Summary | 기술 요약

List used in this project.   

이 프로젝트에서 사용하는 기술을 나열했습니다.

- Next.js 13 *App Router*(create next app)
- Typescript 5
- Prisma 5 (with PostgreSQL)
- Tailwindcss 3
- MUI 5.14
- NextUI 2.2
- NextAuth 4.24
- Prettier 3.0

## Files and Folder

```
nextjs-admin-template
.
├── README.md
├── app
│   ├── (auth)
│   │   └── (routes)
│   │       └── page.tsx
│   ├── admin
│   │   ├── (routes)
│   │   │   ├── page.tsx
│   │   │   ├── playground
│   │   │   │   └── page.tsx
│   │   │   └── settings
│   │   │       └── page.tsx
│   │   └── layout.tsx
│   ├── api
│   │   ├── auth
│   │   │   └── [...nextauth]
│   │   │       └── route.ts
│   │   └── register
│   │       └── route.ts
│   ├── components
│   │   ├── Input.tsx
│   │   └── LoginButton.tsx
│   ├── context
│   │   └── AuthContext.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── libs
│   │   └── prismadb.ts
│   ├── nav.tsx
│   ├── navbar.tsx
│   ├── navbaritem.tsx
│   ├── styles
│   │   └── theme.ts
│   └── topbar.tsx
├── next-env.d.ts
├── next.config.js
├── package.json
├── postcss.config.js
├── prisma
│   └── schema.prisma
├── public
│   ├── next.svg
│   └── vercel.svg
├── tailwind.config.ts
└── tsconfig.json
```

## Getting Started | 시작하기

### Entry Point | 시작점
- app/layout.tsx
- app/(auth)/(routes)/page.tsx

### Prerequisites | 준비물
- Node version 16 ⬆️
- PostgreSQL

### Step | 단계

아래 단계를 순서대로 진행하여 프로젝트를 실행합니다.

#### Install Packages | 패키지 설치
```
npm install
```

#### Setup Prisma | Prisma 설정
Fix .env file
```
DATABASE_URL="postgresql://[user]:[password]@localhost:5432/mydb?schema=public"
```

Add Schema to Database
```sh
npx prisma generate
npx prisma db push
```

#### Start App | 앱 실행
```
npm run dev
```
