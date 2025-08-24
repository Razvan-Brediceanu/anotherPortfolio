import React, { useState, useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { IoIosArrowUp } from 'react-icons/io' // Import arrow icon from react-icons library
import CustomHook from './CustomHook' // Assuming you have a custom hook for scrolling

function Contacts() {
  const [listContacts] = useState([
    {
      title: 'Phone Number',
      value: '+40 777 220 506',
      icon: <FontAwesomeIcon icon={faPhone} style={{ marginRight: '5px' }} />,
    },
    {
      title: 'Email',
      value: 'razvtir@yahoo.com',
      icon: (
        <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '5px' }} />
      ),
    },
    {
      title: 'Instagram',
      value: '@rxbjr_',
      icon: (
        <FontAwesomeIcon icon={faInstagram} style={{ marginRight: '5px' }} />
      ),
    },
  ])

  const divs = useRef([])
  const scrollTab = useRef()
  CustomHook(scrollTab, divs)

  const [isVisible, setIsVisible] = useState(false)

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  // Scroll to top when the button is clicked
  const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop)
      window.scrollTo(0, c - c / 8)
    }
  }

  return (
    <section className='contact-us' ref={scrollTab} id='contact-us'>
      <div
        className='title-container'
        ref={(el) => el && divs.current.push(el)}
      >
        <div className='title'>
          <span>Contact Us</span>
        </div>
        <div className='image-wrapper'>
          <img
            src={`${process.env.PUBLIC_URL}/laptopbg.png`}
            alt='Contact'
            className='contact-image'
          />
        </div>
      </div>
      <div className='des' ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
        These are our contact details. Please reach out to us for any questions
        or requests. We are here for you!
      </div>
      <div className='list' ref={(el) => el && divs.current.push(el)}>
        {listContacts.map((value, key) => (
          <div className='item' key={key}>
            <h3>
              {value.icon}
              {value.title}
            </h3>
            <div>{value.value}</div>
          </div>
        ))}
      </div>
      {isVisible && (
        <div className='scroll-to-top' onClick={scrollToTop}>
          <IoIosArrowUp className='arrow' />
        </div>
      )}
    </section>
  )
}

export default Contacts
