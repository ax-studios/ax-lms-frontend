import type { NextPage } from 'next';
import Link from 'next/link';
import CTA from '../components/CTA';
import Logo from '../components/Logo';

const Home: NextPage = () => (
  <div className="w-full min-h-screen bg-slate-900 text-slate-50">
    <section className="font-bold text-4xl py-16 text-center ">
      <Link href="/">
        <a className="font-semibold items-center flex justify-center py-5 decoration-inherit focus:outline-none focus:text-blue-500 ">
          <div className="w-10 h-10 mr-2">
            <Logo />
          </div>
          Ax Studios
        </a>
      </Link>
      <h1 className="max-w-xl mx-auto">
        Open Source College CMS System made with NextJS, tailwind, and
        typescript
      </h1>
      <div className="w-max whitespace-nowrap mx-auto mt-10 text-xl flex gap-2">
        <a
          href="https://github.com/ax-studios"
          target="_blank"
          rel="noreferrer"
        >
          <CTA onClick={() => {}}>Source Code</CTA>
        </a>
        <Link href="/auth/login">
          <a>
            <CTA onClick={() => {}}>Login In</CTA>
          </a>
        </Link>
      </div>
    </section>
    <section>
      {[
        'Student can pay their Fees',
        'Teacher can upload their notes',
        'Student can view their attendance and announcements',
        'Student can view their teachers, classes, clubs and eventes',
        'Created Woth NextJS',
        'Written in Typescript',
        'Apache-2.0 License',
        'Styled with tailwindCSS',
      ].map((item) => (
        <div className="p-2 max-w-2xl mx-auto" key={item}>
          <div className="bg-gray-800 rounded flex p-4 h-full items-center">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              className="text-indigo-400 w-6 h-6 flex-shrink-0 mr-4"
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
    <div className="text-center text-blue-600 font-bold text-xl py-4">
      © Ax Studios 2022
    </div>
  </div>
);

export default Home;
