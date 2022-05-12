import React, { useState, useEffect } from "react";
import { Container, Board } from "./styles";

import CardMemory from "@components/CardMemory";
import Image from "@assets/lol.png";
import { ICardMemoryProps } from "@components/CardMemory/interface";

export default function Game() {
  const [items, setItems] = useState(
    [
      { key: 0, id: 1, img: Image, state: "" },
      { key: 1, id: 1, img: Image, state: "" },
      { key: 2, id: 2, img: "/img/css.png", state: "" },
      { key: 3, id: 2, img: "/img/css.png", state: "" },
      { key: 4, id: 3, img: "/img/js.png", state: "" },
      { key: 5, id: 3, img: "/img/js.png", state: "" },
      { key: 6, id: 4, img: "/img/scss.png", state: "" },
      { key: 7, id: 4, img: "/img/scss.png", state: "" },
      { key: 8, id: 5, img: "/img/react.png", state: "" },
      { key: 9, id: 5, img: "/img/react.png", state: "" },
      { key: 10, id: 6, img: "/img/vue.png", state: "" },
      { key: 11, id: 6, img: "/img/vue.png", state: "" },
      { key: 12, id: 7, img: "/img/angular.png", state: "" },
      { key: 13, id: 7, img: "/img/angular.png", state: "" },
      { key: 14, id: 8, img: "/img/nodejs.png", state: "" },
      { key: 15, id: 8, img: "/img/nodejs.png", state: "" },
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

  function handleClick(index: number, item: any) {
    if (openCards.length >= 1) {
      if (openCards[0].key === items[index].key) {
        return setOpenCards([]);
      }
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
            open={!!openCards.find((card) => card.key === item.key)}
            clearedCards={clearedCards}
            handleClick={handleClick}
          />
        ))}
      </Board>
    </Container>
  );
}
