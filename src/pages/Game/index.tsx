import React, { useState, useEffect } from "react";
import { Container, Board } from "./styles";

import CardMemory from "@components/CardMemory";
import Image from "@assets/lol.png";
import { ICardMemoryProps } from "@components/CardMemory/interface";

export default function Game() {
  const [items, setItems] = useState(
    [
      { id: 1, img: Image, state: "" },
      { id: 1, img: Image, state: "" },
      { id: 2, img: "/img/css.png", state: "" },
      { id: 2, img: "/img/css.png", state: "" },
      { id: 3, img: "/img/js.png", state: "" },
      { id: 3, img: "/img/js.png", state: "" },
      { id: 4, img: "/img/scss.png", state: "" },
      { id: 4, img: "/img/scss.png", state: "" },
      { id: 5, img: "/img/react.png", state: "" },
      { id: 5, img: "/img/react.png", state: "" },
      { id: 6, img: "/img/vue.png", state: "" },
      { id: 6, img: "/img/vue.png", state: "" },
      { id: 7, img: "/img/angular.png", state: "" },
      { id: 7, img: "/img/angular.png", state: "" },
      { id: 8, img: "/img/nodejs.png", state: "" },
      { id: 8, img: "/img/nodejs.png", state: "" },
    ].sort(() => Math.random() - 0.5)
  );

  const [openCards, setOpenCards] = useState<any[]>([]);
  const [clearedCards, setClearedCards] = useState({});

  useEffect(() => {
    if (openCards.length >= 2) {
      setTimeout(() => {
        evaluate();
      }, 500);
      console.log(clearedCards);
    }
  }, [openCards]);

  function evaluate() {
    const [first, second] = openCards;

    if (first.state === second.state) {
      if (first.id === second.id) {
        setClearedCards((prev): any => ({ ...prev, [first.id]: first }));
        setOpenCards([]);
        return;
      }
    }

    setTimeout(() => {
      setOpenCards([]);
    }, 500);
  }

  function handleClick(index: number, item: ICardMemoryProps) {
    let dados = items;
    if (dados[index].state === "open") {
      dados[index].state = "";
      setItems(dados);
      return;
    }
    dados[index].state = "open";
    setItems(dados);

    if (openCards.length >= 1) {
      setOpenCards((prev): any => {
        return [...prev, item];
      });
    } else {
      setOpenCards([item]);
    }
  }

  return (
    <Container>
      <h1>Memory Game - LOL</h1>
      <Board>
        {items.map((item, index) => (
          <CardMemory
            key={index}
            index={index}
            item={item}
            clearedCards={clearedCards}
            handleClick={handleClick}
          />
        ))}
      </Board>
    </Container>
  );
}
