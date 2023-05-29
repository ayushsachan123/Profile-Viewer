import './App.css';
import { Fragment } from 'react';
import React, { useState } from "react";
import Input from './components/Input';
import Leetcodeprofile from './components/Leetcodeprofile';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Githubprofile } from './components/Githubprofile';
import Codeforcesprofile from './components/Codeforcesprofile';
import Footer from './components/Footer';
import Alert from './components/Alert';

function App() {
  
    const [alert, setAlert] = useState(null);
     const showAlert = (message, type) => {
       setAlert({
         msg: message,
         type: type,
       });
       setTimeout(() => {
         setAlert(null);
       }, 2000);
     };

  return (
    <>
      <Router>
        <Fragment>
          <Navbar />
          <Alert alert={alert} />
          <Routes>
            <Route exact path="/" element={<Input showAlert={showAlert}/>}></Route>
            <Route exact path="/leetcode" element={<Leetcodeprofile />}></Route>
            <Route exact path="/github" element={<Githubprofile />}></Route>
            <Route
              exact
              path="/codeforces"
              element={<Codeforcesprofile />}
            ></Route>
          </Routes>
          <Footer />
        </Fragment>
      </Router>
    </>
  );
}

export default App;
