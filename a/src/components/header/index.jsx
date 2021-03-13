import { 
  Navbar, 
  NavLeft, 
  ProjectIcon, 
  PackagesIcon, 
  BotIcon, 
  ResumeIcon, 
  NavCenter, 
  LogoIcon,
  HeaderLink,
  NavRight,
  TwitterIcon,
  LinkedinIcon,
  BlogIcon,
  UserIcon } from './style/header.style'
  //* bring in the logo image
import Logo from './style/Logo2.png';

// cSpell:ignore tooltiptext

const Header = () => {
  return (
    <>
      <Navbar>
        <NavLeft>
          <div className='tooltip'>
            <HeaderLink to='/projects'>
              <ProjectIcon />
            </HeaderLink>
              <p className='tooltiptext'>Projects</p>
          </div>
          
          <div className='tooltip'>
            <HeaderLink to='/packages'>
              <PackagesIcon />
            </HeaderLink>
              <p className='tooltiptext'>Packages</p>
          </div>

          <div className='tooltip'>
          <a
            href='/Mason+Roberts+Resume.pdf'
            target='_blank'
            rel='noopener'>
            <ResumeIcon />
          </a>
              <p className='tooltiptext'>Resume</p>
          </div>

          <div className='tooltip'>
          <a
            href='chatbot/index.html'
            target='_blank'
            rel='noopener'>
            <BotIcon /></a>
              <p className='tooltiptext'>Rive Bot</p>
          </div>

        </NavLeft>

        <NavCenter>
          <HeaderLink to='/'><LogoIcon src={Logo} alt='Developer 30 27' /></HeaderLink>
        </NavCenter>

        <NavRight>
        <div className='tooltip'>
            <a 
              href='https://blog.mason-roberts.com'
              target='_blank'
              rel='noreferrer'><BlogIcon /></a>
              <p className='tooltiptext'>Blog</p>
          </div>

          <div className='tooltip'>
          <a 
            href='https://twitter.com/Developer3027'
            target='_blank'
            rel='noreferrer'><TwitterIcon /></a>
            <p className='tooltiptext'>Twitter</p>
          </div>
          
          <div className='tooltip'>
            <HeaderLink to='/contact'><UserIcon /></HeaderLink>
              <p className='tooltiptext'>Contact</p>
          </div>

          <div className='tooltip'>
          <a 
            href='https://www.linkedin.com/in/mason-roberts-3027/'
            target='_blank'
            rel='noreferrer'><LinkedinIcon /></a>
              <p className='tooltiptext'>Linked In</p>
          </div>
        </NavRight>
      </Navbar>
    </>
  )
}

export default Header
