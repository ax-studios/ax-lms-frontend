import type { NextPage } from 'next';
import Link from 'next/link';
import { CTA, Logo } from '../components/core';

const Home: NextPage = () => (
  <div className="min-h-screen w-full bg-slate-900 text-slate-50">
    <section className="py-16 text-center text-4xl font-bold ">
      <Link href="/">
        <a className="flex items-center justify-center py-5 font-semibold decoration-inherit focus:text-blue-500 focus:outline-none ">
          <div className="mr-2 h-10 w-10">
            <Logo />
          </div>
          Ax Studios
        </a>
      </Link>
      <h1 className="mx-auto max-w-xl">
        Open Source College CMS System made with NextJS, tailwind, and
        typescript
      </h1>
      <div className="mx-auto mt-10 flex w-max gap-2 whitespace-nowrap text-xl">
        <a
          href="https://github.com/ax-studios"
          target="_blank"
          rel="noreferrer"
        >
          <CTA onClick={() => {}}>Source Code</CTA>
        </a>
        <Link href="/auth/login">
          <a>
            <CTA onClick={() => {}}>Login </CTA>
          </a>
        </Link>
      </div>
    </section>
    <section>
      {[
        'Curriculum & Timetable Management',
        'Learning Management System',
        'Examination Management',
        'Fee Management (Cashless Campus)',
        'Infrastructure Management',
        'Student can pay their Fees',
        'Teacher can upload their notes',
        'Student can view their teachers, classes, clubs, eventes, attendance and announcements',
        'Build using NextJS, Typescript and Tailwind',
        'Apache-2.0 License',
      ].map((item) => (
        <div className="mx-auto max-w-2xl p-2" key={item}>
          <div className="flex h-full items-center rounded bg-gray-800 p-4">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              className="mr-4 h-6 w-6 flex-shrink-0 text-indigo-400"
              viewBox="0 0 24 24"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span className="title-font font-medium text-white">{item}</span>
          </div>
        </div>
      ))}
    </section>
    <div className="py-4 text-center text-xl font-bold text-blue-600">
      © Ax Studios 2022
    </div>
  </div>
);

export default Home;
