import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./skils/Skills";
import RemoteWork from "./remoteWork/RemoteWork";
import Contact from "./Contacts/Contact";
import Projects from "./Projects/Projects";
import Footer from "./Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <RemoteWork/>
            <Contact/>
            <Footer/>
        </div>
    );
}
export default App;
