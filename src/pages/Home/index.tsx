import { useState, useEffect } from 'react';
import { Container, Image, Content, Phrase } from './styles'; 

import ImageBackground from '@assets/ImagemFundo.png';

import { frases } from '../../mocks'

export default function Home() {

  const [phrase, setPhrase] = useState('');

  function getRandomFrase(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    setPhrase(frases[Math.floor(Math.random() * (max - min)) + min]);
  }

  useEffect(() => {
    getRandomFrase(0, frases.length);
  }, [])
  

  return(
    <Container>
      <Image src={ImageBackground} alt="Imagem de fundo de league of legends" />
      
      <Content>
        <Phrase>"{phrase.slice(0, Math.floor(phrase.length/3))}</Phrase>
        <Phrase>{phrase.slice(Math.floor(phrase.length/3), 2*phrase.length/3)}</Phrase>
        <Phrase>{phrase.slice(Math.floor(2*phrase.length/3), phrase.length)}"</Phrase>

      </Content>

    </Container>
  )
}