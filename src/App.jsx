import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navegador from './Components/layouts/Navegador'
import Footer from './Components/layouts/Footer'
import {Switch, Route} from 'react-router-dom'
import Home from './Components/pages/Home'
import News from './Components/pages/News'
import Details from './Components/pages/Details'
import Contacts from './Components/pages/Contacts'
import NotFoundPage from './Components/pages/NotFoundPage'




const App = () => {

    return(
      <div>
        <Navegador />
     
         <Switch>
            <Route exact path='/' component={Home} />
            <Route  path='/home' component={Home} />
            <Route path='/news' component={News} />
            <Route path='/details' component={Details} />
            <Route path='/contacts' component={Contacts} />
            <Route component={NotFoundPage} />
         </Switch>

        <Footer />
      </div>
    );

};



export default App;
