import React, { useState } from 'react'
import toast from 'react-hot-toast'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import "./Concepts.css"

const Concepts = () => {
  const [text, setText] = useState('')
  const [imageSrc, setImageSrc] = useState("");
  const [concept, setConcept] = useState("");
  
  const handleGenerate = async() => {
    try {
      const textResponse = await fetch("/api/v1/generate", {
        method: "POST",
        body: JSON.stringify({prompt: `Explain ${text} in simple english words`})
      })
      const textData = await textResponse.json();
      setConcept(textData?.response)
      const imgResponse = await fetch("/api/v1/concept", {
        method: "POST",
        body: JSON.stringify({data: text})
      })
      const blob = await imgResponse.blob();
      const url = URL.createObjectURL(blob);
      setImageSrc(url);  
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  }

  return (
    <div className='concepts__page'>
      <h1>Visualize difficult concepts with easy explainations🌄</h1>
      <p>Having difficulty understanding a concept? Perhaps it is regarding festivals🎆 or science🧪. Worry not, just tell our AI and get a simplified explaination complete with images🔍</p>
      <input type='text' value={text} onChange={(e) => setText(e.target.value)} placeholder='What concept do you want to learn?'/>
      <button onClick={handleGenerate}>Generate</button>
      {(imageSrc && concept) && (
        <div className='concept'>
            <img src={imageSrc} alt="Fetched Image" />
            <p>
            <ReactMarkdown remarkPlugins={[gfm]}>
              {concept}
            </ReactMarkdown>
          </p>
        </div> 
      )}
    </div>
  )
}

export default Concepts