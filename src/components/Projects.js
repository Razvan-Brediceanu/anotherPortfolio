import React, { useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPersonCircleQuestion,
  faEarthAmericas,
} from '@fortawesome/free-solid-svg-icons'
import CustomHook from './CustomHook'

function Projects() {
  const [listProjects] = useState([
    {
      name: 'Construction Industry Website',
      des: 'Developed a website for a construction company using React and Tailwind CSS to create an interactive and attractive experience.',
      mission:
        'The goal of the website is to provide clients with a clear and accessible presentation of modular houses and containers to facilitate their decision-making process when purchasing a home.',
      language: 'React/Tailwind',
      images: '/Constructii.png',
      link: 'https://confectiimetaalice.netlify.app/',
    },
    {
      name: 'Bakery Website',
      des: 'Developed a website for a bakery using WordPress to create an engaging and interactive experience for visitors.',
      mission:
        'The goal of the website is to showcase a diverse and tempting range of pastry and bakery products, simplifying the process of selection and ordering for customers.',
      language: 'WordPress',
      images: '/Acadele.png',
      link: 'https://www.shop.bytedevs.ro/',
    },
    {
      name: 'Barbershop Website',
      des: 'Developed a website for a barbershop using React, Tailwind CSS, and Node.js to create an engaging and interactive experience for customers.',
      mission:
        'The goal of the website is to provide clients with a clear and informative presentation of our haircutting and styling services, helping them confidently choose the right service for their needs.',
      language: 'React/Tailwind/Node.js',
      images: '/Frizerie.png',
      link: 'https://geeks4life.netlify.app/',
    },
    {
      name: 'AI Shorts Generator',
      des: 'Developed a platform for generating AI-powered shorts using advanced algorithms for content creation and video production.',
      mission:
        'The goal of this project is to simplify the process of creating engaging and dynamic short videos for various platforms, leveraging the power of AI to deliver high-quality results efficiently.',
      language: 'NextJS/Node.js/MongoDB',
      images: '/AIShorts.png',
      link: 'https://www.rxbshorts.com/',
    },
  ])

  const divs = useRef([])
  const scrollTab = useRef()
  CustomHook(scrollTab, divs)

  const handleItemClick = (link) => {
    window.open(link, '_blank')
  }

  return (
    <section className='projects' ref={scrollTab} id='projects'>
      <div className='title' ref={(el) => el && divs.current.push(el)}>
        Our Projects
      </div>
      <div
        className='des'
        ref={(el) => el && divs.current.push(el)}
        style={{ cursor: 'auto' }}
      >
        Our projects are the epitome of innovation and excellence in web
        development. Discover our creativity and passion reflected in every line
        of code and every detail of our work.
      </div>
      <div className='list'>
        {listProjects.map((value, key) => (
          <div
            className='item'
            key={key}
            ref={(el) => el && divs.current.push(el)}
            style={{ cursor: 'auto' }}
          >
            <div className='images' onClick={() => handleItemClick(value.link)}>
              <a href={value.link} target='_blank' rel='noreferrer'>
                <img src={value.images} alt='' className='project-image' />
              </a>
            </div>
            <div className='content'>
              <h3>{value.name}</h3>
              <div className='des'>{value.des}</div>
              <div className='mission'>
                <div>
                  <FontAwesomeIcon icon={faPersonCircleQuestion} />
                </div>
                <div>
                  <h4>Mission</h4>
                  <div className='des'>{value.mission}</div>
                </div>
              </div>
              <div className='mission'>
                <div>
                  <FontAwesomeIcon icon={faEarthAmericas} />
                </div>
                <div>
                  <h4>Technologies</h4>
                  <div className='des'>{value.language}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
