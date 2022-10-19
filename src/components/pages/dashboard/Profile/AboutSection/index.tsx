import { FC, useContext } from 'react';
import { UserContext } from '../../../../../data/userData';
import { useSocialIcons } from '../../../../../icons/Social Icons';

const AboutSection: FC = () => {
  const userData = useContext(UserContext);
  const socialIcons = useSocialIcons();
  return (
    <div className="grid grid-cols-10 gap-5">
      <div className="col-span-10 rounded-xl bg-base-content/5 p-5 lg:col-span-6">
        <h2 className="mb-2 text-2xl font-bold">About Me</h2>
        <p>
          I am a self-taught Developer and a person who loves to learn new
          things. I have been working on my skills for 1 year now. I started
          with the subject of Web Technologies, which was one of the most
          interesting subjects for me.
          <br />
          <br />
          While learning the subject I was creating websites, Burger King clone
          is one of it After that, I moved on to master HTML5, CSS, JavaScript,
          NodeJS, and React.
          <br />
          <br />
          Now I am proficient in RectJS, NextJS, and Typescript and desire to
          learn more. I am looking forward to learning about Blockchain,
          Solidity, and Smart Contracts.
          <br />
          <br />
          Now I am working on College CMS I would like it if you contribute to
          it.
        </p>
      </div>
      <div className="col-span-10 rounded-xl bg-base-content/5 p-5 text-lg font-bold lg:col-span-4">
        <h3 className="mb-2 text-base text-base-content/70">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {userData.skills.map((skill) => (
            <span key={skill} className="rounded-full border px-2 py-1 text-sm">
              {skill}
            </span>
          ))}
        </div>
        <h3 className="mt-2 text-base text-base-content/70">Location</h3>
        <p>{userData.location}</p>
        <h3 className="mt-2 text-base text-base-content/70">Website</h3>
        <a href={userData.website} target="_blank" rel="noreferrer">
          {userData.website}
        </a>
        <h3 className="mt-2 text-base text-base-content/70">Email</h3>
        <a href={`mailto:${userData.website}`}>{userData.email}</a>
        <h3 className="mt-2 text-base text-base-content/70">Socials</h3>
        <div className="flex flex-wrap gap-2">
          {userData.socials.map((social) => (
            <a
              key={social.name}
              href={social.link}
              className="aspect-square h-8 hover:text-primary"
              target="_blank"
              rel="noreferrer"
            >
              {socialIcons[social.name]}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
