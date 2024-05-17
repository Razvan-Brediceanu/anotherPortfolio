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
      name: 'Website in domeniul construcțiilor',
      des: 'Am dezvoltat un site web pentru o companie de construcții, folosind React și Tailwind CSS pentru a crea o experiență interactivă și atractivă.',
      mission:
        'Scopul site-ului este să ofere clienților o prezentare clară și accesibilă a clientului de case modulare și containere, pentru a facilita procesul lor de luare a deciziilor în achiziționarea unei locuințe.',
      language: 'React/Tailwind',
      images: '/Constructii.png',
      link: 'https://confectiimetaalice.netlify.app/',
    },
    {
      name: 'Website pentru cofetărie',
      des: 'Am dezvoltat un site web pentru o cofetărie, folosind WordPress pentru a crea o experiență interactivă și atrăgătoare pentru vizitatori.',
      mission:
        'Scopul site-ului este să prezinte clienților o gamă diversă și tentantă de produse de patiserie și cofetărie, facilitând astfel procesul lor de alegere și comandă.',
      language: 'Wordpress',
      images: '/Acadele.png',
      link: 'https://www.shop.bytedevs.ro/',
    },
    {
      name: 'Website pentru frizerie',
      des: 'Am dezvoltat un site web pentru o frizerie, folosind React, Tailwind CSS și Node.js pentru a crea o experiență interactivă și atrăgătoare pentru clienți.',
      mission:
        'Scopul site-ului este să ofere clienților o prezentare clară și informativă a serviciilor noastre de tuns și coafat, pentru a-i ajuta să aleagă cu încredere serviciul potrivit pentru nevoile lor',
      language: 'React/Tailwind/Node.js',
      images: '/Frizerie.png',
      link: 'https://geeks4life.netlify.app/',
    },
  ])

  const divs = useRef([])
  const scrollTab = useRef()
  CustomHook(scrollTab, divs)

  const handleItemClick = (link) => {
    window.open(link, '_blank')
  }

  return (
    <section className='proiecte' ref={scrollTab} id='proiecte'>
      <div className='title' ref={(el) => el && divs.current.push(el)}>
        Proiectele noastre
      </div>
      <div
        className='des'
        ref={(el) => el && divs.current.push(el)}
        style={{ cursor: 'auto' }}
      >
        Proiectele noastre sunt emblema inovației și excelenței în domeniul
        dezvoltării web. Descoperă creativitatea și pasiunea noastră reflectate
        în fiecare linie de cod și fiecare detaliu al proiectelor noastre.
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
                  <h4>Misiune</h4>
                  <div className='des'>{value.mission}</div>
                </div>
              </div>
              <div className='mission'>
                <div>
                  <FontAwesomeIcon icon={faEarthAmericas} />
                </div>
                <div>
                  <h4>Tehnologii</h4>
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
