import React from 'react';
import {
  HeroWrapper,
  HeroContainer,
  HeroTitleEdge,
  HeroOuter,
  HeroInner,
  HeroTop,
  HeroHL,
  HeroMid,
  HeroBtns,
  HeroBtnTwo,
  HeroLink,
  HeroTitle,
  HeroText,
  HeroPic,
  HeroImg,
  HeroMobileContainer,
  HeroMobileTop,
  HeroMobileTitleEdge,
  HeroMobilePic,
  HeroMobileImg,
  HeroMobileLow,
  HeroMobileTextDiv,
  HeroMobileText,
  HeroMobileParagraph
} from './style/hero.style';

import Me from './mason_roberts.png'

// cSpell:ignore btns

 const Hero = () => {
  return (
    <HeroWrapper>
      <HeroContainer>
        <HeroTitleEdge><span>Mason Roberts</span></HeroTitleEdge>
        <HeroOuter>
          <HeroInner>
            <div><HeroTop>A <HeroHL>digital designer</HeroHL> and <HeroHL>frontend developer</HeroHL> living in the Carolinas, United States.</HeroTop></div>
            <div><HeroMid>If you would like to know more about me, or are interested in my work, you can contact me at <HeroHL>dev3027@mason-roberts.com</HeroHL></HeroMid></div>
          </HeroInner>
          <HeroBtns>
            
            <HeroLink to='/contact'>
              <HeroBtnTwo>
                <p>Contact Me</p>
              </HeroBtnTwo>
            </HeroLink>
          </HeroBtns>
          <HeroTitle><HeroText>Developer3027</HeroText></HeroTitle>
        </HeroOuter>
        <HeroPic><HeroImg src={`${Me}`} alt='yep' /></HeroPic>
      </HeroContainer>

      <HeroMobileContainer>
        <HeroMobileTop>
          <HeroMobileTitleEdge><span>Mason Roberts</span></HeroMobileTitleEdge>
          <HeroMobilePic><HeroMobileImg src={`${Me}`} alt='yep' /></HeroMobilePic>
        </HeroMobileTop>
      
        <HeroMobileLow>
          <HeroMobileTextDiv><HeroMobileText>Developer3027</HeroMobileText></HeroMobileTextDiv>
          <div><HeroMobileParagraph>A <HeroHL>digital designer</HeroHL> and <HeroHL>full stack developer</HeroHL> living in the Carolinas, United States.</HeroMobileParagraph></div>
        </HeroMobileLow>
      </HeroMobileContainer>
    </HeroWrapper>
  )
};

export default Hero;
