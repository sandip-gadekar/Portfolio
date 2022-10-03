import './App.css';
import { Container, Grid } from '@material-ui/core';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Resume from './pages/Resume/Resume';
import Portfolio from './pages/Portfolio/Portfolio';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from './pages/Contact/Contact';
import Colorpicker from './components/ColorPicker/Colorpicker';


function App() {
  document.title = "Porfolio";
  return (
    <div className="app">


      <Colorpicker />
      <Container className="top__10">

        <Grid container spacing={7}>
          <Grid item xs={12} sm={12} md={4} lg={3} >

            <Profile />
          </Grid>
          <Grid item xs>


            <Router>
              <Header />
              <div className="main__content container__shadow">
                <Switch>
                  <Route path="/portfolio">
                    <Portfolio />
                  </Route>
                  <Route path="/contact">
                    <Contact />
                  </Route>
                  <Route path="/">
                    <Resume />
                  </Route>
                </Switch>
              </div>
            </Router>
            <Footer />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
