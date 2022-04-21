import { useState, useEffect } from "react";
import { Container, Image, Content, Phrase } from "./styles";

import ImageBackground from "@assets/ImagemFundo.png";

import { frases } from "../../mocks";

export default function Home() {
  const [phrase, setPhrase] = useState<string[]>([]);

  function getRandomFrase(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    const frase = frases[Math.floor(Math.random() * (max - min)) + min];
    const aux = frase.split(" ");
    setPhrase(aux);
  }

  useEffect(() => {
    getRandomFrase(0, frases.length);
  }, []);

  return (
    <Container>
      <Image src={ImageBackground} alt="Imagem de fundo de league of legends" />

      <Content>
        {/* <Phrase>"{phrase.slice(0, Math.floor(phrase.length/3))}</Phrase>
        <Phrase>{phrase.slice(Math.floor(phrase.length/3), 2*phrase.length/3)}</Phrase>
        <Phrase>{phrase.slice(Math.floor(2*phrase.length/3), phrase.length)}"</Phrase> */}
        <Phrase>
          "{phrase.slice(0, Math.floor(phrase.length / 3)).join(" ")}
        </Phrase>
        <Phrase>
          {phrase
            .slice(Math.floor(phrase.length / 3), (2 * phrase.length) / 3)
            .join(" ")}
        </Phrase>
        <Phrase>
          {phrase
            .slice(Math.floor((2 * phrase.length) / 3), phrase.length)
            .join(" ")}
          "
        </Phrase>
      </Content>
    </Container>
  );
}
