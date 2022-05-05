import React, { useState, useEffect } from "react";

import { Container, ContentGrid, ScrollContent, ContentMobile } from "./styles";

import Card from "@components/Card";

import { api } from "@services/api";

export default function Characters() {
  const [champions, setChampions] = useState({});
  const [increment, setIncrement] = useState(30);

  useEffect(() => {
    api.get("data/pt_BR/champion.json").then((res) => {
      console.log(res.data.data);
      setChampions(res.data.data);
    });
  }, []);

  function loadMore() {
    if (increment < Object.keys(champions).length) {
      setIncrement((prevIncrement) => (prevIncrement += 30));
    }
  }

  return (
    <Container>
      <ScrollContent
        pageStart={0}
        loadMore={loadMore}
        hasMore={increment < Object.keys(champions).length}
        loader={
          <div className="loader" key={0}>
            Loading ...
          </div>
        }
      >
        {Object.values(champions)
          .slice(0, increment)
          .map((champion: any) => (
            <Card
              key={champion.id}
              name={champion.name}
              title={champion.title}
              tags={champion.tags}
              image={champion.image.full}
            />
          ))}
      </ScrollContent>
      {/* <ContentGrid>
        {Object.values(champions).map((champion: any) => (
          <Card
            key={champion.id}
            name={champion.name}
            title={champion.title}
            tags={champion.tags}
            image={champion.image.full}
          />
        ))}
      </ContentGrid> */}
      <ContentMobile>
        <section className="rows">
          {Object.values(champions)
            .slice(0, 53)
            .map((champion: any) => (
              <Card
                key={champion.id}
                name={champion.name}
                title={champion.title}
                tags={champion.tags}
                image={champion.image.full}
              />
            ))}
        </section>
        <section className="rows">
          {Object.values(champions)
            .slice(53, 106)
            .map((champion: any) => (
              <Card
                key={champion.id}
                name={champion.name}
                title={champion.title}
                tags={champion.tags}
                image={champion.image.full}
              />
            ))}
        </section>
        <section className="rows">
          {Object.values(champions)
            .slice(106, 159)
            .map((champion: any) => (
              <Card
                key={champion.id}
                name={champion.name}
                title={champion.title}
                tags={champion.tags}
                image={champion.image.full}
              />
            ))}
        </section>
      </ContentMobile>
    </Container>
  );
}
