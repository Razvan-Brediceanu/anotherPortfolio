import React, { useRef, useState } from 'react'
import { faNodeJs } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faReact,
  faHtml5,
  faCss3,
  faJs,
  faWordpress,
} from '@fortawesome/free-brands-svg-icons'
import CustomHook from './CustomHook'

function Skills() {
  const divs = useRef([])
  const scrollTab = useRef()
  CustomHook(scrollTab, divs)
  const [listSkills] = useState([
    {
      name: 'HTML',
      des: 'Explorează frumusețea și puterea structurii web cu HTML. Construiește fundația perfectă pentru proiectele tale online',
      icon: faHtml5,
    },
    {
      name: 'CSS',
      des: 'Transformă simplul în spectaculos cu CSS. Creează stiluri captivante și conferă site-ului tău o prezență de neuitat în mediul online.',
      icon: faCss3,
    },
    {
      name: 'Javascript',
      des: 'Dă viață ideilor tale cu Javascript. Experimentează libertatea creativă și creează interacțiuni dinamice pentru utilizatorii tăi',
      icon: faJs,
    },
    {
      name: 'ReactJs',
      des: 'Descoperă potențialul nelimitat al dezvoltării web cu ReactJs. Creează aplicații web impresionante și oferă utilizatorilor o experiență captivantă și interactivă.',
      icon: faReact,
    },
    {
      name: 'WordPress',
      des: 'WordPress este motorul web-ului modern, oferind o platformă versatilă pentru construirea și gestionarea site-urilor. Cu o interfață ușor de folosit și o gamă largă de plugin-uri, WordPress facilitează crearea unor site-uri captivante și personalizate.',
      icon: faWordpress,
    },
    {
      name: 'Node.js',
      des: 'Node.js revoluționează dezvoltarea backend-ului web, oferind un mediu de execuție rapid și eficient. Cu suportul pentru I/O non-blocking, Node.js permite crearea de aplicații web scalabile și performante.',
      icon: faNodeJs,
    },
  ])
  return (
    <section className='abilitati' ref={scrollTab} id='abilitati'>
      <div className='title' ref={(el) => el && divs.current.push(el)}>
        Abilitățile noastre
      </div>
      <div className='des' ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
        Soluții web inovatoare, design de vârf, performanță optimizată.
      </div>
      <div className='list'>
        {listSkills.map((value, key) => (
          <div
            className={'item '}
            key={key}
            ref={(el) => el && divs.current.push(el)}
          >
            <FontAwesomeIcon icon={value.icon} />
            <h3>{value.name}</h3>
            <div className='des'>{value.des}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
