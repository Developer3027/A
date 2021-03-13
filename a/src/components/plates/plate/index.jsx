// cSpell: ignore copywrite MERN
import { motion } from 'framer-motion';
import {
  Main,
  PlateTwoCol,
  PlateImgCol,
  PlateImage,
  Wrapper,
  TopSec,
  PlateAnchor,
  PlateButton,
  PlateSection,
  PlateColDiv,
  PlateText,
  PlateTextWidth,
  PlateH3,
  PlateP
} from './style/plate.style';

const containerVariant = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      delay: .3
    }
  },
  when: 'beforeChildren'
}

const topVariant = {
  initial: {
    opacity: 0,
    y: '-100vh'
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      delay: .8,
      duration: 1
    }
  }
}

const buttonVariant = {
  hover: {
    scale: [1,1.1,1,1.1,1,1.1,1]
  }
}

const midVariant = {
  initial: {
    opacity: .5,
    x: '-100vw'
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 1,
      type: 'spring',
      duration: 1
    }
  }
}

const bottomVariant = {
  initial: {
    opacity: 0,
    y: '100vh'
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      delay: .5,
      duration: 1.2
    }
  }
}

const imgVariant = {
  initial: {
    opacity: 0,
    x: '-100vw'
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      mass: .3,
      damping: 3,
      delay: 1.4,
    }
  }
}

const Plate = ({ id, btn1, btn1Path, plateName, btn2Path, btn2, date, linkAddr, linkName, desc, imgSrc, imgAlt }) => {
  return (
    <Main
      variants={containerVariant}
      initial='initial'
      animate='animate'
    key={id}>
      <PlateTwoCol>
        <Wrapper>
          <TopSec 
            variants={topVariant}>
            <PlateAnchor to={btn1Path}>
              <PlateButton
                variants={buttonVariant}
                whileHover='hover'>{btn1}</PlateButton>
            </PlateAnchor>
            <h2>{plateName}</h2>
            <PlateAnchor to={btn2Path}>
              <PlateButton
                variants={buttonVariant}
                whileHover='hover'>{btn2}</PlateButton>
            </PlateAnchor>
          </TopSec>
          <motion.div
            variants={midVariant}>
            <PlateSection>
              <PlateText>Date:</PlateText>
              <PlateText>{date}</PlateText>
            </PlateSection>
            <PlateSection>
              <PlateText>Link:</PlateText>
              <PlateTextWidth>
                <a 
                  href={linkAddr}
                  target='_blank'
                  rel='noreferrer'>{linkName}</a>
              </PlateTextWidth>
            </PlateSection>
          </motion.div>
          <PlateColDiv
            variants={bottomVariant}>
            <PlateH3>Concept:</PlateH3>
            <PlateP>{desc}</PlateP>
          </PlateColDiv>
        </Wrapper>
        <PlateImgCol>
          <PlateImage
            variants={imgVariant}
            whileHover={{ scale: 1.1 }}
             src={imgSrc} alt={imgAlt} />
        </PlateImgCol>
      </PlateTwoCol>
    </Main>
  );
};

export default Plate;
