import React from 'react'
import { 
  DesignContainer,
  DesignCardContainer,
  DesignBox,
  DesignTitle,
  DesignText } from './style/design.style';

import { DesignCard } from '../element';

import { design } from '../../data'

//? the design section of the main section
// cSpell:ignore Krita Inkscape
// todo: link from the deign card to show the plate. Add route to data and pass it down to link in DesignCard. Put link in DesignCard.

const Design = () => {

  const DisplayCard = design.map(item => {
    return (
      <DesignCard 
        key={item.id} 
        title={item.title} 
        desc={item.desc} 
        gap={item.gap} 
        imgSrc={item.imgSrc}
        rte={item.rte} />
    )
  });

  return (
    <>
      <DesignBox>
        <DesignContainer>
          <DesignTitle>Design Concepts</DesignTitle>
          <DesignText>I work with Krita, Inkscape, Gimp, and Figma. Here is a showcase of Figma projects.</DesignText>
          <DesignCardContainer>
              {DisplayCard}
          </DesignCardContainer>
        </DesignContainer>
      </DesignBox>
    </>
  )
};

export default Design;