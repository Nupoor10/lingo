import React, { useState } from 'react'
import toast from 'react-hot-toast'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import "./Grammar.css"

const Grammar = () => {
  const [text, setText] = useState('')
  const [correction, setCorrection] = useState("")

  const handleCorrect = async(req,res) => {
    try {
      const response = await fetch("/api/v1/generate", {
        method: "POST",
        body: JSON.stringify({prompt: `Correct any grammar or spelling mistakes in this text: ${text}`})
      })
      const data = await response.json()
      setCorrection(data?.response)        
    } catch (error) {
      console.log(error)
      toast.error(error?.message)
    }
  }

  return (
    <div className='grammar__page'>
      <h1>Check for grammar and spelling mistakes☑️</h1>
      <p>Enter your text below and check for any grammar or spelling mistakes with the click of a button 🔽</p>
      <textarea placeholder='Enter text'
        value={text} onChange={(e) => {setText(e.target.value)}}
        rows={14}/>
      <button onClick={handleCorrect}>Correct</button>
      {correction && (
          <div className='correction__div'>
          <p>
            <ReactMarkdown remarkPlugins={[gfm]}>
              {correction}
            </ReactMarkdown>
          </p>
        </div>  
      )}
    </div>
  )
}

export default Grammar