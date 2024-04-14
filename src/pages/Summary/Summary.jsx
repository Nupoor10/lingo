import React, { useState } from 'react'
import Tesseract from 'tesseract.js';
import toast from "react-hot-toast"
import "./Summary.css"

const Summary = () => {
  const [imagePath, setImagePath] = useState("");
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("")

  const handleChange = (event) => {
    setImagePath(URL.createObjectURL(event.target.files[0]));
  }

  const handleSummary = async(req,res) => {
    try {
      const response = await fetch("/api/v1/summary", {
        method: "POST",
        body: JSON.stringify({data: text})
      })
      console.log(response)
      const data = await response.json()
      setSummary(data?.summary)      
    } catch (error) {
      console.log(error)
      toast.error(error)
    }
  }

  const handleClick = () => {
    Tesseract.recognize(
      imagePath,'eng',
      { 
        logger: m => console.log(m) 
      }
    )
    .catch (err => {
      console.error(err);
    })
    .then(result => {
      let text = result.data.text
      setText(text);
    })
  }

  return (
    <div className='summary__page'>
      <h1>Enter your text or upload an Image to gets its Summary📜</h1>
      <p>Want a quick summary of a long piece of text? Just copy and paste the text or upload an image of the page to summarize it⚡</p>
        <div>
          <input type="file" onChange={handleChange} />
          {imagePath && <img src={imagePath} className="App-image" alt="logo"/>}
        </div>
        <button onClick={handleClick}>Convert to Text</button>
        <textarea placeholder='Enter text'
          value={text} onChange={(e) => {setText(e.target.value)}}
          rows={10}/>
        <button onClick={handleSummary}>Summarize</button>
        {summary && (
          <div className='summary__div'>
          <p>{summary}</p>
        </div>  
        )}
    </div>
  )
}

export default Summary