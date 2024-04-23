import React, {useEffect, useState} from 'react';
import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./skils/Skills";
import RemoteWork from "./remoteWork/RemoteWork";
import Contact from "./Contacts/Contact";
import Projects from "./Projects/Projects";
import Footer from "./Footer/Footer";
import Particle from "./common/components/particle/Particle";

function App() {
    const [blogLoading, setBlogLoading] = useState<boolean>(false)
    const [estateLoading, setEstateLoading] = useState<boolean>(false)

    useEffect(() => {
        const getBlogApp = async () => {
            setBlogLoading(true);
            try {
                const res = await fetch('https://blog-fullstack-v4zf.onrender.com/');
                const data = await res.json();
                if (res.ok) {
                    setBlogLoading(false);
                } else {
                    setBlogLoading(false);
                    console.log(data.error);
                }
            } catch (e) {
                console.log(e);
                setBlogLoading(false);
            }
        };
        const getEstateApp = async () => {
            setEstateLoading(true);
            try {
                const res = await fetch('https://alex-orlov-estate-app.onrender.com/');
                const data = await res.json();
                if (res.ok) {
                    setEstateLoading(false);
                } else {
                    setEstateLoading(false);
                    console.log(data.error);
                }
            } catch (e) {
                console.log(e);
                setEstateLoading(false);
            }
        };
        getBlogApp();
        getEstateApp()
    }, []);

    return (
        <div className="App">

            <Particle/>
            <Header/>
            <Main/>
            <Skills/>
            <Projects blogLoading={blogLoading} estateLoading={estateLoading}/>
            <RemoteWork/>
            <Contact/>
            <Footer/>

        </div>
    );
}

export default App;
