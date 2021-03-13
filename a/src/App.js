import { Route } from 'react-router-dom';

// cSpell: ignore Copywrite nutrasite mytube

import Header from './components/header';
import GlobalStyle, { Container, AppSection } from './GlobalStyles';

import Hero from './components/hero';
import Contact from './components/forms/contact';
import Login from './components/forms/login';
import Register from './components/forms/register';

import Projects from './components/projects';
import Packages from './components/packages';

import Design from './components/design';
import Portfolio from './components/plates/design/portfolio';
import Nutrasite from './components/plates/design/nutrasite';
import MyTube from './components/plates/design/mytube';

import Project from './components/project';
import PortfolioWeb from './components/plates/web/portfolio';
import MusicWeb from './components/plates/web/song';
import CouponWeb from './components/plates/web/coupon';

import Footer from './components/footer';

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />

        <Route path='/contact' component={Contact} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/projects' component={Projects} />
        <Route path='/packages' component={Packages} />

        <AppSection>
          <Route exact path='/' component={Hero} />
        </AppSection>

        <AppSection>
          <Route exact path='/' component={Design} />
          <Route path='/portfolio-design' component={Portfolio} />
          <Route path='/nutra-plate' component={Nutrasite} />
          <Route path='/mytube-plate' component={MyTube} />
        </AppSection>

        <AppSection>
          <Route exact path='/' component={Project} />
          <Route path='/portfolio-web' component={PortfolioWeb} />
          <Route path='/music-plate' component={MusicWeb} />
          <Route path='/coupon-plate' component={CouponWeb} />
        </AppSection>
        <Footer />
      </Container>
    </>
  );
}

export default App;
