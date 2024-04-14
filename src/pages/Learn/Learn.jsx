import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Learn.css"

const Learn = () => {

    const navigate = useNavigate();
    const content = [
        {title: "Greetings", path:"greetings"},
        {title: "Alphabets", path:"alphabets"},
        {title: "Numbers", path:"numbers"},
        {title: "Colors", path:"colors"},
        {title: "Days and Months", path:"daysandmonths"},
        {title: "Tenses", path:"tenses"},
        {title: "Parts of Speech", path:"partsofspeech"},
    ]

  return (
    <div className='learn__page'>
        <h1>Master the basics of <span style={{color:'#e395ff'}}>English</span></h1>
        <div>
        {content.map((item) => {
            return (<div className='lessons__card'>
                <p>{item?.title}</p>
                <button onClick={() => {navigate(`/${item.path}`)}}>GO</button>
            </div>)
        })}
        </div>
    </div>
  )
}

export default Learn