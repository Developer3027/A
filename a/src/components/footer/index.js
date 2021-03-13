// cSpell: ignore noreferrer
import {
  FooterContainer,
  FooterWrapper,
  FooterMain,
  FooterMid,
  FooterDiv,
  FooterLogo,
  FooterTitle,
  FooterP,
  FooterUL,
  FooterLI,
  FooterLink,
  FooterAnchor
} from './style/footer.style';
import Logo from './style/Logo2.png';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterMain>
          <FooterTitle>Developer3027</FooterTitle>
          <FooterP>dev3027@mason-roberts.com</FooterP>
        </FooterMain>
        <FooterMid>
          <FooterLogo src={Logo} alt='dev 30 27' />
        </FooterMid>
        <FooterDiv>
          <FooterUL>
            <FooterAnchor
              href='https://blog.mason-roberts.com'
              target='_blank'
              rel='noreferrer'>
              <FooterLI>Blog</FooterLI>
            </FooterAnchor>
            <FooterLink to='/contact'>
              <FooterLI>Contact</FooterLI>
            </FooterLink>
            <FooterAnchor
              href='/Mason+Roberts+Resume.pdf'
              target='_blank'
              rel='noopener'>
              <FooterLI>Resume</FooterLI>
            </FooterAnchor>
          </FooterUL>
        </FooterDiv>
        <FooterDiv>
          <FooterUL>
            <FooterAnchor
              href='https://www.linkedin.com/in/mason-roberts-3027/'
              target='_blank'
              rel='noreferrer'>
              <FooterLI>LinkedIn</FooterLI>
            </FooterAnchor>
            <FooterAnchor
              href='https://twitter.com/Developer3027'
              target='_blank'
              rel='noreferrer'>
              <FooterLI>Twitter</FooterLI>
            </FooterAnchor>
          </FooterUL>
        </FooterDiv>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
