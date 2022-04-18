import React, { useState, useEffect } from 'react';
import { CardContainer, ContentCard, FrontCard, BackCard } from './styles';

import { ICardProps } from './interface';

export default function Card({ name, title, tags, image }: ICardProps) {

  useEffect(() => {

  }, []);

  return(
    <CardContainer>
      <ContentCard className="flip-card-inner">

        <FrontCard>
          <img src={`http://ddragon.leagueoflegends.com/cdn/12.7.1/img/champion/${image}`} alt="Foto do campeão" />
        </FrontCard>
        <BackCard>
          <h1>{name}</h1>
          <h2>{title}</h2>
          <p>[{tags.join(", ")}]</p>

        </BackCard>

      </ContentCard>
    </CardContainer>
  )
}