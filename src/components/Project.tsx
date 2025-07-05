import React from 'react';
import Image from 'next/image';
import { link } from 'fs';

interface CardProps {
  title: string;
  desc: string;
  img: string;
  tags: string[];
  link?: string;
}

const Project = () => {
  const data = [
    {
      id: 0,
      title: 'Countdown Timer',
      desc: 'A Next.js and Typescript powered website to track time with an interactive countdown feature.',
      img: '/project-0.png',
      tags: ['Next.js', 'Node', 'CSS', 'Typescript'],
      link: 'https://count-down-timer-bice.vercel.app/',
    },
    {
      id: 1,
      title: 'Currency Converter Project',
      desc: 'A simple HTML and Typescript powered tool for converting currencies with real-time rates.',
      img: '/project-1.jpg',
      tags: ['HTML', 'Node', 'CSS', 'Typescript'],
      link: 'https://github.com/fariau/currency-converter',
    },
    {
      id: 2,
      title: 'Static Interactive Resume',
      desc: 'A Typescript-based interactive resume built with HTML and CSS, allowing users to showcase their skills dynamically.',
      img: '/project-2.png',
      tags: ['HTML', 'Node', 'CSS', 'Typescript'],
      link: 'https://my-resume-henna-delta.vercel.app/',
    },
    {
      id: 3,
      title: 'Simple Calculator Project',
      desc: 'A basic HTML, CSS, and Typescript calculator for performing essential arithmetic operations.',
      img: '/project-3.jpg',
      tags: ['HTML', 'CSS', 'Node', 'Typescript'],
      link: 'https://github.com/fariau/simple-calculator',
    },
    {
      id: 4,
      title: 'Food Blog Website',
      desc: 'A responsive food blog website built using Next.js and styled with Tailwind CSS.',
      img: '/project-4.png',
      tags: ['HTML', 'Tailwind CSS', 'Node', 'Typescript'],
      link: 'https://blog-website-delta-two.vercel.app/',
    },
    {
      id: 5,
      title: 'Simple Website Project',
      desc: 'A simple and clean website built using only HTML and CSS.',
      img: '/project-5.png',
      tags: ['HTML', 'CSS', 'Node', 'Typescript'],
      link: 'https://html-css-website-seven.vercel.app/',
    },
    {
      id: 6,
      title: 'BMI Calculator',
      desc: 'A BMI Calculator built with Python that takes user input for height and weight, calculates Body Mass Index, and provides health feedback based on BMI categories.',
      img: '/project-6.png',
      tags: ['Python', 'BMI Logic', 'streamlit'],
      link: 'https://bmi-calculator-6hganmj35gjthj4787sqse.streamlit.app/',
    },
    {
      id: 7,
      title: 'CountDown Timer',
      desc: 'A Python countdown timer built with Streamlit that alerts users when the set time is up.',
      img: '/project-7.png',
      tags: ['Python', 'Time Module', 'Streamlit'],
      link: 'https://countdowntimer-python-avdygsnuap95kyfcvyn2ta.streamlit.app/',
    },
    {
      id: 8,
      title: 'Growth Mindset',
      desc: 'An interactive web app built with Streamlit that encourages positive thinking and personal development by providing motivational content and tracking mindset progress.',
      img: '/project-8.png',
      tags: ['Python', 'Streamlit'],
      link: 'https://growth-mindset-gprhvhnyyh4ctc59nm2xkg.streamlit.app/',
    },
    {
      id: 9,
      title: 'Password Generator',
      desc: 'A Streamlit app that generates secure, random passwords based on user-defined criteria like length and character type.',
      img: '/project-9.png',
      tags: ['Python', 'Streamlit', 'Random', 'Security'],
      link: 'https://passwordgenerator-fgvrldshd4gxbuypqvmpie.streamlit.app/',
    },
    {
      id: 10,
      title: 'Nike Website Project',
      desc: 'A fully responsive Nike-inspired multi-page website built using HTML and CSS, showcasing product sections, navigation, and modern design elements.',
      img: '/project-10.png',
      tags: ['HTML', 'CSS', 'Node', 'Typescript'],
      link: 'https://hackathon03-template03.vercel.app/',
    },
    {
      id: 11,
      title: 'Multi-Page Website',
      desc: 'A responsive multi-page website built with HTML and CSS, featuring clean layout and smooth navigation.',
      img: '/project-11.png',
      tags: ['HTML', 'CSS', 'Node', 'Typescript'],
      link: 'https://multi-page-website-wheat.vercel.app/',
    },
    {
      id: 12,
      title: 'Guess the Number',
      desc: 'A fun Streamlit game where you guess a number between 1 and 10 with instant feedback.',
      img: '/project-12.png',
      tags: ['Python', 'Streamlit', 'Game', 'Logic'],
      link: 'https://7qscylqeipqb8bjo2hca42.streamlit.app/',
    },
    {
      id: 13,
      title: 'Unit Converter',
      desc: 'A Streamlit app to convert units like length easily and accurately using a clean and interactive interface.',
      img: '/project-13.png',
      tags: ['Python', 'Streamlit', 'Converter', 'Units'],
      link: 'https://unit-convertor-pdeckfbybf3gvtchqma9bz.streamlit.app/',
    },
    {
      id: 14,
      title: 'Secure Data Encryption System',
      desc: 'A secure Streamlit app to store and retrieve sensitive data using encryption and user authentication.',
      img: '/project-14.png',
      tags: ['Python', 'Streamlit', 'Encryption', 'Security'],
      link: 'https://project05securedataencryption-45plyfepvd2y6f5hy6jarv.streamlit.app/',
    },
    {
      id: 15,
      title: 'Password Strength Checker',
      desc: 'A Python app that evaluates password strength and gives instant feedback for better security.',
      img: '/project-15.png',
      tags: ['Python', 'Security', 'Validation'],
      link: 'https://password-strength-meter-ep3dxwilkwqnvkvly8naix.streamlit.app/',
    },
    {
      id: 16,
      title: 'Shareable Resume Builder',
      desc: 'A TypeScript and Java-powered app for creating and sharing professional resumes.',
      img: '/project-16.png',
      tags: ['TypeScript', 'Java', 'Resume Builder', 'Web App'],
      link: 'https://hackathon-milestone-05-ashy.vercel.app/',
    },
    {
      id: 17,
      title: 'Editable Resume Builder',
      desc: 'A simple and editable resume builder for creating and updating resumes instantly.',
      img: '/project-17.png',
      tags: ['TypeScript', 'Java', 'Resume Builder', 'Web App'],
      link: 'https://hackathon-milestone-04-five.vercel.app/',
    },
  ];

  // Card component
  const Card: React.FC<CardProps> = ({ title, desc, img, tags, link }) => {
    return (
      <div
        className="border border-red-300 rounded-lg w-full h-[450px] flex flex-col"
        data-aos="zoom-in-up"
      >
        {/* Image Section */}
        <div className="w-full h-[200px] relative">
          <Image
            className="object-cover rounded-t-lg"
            src={img}
            layout="fill"
            alt={title}
          />
        </div>

        {/* Content Section */}
        <div className="p-4 space-y-4 flex flex-col justify-between flex-grow">
          {/* Title */}
          <div className="text-2xl font-extralight text-white">{title}</div>

          {/* Description */}
          <div className="text-gray-400">{desc}</div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((el) => (
              <span className="tags" key={el}>
                {el}
              </span>
            ))}
          </div>
          {/* View Project Link */}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-cyan-400 underline hover:text-cyan-200"
          >
            View Project
          </a>
        </div>
      </div>
    );
  };

  return (
    <div id="project" className="container mx-auto px-4 pt-32">
      {/* Section heading */}
      <h1 className="text-2xl sm:text-5xl lg:text-6xl text-center mb-16 text-white">
        Projects
      </h1>

      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data.map((el) => (
          <Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
            link={el.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
