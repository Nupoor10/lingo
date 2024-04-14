import React from 'react'
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer__container'>
      <div className='footer__body'>
        <div className='footer__about'>
            <h1>ABOUT</h1>
            <p>
            Experience the power of AI in our English learning app, where you can seamlessly translate from your native language to English, enhance your grammar and writing style, and even extract objects from images to expand your vocabulary. Our app offers a unique blend of traditional English learning content alongside AI-driven features, allowing you to master English with ease and efficiency.
            </p>
        </div>
        <div className='footer__links'>
          <a style={{color: 'white'}} target='_blank' rel='noreferrer' href='https://github.com/Nupoor10/lingo'><AiFillGithub /></a>
          <a style={{color: 'white'}} target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/nupoor-shetye-8452111a7/'><AiFillLinkedin /></a>
          <a style={{color: 'white', textDecoration: 'none'}} target='_blank' rel='noreferrer' href='https://peerlist.io/nupoor'>🅿️</a>
        </div>
      </div>
      <hr />
      <div className='footer__copyright'>
        <h3>Copyright @ {new Date().getFullYear()} All Rights Reserved by 🌍Lingo</h3>
      </div>
    </div>
  )
}

export default Footer