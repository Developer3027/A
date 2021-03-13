import React from 'react';
import styled from 'styled-components';
import { 
  CardLink,
  InnerCard,
  CardTitle,
  CardText
   } from './style/design.style'

//? Card for design and project sections of the main page.
//? The card base div is styled here so I can use the image src, passed in from the data, as a background image for the div. All other elements are in the style file as typical.

const DesignCard = ({ title, gap, imgSrc, rte }) => {
  const CardBase = styled.div`
  width: 250px;
  height: 250xpx;
  background-image: url(${imgSrc});
  background-position: center;
  background-repeat: no-repeat;
  background-color: #333;
  border-radius: 5px;
  box-shadow: 1px 1px 5px 3px #777;
  display: flex;
  justify-content: center;
  align-items: center;
  `;

  return (
    <>
      <CardBase className={gap}>
        <CardLink to={rte}>
          <InnerCard >
            <CardTitle>{title}</CardTitle>
            <CardText>Learn More</CardText>
          </InnerCard>
        </CardLink>
      </CardBase>
    </>
  )
}

export default DesignCard;
