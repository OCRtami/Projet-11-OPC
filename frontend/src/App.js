import './styles/app/App.css';
//PAGES
import SignIn from './pages/signin/signin';
import User from './pages/user/user';
import HomePage from './pages/homepage/homepage';
//COMPONENTS
import Header from './components/header/header';
import Footer from './components/footer/footer';

import {Routes, Route} from 'react-router-dom';


function App() {

  return (
    <>
    <Header/>
        <Routes>
          <Route path="/"                  element={<HomePage/>} />
          <Route path="/index"             element={<HomePage/>} />
          <Route path="/sign-in"           element={<SignIn/>}   />
          <Route path="/user"           element={<User/>}   />
        </Routes>
    <Footer/>
    </>
  );
}

export default App;
