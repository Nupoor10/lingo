import React from 'react'
import Nouns from "../../components/Nouns/Nouns"
import Pronouns from "../../components/Pronouns/Pronouns"
import Verbs from "../../components/Verbs/Verbs"
import Adjectives from "../../components/Adjectives/Adjectives"
import Adverbs from "../../components/Adverbs/Adverbs"
import "./PartsOfSpeech.css"

const PartsOfSpeech = () => {

  return (
    <div className='parts__of__speech__page'>
        <h1>Parts of Speech</h1>
        <Nouns />
        <Pronouns />
        <Verbs />
        <Adjectives />
        <Adverbs />
    </div>
  )
}

export default PartsOfSpeech