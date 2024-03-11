import './styles/app/App.css';
//PAGES
import SignIn from './pages/signin/signin';
import User from './pages/user/user';
import HomePage from './pages/homepage/homepage';
//COMPONENTS
import Header from './components/header/header';
import Footer from './components/footer/footer';
//CONTEXT
import UserContext from './context/SignContext';
import { useContext } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';



function App() {

  const {logged} = useContext(UserContext);

  return (
    <>
    <Header/>
        <Routes>
          <Route path="/"                  element={<HomePage/>} />
          <Route path="/index"             element={<HomePage/>} />
          <Route path="/sign-in"           element={!logged ? <SignIn/> : <Navigate to="/profile"/>} />
          <Route path="/profile"           element={!logged ? <Navigate to="/sign-in"/> : <User/>} />
          <Route path="*"                  element={<HomePage/>}/>
        </Routes>
    <Footer/>
    </>
  );
}

export default App;
