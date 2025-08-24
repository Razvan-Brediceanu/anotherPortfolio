import React, { useState, useEffect, useMemo } from 'react'
import { connect } from 'react-redux'
import { changeTabActive } from '../redux/actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const NavBar = ({ activeTab, changeTabActive }) => {
  const linkNav = useMemo(
    () => ['home', 'skills', 'projects', 'contact-us'],
    []
  ) // Initialize linkNav array using useMemo

  const [isSmoothScrolling, setIsSmoothScrolling] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false) // State to manage menu visibility

  useEffect(() => {
    const handleScroll = () => {
      if (isSmoothScrolling) return

      let maxVisibleHeight = 0
      let activeSection = null

      for (const id of linkNav) {
        const section = document.getElementById(id)
        if (!section) continue

        const { top, bottom } = section.getBoundingClientRect()
        const visibleHeight =
          Math.min(bottom, window.innerHeight) - Math.max(top, 0)

        if (visibleHeight > maxVisibleHeight) {
          maxVisibleHeight = visibleHeight
          activeSection = id
        }
      }

      if (activeSection && activeTab !== activeSection) {
        changeTabActive(activeSection)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [activeTab, changeTabActive, isSmoothScrolling, linkNav])

  const handleClick = (value) => {
    if (!isSmoothScrolling) {
      const section = document.getElementById(value)
      if (section) {
        setIsSmoothScrolling(true)
        section.scrollIntoView({ behavior: 'smooth' })
        setTimeout(() => {
          setIsSmoothScrolling(false)
        }, 1000)
      }
    }
    changeTabActive(value)
    setIsMenuOpen(false) // Close the menu when a link is clicked
  }

  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen) // Toggle the menu visibility
  }

  return (
    <header>
      <div className='logo'>
        <img src='/icons8developer.png' alt='' />
        <span
          className='byteDevsText'
          onClick={() => handleClick('home')} // Scroll to home on click
          style={{ cursor: 'pointer' }} // Add a pointer cursor
        >
          ByteDevs
        </span>
      </div>
      <nav className={`burger-menu ${isMenuOpen ? 'open' : ''}`}>
        {/* Apply a class when menu is open */}
        {linkNav.map((value) => (
          <span
            key={value}
            className={activeTab === value ? 'active' : ''}
            onClick={() => handleClick(value)}
            tabIndex='0'
          >
            {value}
          </span>
        ))}
      </nav>
      <div className='icon-bar' onClick={toggleMenu}>
        {/* Add onClick handler to toggle menu */}
        <FontAwesomeIcon icon={faBars} />
      </div>
    </header>
  )
}

const mapStateToProps = (state) => ({
  activeTab: state.activeTab,
})

export default connect(mapStateToProps, { changeTabActive })(NavBar)
