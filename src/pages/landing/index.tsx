import { NextPage } from 'next';
import { CTA, Logo } from '../../components/core';
import Link from 'next/link';

const Landing: NextPage = () => {
  return (
    <div className="min-h-screen w-full bg-base-300 text-base-content">
      <section className="py-16 text-center text-4xl font-bold ">
        <Link
          href="/"
          className="flex items-center justify-center py-5 font-semibold decoration-inherit focus:text-primary focus:outline-none "
        >
          <div className="mr-2 h-10 w-10">
            <Logo />
          </div>
          Ax Studios
        </Link>
        <h1 className="mx-auto max-w-xl">
          Open Source University LMS System made with NextJS, tailwind, and
          typescript
        </h1>
        <div className="mx-auto mt-10 flex w-max gap-2 whitespace-nowrap text-xl">
          <a
            href="https://github.com/ax-studios"
            target="_blank"
            rel="noreferrer"
          >
            <CTA onClick={() => {}} style="outline">
              Source Code
            </CTA>
          </a>
          <Link href="/dashboard/home">
            <CTA onClick={() => {}} style="outline">
              Dashboard
            </CTA>
          </Link>
          <Link href="/auth/login">
            <CTA onClick={() => {}}>Login </CTA>
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
            <div className="flex h-full items-center rounded bg-base-100 p-4">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                className="mr-4 h-6 w-6 flex-shrink-0 text-primary-focus"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span className="title-font font-medium text-base-content">
                {item}
              </span>
            </div>
          </div>
        ))}
      </section>
      <div className="py-5 text-center text-xl">
        <h2>💪 Thanks to all Contributors</h2>
        <p>
          Thanks a lot for spending your time helping Ax Studios grow. Thanks a
          lot! Keep rocking 🍻
        </p>
      </div>

      <div className="py-4 text-center text-xl font-bold text-primary">
        © Ax Studios 2022
      </div>
    </div>
  );
};

export default Landing;
