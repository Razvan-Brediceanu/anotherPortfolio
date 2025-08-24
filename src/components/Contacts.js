import React, { useState, useRef, useEffect, useCallback } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { IoIosArrowUp } from 'react-icons/io'
import useSmartScroll from './CustomHook'

function Contacts() {
  const [listContacts] = useState([
    {
      title: 'Phone Number',
      value: '+40 777 220 506',
      icon: <FontAwesomeIcon icon={faPhone} style={{ marginRight: 5 }} />,
    },
    {
      title: 'Email',
      value: 'razvtir@yahoo.com',
      icon: <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: 5 }} />,
    },
    {
      title: 'Instagram',
      value: '@rxbjr_',
      icon: <FontAwesomeIcon icon={faInstagram} style={{ marginRight: 5 }} />,
    },
  ])

  const divs = useRef([])
  const scrollTab = useRef(null)

  // Use a stable ref setter to avoid pushing duplicates on every render
  const setDivRef = useCallback((el) => {
    if (el && !divs.current.includes(el)) divs.current.push(el)
  }, [])

  // Pass a stable tab id that matches your Redux activeTab value
  useSmartScroll(scrollTab, divs, 'contact-us')

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.pageYOffset > 300)
    toggleVisibility()
    window.addEventListener('scroll', toggleVisibility, { passive: true })
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    // simple + reliable
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section className='contact-us' ref={scrollTab} id='contact-us'>
      <div className='title-container' ref={setDivRef}>
        <div className='title'>
          <span>Contact Us</span>
        </div>
        <div className='image-wrapper'>
          <img
            src={`${process.env.PUBLIC_URL}/LaptopBG.png`}
            alt='Contact'
            className='contact-image'
          />
        </div>
      </div>

      <div className='des' ref={setDivRef}>
        These are our contact details. Please reach out to us for any questions
        or requests. We are here for you!
      </div>

      <div className='list' ref={setDivRef}>
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
        <button
          type='button'
          className='scroll-to-top'
          onClick={scrollToTop}
          aria-label='Scroll to top'
        >
          <IoIosArrowUp className='arrow' />
        </button>
      )}
    </section>
  )
}

export default Contacts
