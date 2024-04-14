import React from 'react'
import "./FeatureCard.css"
import { useNavigate } from 'react-router-dom'

const FeatureCard = ({props}) => {

    const navigate = useNavigate()
  return (
    <div className='feature__card'>
        <span>{props?.icon}</span>
        <h3>{props?.title}</h3>
        <p>{props?.content}</p>
        <button onClick={() => {navigate(props?.path)}}>GO</button>
    </div>
  )
}

export default FeatureCard