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
      des: 'Explore the beauty and power of web structure with HTML. Build the perfect foundation for your online projects.',
      icon: faHtml5,
    },
    {
      name: 'CSS',
      des: 'Transform simplicity into spectacle with CSS. Create captivating styles and give your website an unforgettable online presence.',
      icon: faCss3,
    },
    {
      name: 'JavaScript',
      des: 'Bring your ideas to life with JavaScript. Experience creative freedom and create dynamic interactions for your users.',
      icon: faJs,
    },
    {
      name: 'ReactJs',
      des: 'Discover the unlimited potential of web development with ReactJs. Build impressive web applications and deliver engaging and interactive user experiences.',
      icon: faReact,
    },
    {
      name: 'WordPress',
      des: 'WordPress powers the modern web, providing a versatile platform for building and managing websites. With an easy-to-use interface and a wide range of plugins, WordPress facilitates the creation of captivating and customized websites.',
      icon: faWordpress,
    },
    {
      name: 'Node.js',
      des: 'Node.js revolutionizes backend web development, offering a fast and efficient runtime environment. With support for non-blocking I/O, Node.js enables the creation of scalable and high-performance web applications.',
      icon: faNodeJs,
    },
  ])
  return (
    <section className='skills' ref={scrollTab} id='skills'>
      <div className='title' ref={(el) => el && divs.current.push(el)}>
        Our Skills
      </div>
      <div className='des' ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
        Innovative web solutions, cutting-edge design, optimized performance.
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
