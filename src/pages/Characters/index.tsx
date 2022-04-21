import React, { useState, useEffect } from "react";

import { Container, ContentGrid, ContentMobile } from "./styles";

import Card from "@components/Card";

import { api } from "@services/api";

export default function Characters() {
  const [champions, setChampions] = useState({});

  useEffect(() => {
    api.get("data/pt_BR/champion.json").then((res) => {
      console.log(res.data.data);
      setChampions(res.data.data);
    });
  }, []);

  return (
    <Container>
      <ContentGrid>
        {Object.values(champions).map((champion: any) => (
          <Card
            key={champion.id}
            name={champion.name}
            title={champion.title}
            tags={champion.tags}
            image={champion.image.full}
          />
        ))}
      </ContentGrid>
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
