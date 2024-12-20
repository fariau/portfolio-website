import React from 'react'
import Heading from './Header'
import Card from './Card'

const data = [
    {
        id : 0,
        title: "Countdown Timer",
        desc: "A Next.js and Typescript powered website to track time with an intractive countdown feature.",
        img: "/project-0.png",
        tags: ["Next.js", "Node", "CSS", "Typescript"],
    },
    {
        id: 1,
        title: "Currency Converter Project",
        desc: "Asimple HTML and Typescript powered tool for converting currencies with real-time rates.",
        img : "/project-1.jpg",
        tags:["HTML", "Node", "CSS", "Typescript"],
    },
    {
        id: 2,
        title: "Static Interactive Resume",
        desc: "A Typescript based interactive resume built with HTML and CSS allowing users to showcase thrir skills dynamically.",
        img: "/project-2.png",
        tags:["HTML", "Node", "CSS", "Typescript"],
    },
    {
        id: 3,
        title: "Simple Calculator Project",
        desc: "A basic HTML CSS and Typescript calculator for perfoming essential anthmetic operations.",
        img: "/project-3.jpg",
        tags: ["HTML", "CSS", "Node", "Typescript"],
    }
]

const Project = () => {
  return (
    <div id="project" className='container pt-32'>
      <Heading title='My Projects'/>
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-1 lg:grid-cols-2 place-items-center'>
        {data.map((el) => (<Card 
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>
    </div>
  )
}

export default Project