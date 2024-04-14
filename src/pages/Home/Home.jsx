import React from 'react'
import { FaLanguage, FaRegImages, FaArrowDownWideShort } from "react-icons/fa6";
import { FaSpellCheck } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { MdPlayLesson } from "react-icons/md";
import FeatureCard from '../../components/FeatureCard/FeatureCard';
import "./Home.css"

const Home = () => {

    const features = [
        {title: "Bite-Sized Lessons", content: "Learn the basics of English through short, easy-to-understand lessons.", icon: <MdPlayLesson />, path: "/learn"},
        {title: "Image Recognition", content: "Identify objects in images and learn their English names", icon: <FaRegImages />, path: "/objects"},
        {title: "Text Summarization", content: "Quickly summarize lengthy texts for better understanding", icon: <FaArrowDownWideShort />, path: "/summary"},
        {title: "Grammar Checker", content: "Get AI-powered feedback to improve your grammar and writing style", icon: <FaSpellCheck />, path: "/grammar"},
        {title: "Concept Explanation", content: "Explore difficult concepts through interactive stories and visuals", icon: <GiTeacher />, path: "/concepts"},
        {title: "Translation Services", content: "Instantly translate text from your native language to English", icon: <FaLanguage />, path: "/translate"},
    ]

  return (
    <div className='home__page'>
        <div className='hero__section'>
            <img src='https://i.ibb.co/K6GQ8dB/Learning-languages-bro.png' border='0' alt='Learning-languages-bro'/>
            <span>Learn English With AI ✨</span>
            <p>Experience the power of AI in our English learning app, where you can seamlessly translate from your native language to English, enhance your grammar and writing style, and even extract objects from images to expand your vocabulary. Our app offers a unique blend of traditional English learning content alongside AI-driven features, allowing you to master English with ease and efficiency.</p>
            <button>Get Started</button>
        </div>
        <div className='about__section'>
            <img src="https://i.ibb.co/gSdTMgQ/Learning-languages-pana.png" alt="Learning-languages-pana" border="0" />
            <div>
                <h2>Language Learning <span style={{color:'pink'}}>Powered By AI</span></h2>
                <p>Discover a comprehensive English language learning experience enriched with cutting-edge AI technologies in our innovative app. Immerse yourself in a plethora of traditional learning modules covering numbers, colors, parts of speech, days, and months, while also leveraging AI for advanced practice sessions. Engage in real-time translation exercises, refine your grammar and writing style with AI-powered feedback, and effortlessly identify objects from images to expand your vocabulary. Delve deeper into difficult concepts with interactive stories and image generation, and effortlessly summarize complex texts for better comprehension. With our app, you not only access foundational English knowledge but also harness the transformative capabilities of AI for a more immersive and effective learning journey.</p>
            </div>
        </div>
        <div className='stats__section'>
            <p>10+ Lessons</p>
            <p>5+ AI Features</p>
        </div>
        <div className='services__section'>
            <h2><span style={{color:'pink'}}>Explore</span> our app</h2>
            <div className='cards__container'>
            {features?.map((item) => {
                return <FeatureCard props={item}/>
            })}
            </div>
        </div>
        <div className='contact__section'>
            <p>Have any question or feedback? Reach out to us at our <a href='mailto:shetyenupoor10@gmail.com'>Email ID</a></p>
        </div>
    </div>
  )
}

export default Home