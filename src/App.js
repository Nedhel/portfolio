import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Element } from "react-scroll";
import { Skills } from "./components/Skills";
import { Latestwork } from "./components/Latestwork";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
    return (
        <div className="flex flex-col min-h-screen relative">
            <LanguageProvider>
                <Header />
                <main className="flex-grow relative">
                    <Element name="Home">
                        <Home />
                    </Element>
                    <Element name="About">
                        <About />
                    </Element>
                    <Element name="Skills">
                        <Skills />
                    </Element>
                    <Element name="Contact">
                        <Contact />
                    </Element>
                    <Element name="Latestwork">
                        <Latestwork />
                    </Element>
                    {/*<Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Contact" element={<Contact />} />
                </Routes>*/}
                </main>
                <Footer />
            </LanguageProvider>
        </div>
    );
}

export default App;
