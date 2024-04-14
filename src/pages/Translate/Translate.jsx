import React, { useState } from 'react'
import Select from 'react-select'
import "./Translate.css"

const Translate = () => {
  const [translation, setTranslation] = useState("");
  const [lang, setLang] = useState();
  const [text, setText] = useState('');

  const languages = [
    { value: 'fr', label: 'French' },
    { value: 'es', label: 'Spanish' },
    { value: 'de', label: 'German' },
    { value: 'it', label: 'Italian' },
    { value: 'nl', label: 'Dutch' },
    { value: 'ru', label: 'Russian' },
  ]  

  const handleChange = (selectedOption) => {
    setLang(selectedOption);
  };

  const handleTranslate = async() => {
    try {
      const response = await fetch("/api/v1/translate", {
        method: "POST",
        body: JSON.stringify({data: text, lang: lang?.value})
      });
      const data = await response.json()
      setTranslation(data?.translated_text)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='translate__page'>
      <h1>Translate seamlessly from you native language to english🔄️</h1>
      <p>Having trouble memorizing English? Our translate AI is here to help. Just enter your text and select your language, our AI will convert it to English🅰️</p>
      <input type='text' value={text} onChange={(e) => setText(e.target.value)} placeholder='Enter your text to translate'/>
      <Select
        value={lang}
        onChange={handleChange}
        options={languages}
        placeholder="Select a Language"
      />
      <button onClick={handleTranslate}>Translate to English</button>
      {translation && (<div className='translate'>
        {translation}
      </div>)}
    </div>
  )
}

export default Translate