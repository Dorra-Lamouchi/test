//import logo from './logo.svg';
import './App.css';
//import firebasedb from './firebase';
//import Listpub from './listepublication'
//import Appp from './components/test'
import NavBar from './headers/nav';
import Footer from './headers/foot'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Search from './components/search'
import Formations from "./components/categories/formations"
//import Cards from "./components/Cards/Cards"
import Stages from './components/categories/stages'
import Emploi from './components/categories/emploi'
//import Form from 'react-bootstrap/Form'
import Contact from './components/contact'
import Accueil from './components/accueil'
import Affichemploi from './components/categories/afficheemploi'
import Affichestage from './components/categories/affichestage'
import Affichedetail from './components/categories/afficheformation'
import {
  BrowserRouter as Router,
  Route
 
} from "react-router-dom";
import SignUp from './components/SignUp/signUp';
import SignIn from './components/SignIn/signIn';

class App extends React.Component {
 
render(){
  return (
    <Router>
    <div className="App">
       <div class="app-main__outer">
        <div class="app-main__inner"></div>
        <div class="tab-content">
        <div class="tab-pane tabs-animation fade show active" id="tab-content-0" role="tabpanel">
          <div class="row-9" >
    <NavBar />
    <Route path="/" exact component={SignUp}></Route>
    <Route path="/signin" exact component={SignIn}></Route>
    <Route path="/accueil" exact component={Accueil}></Route>
    <Route path="/emploi" exact component={Emploi}></Route>
    <Route path="/Formations" exact component={Formations}></Route>
    <Route path="/Stages" exact component={Stages}></Route>
    <Route path="/contact" exact component={Contact}></Route>
    <Route path="/afficheformation/:id" exact component={Affichedetail}></Route>
    <Route path="/affichestage/:id" exact component={Affichestage}></Route>
    <Route path="/afficheemploi/:id" exact component={Affichemploi}></Route>
    <Footer />
    </div>
    </div>
    </div>
    </div>
    </div>
  </Router>
  );
}
}

export default App;
