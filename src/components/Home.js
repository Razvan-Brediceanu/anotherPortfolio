import React, { useRef, useEffect } from 'react'
import CustomHook from './CustomHook'

function Home() {
  const scrollTab = useRef()
  CustomHook(scrollTab)

  useEffect(() => {
    const text = 'BYTEDEVS'
    const byteDevsElement = scrollTab.current.querySelector('.byteDevs')
    let index = 0

    const typingEffect = setInterval(() => {
      if (index < text.length) {
        byteDevsElement.textContent += text.charAt(index)
        index++
      } else {
        clearInterval(typingEffect)
        setTimeout(() => {
          // Blink effect
          const blinkInterval = setInterval(() => {
            byteDevsElement.classList.toggle('blink')
          }, 500) // Adjust blinking speed (milliseconds)
          // Stop blinking after 5 seconds
          setTimeout(() => {
            clearInterval(blinkInterval)
          }, 5000) // Adjust blinking duration (milliseconds)
        }, 1000) // Adjust delay before blinking starts (milliseconds)
      }
    }, 100) // Adjust typing speed (milliseconds per character)

    return () => clearInterval(typingEffect)
  }, []) // Run effect only once on component mount

  return (
    <section ref={scrollTab} className='home' id='home'>
      <div className='content'>
        <div className='name'>
          WE ARE <br /> <span className='byteDevs'></span>
        </div>
        <div className='des'>
          {/* 30 */}
          Looking to enhance your online presence? Choose ByteDevs for top-notch
          web development solutions. Our team creates customized websites with a
          strong focus on innovation and user experience. With sleek designs and
          flawless functionality, ByteDevs helps you stand out in the digital
          landscape and maximize your conversions. Choose ByteDevs to turn your
          vision into reality!
        </div>
      </div>
      <div className='avatar'>
        <div className='card'>
          <img src='/myAvatar2.jpg' alt='' />
          <div className='info'>
            <div>Web Developer</div>
            <div className='byteDevs'>BYTEDEVS</div>
            <div>03/20</div>
            <div>Razvan</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
