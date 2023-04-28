//import {useState, useEffect,useRef} from 'react'
import GithubGraph from './GithubGraph';
//import Skills from './components/Skills'
const Skills = (props) => {
  function SkillImg({ src, title }) {
    return (
      <img
        className="w-20 h-20 bg-gray-200 rounded-full transition duration-500 transform lg:mx-10 hover:brightness-125 hover:bg-blue-600 hover:scale-105"
        src={src}
        alt={title}
        title={title}
      />
    );
  }

  return (
    <div className=''>
      <h1
        id="skills"
        className="mt-36 text-3xl font-extrabold text-center text-indigo-500 underline underline-offset-4"
      >
        Habilidades
      </h1>
      <p className="mx-4 my-2 font-semibold text-center text-gray-600 text-2xl">
        Con el futuro obtendré mayores habilidades de la materia y desarrollo.
      </p>
      <div className="block lg:justify-between lg:flex lg:item-center">
        <div className="mx-10 lg:ml-40">
          <a href="#skills">
            <iframe
              width="300"
              height="300"
              title="skill"
              href="#skills"
              src="https://giphy.com/embed/4xyQcPmh44YiiZEEuZ"
              frameBorder="0"
              className="mr-2 ml-2 giphy-embed"
              allowFullScreen
            ></iframe>
          </a>
        </div>

        <div className="grid grid-cols-3 justify-between mt-8 ml-2 lg:mr-48 lg:ml-32 lg:grid-cols-6">
          <SkillImg
            src="https://sathish-portfolio.vercel.app/images/icons8-html-5.svg"
            alt="HTML5"
            title="HTML5"
          />
          <SkillImg
            src="https://sathish-portfolio.vercel.app/images/icons8-css3.svg"
            alt="CSS5"
            title="CSS5"
          />
          <SkillImg
            src="https://sathish-portfolio.vercel.app/images/icons8-javascript.svg"
            alt="Javascript"
            title="Javascript"
          />
          <SkillImg
            src="https://sathish-portfolio.vercel.app/images/icons8-nodejs.svg"
            alt="Nodejs"
            title="NodeJs"
          />
          <SkillImg
            src="https://tailwindcss.com/favicons/favicon-32x32.png?v=3"
            alt="Tailwind"
            title="TailwindCSS"
          />
          <SkillImg
            src="https://sathish-portfolio.vercel.app/images/icons8-mongodb.svg"
            alt="Mongodb"
            title="MongoDB"
          />
          <SkillImg
            src="https://sathish-portfolio.vercel.app/images/icons8-react-native.svg"
            alt="React"
            title="React"
          />
          <SkillImg
            src="https://sathish-portfolio.vercel.app/images/icons8-github.svg"
            alt="Github"
            title="Github"
          />
          <SkillImg
            src="https://sathish-portfolio.vercel.app/images/icons8-heroku.svg"
            alt="Heroku"
            title="Heroku"
          />
          <SkillImg
            src="https://www.svgrepo.com/show/7095/linux.svg"
            alt="LinuxOS"
            title="LinuxOS"
          />
          <img
            className="ml-2 w-20 h-20 rounded-full transition duration-500 transform lg:mx-10 hover:brightness-125 hover:bg-blue-600 hover:scale-105"
            src="https://upload.wikimedia.org/wikipedia/commons/2/20/WordPress_logo.svg"
            alt="Wordpress"
            title="Wordpress"
          />
        </div>
        </div>
    </div>
  );
};
export default Skills;
