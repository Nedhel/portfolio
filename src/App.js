import { Corner } from "./components/Corner";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Main } from "./components/Main";
import { LanguageProvider } from "./context/Language";

function App() {
    return (
        <div className="xl:px-20 bg-[#111111]">
            <div className="bg-[#111111] h-screen flex justify-center items-center relative">
                <Corner position="left" />
                <section className="text-white border w-[97%] h-[98%] sm:h-[95%] z-10 bg-[#111111] rounded-md p-4 flex flex-col">
                    <LanguageProvider>
                        <Navbar />
                        <Main />
                        <Footer />
                    </LanguageProvider>
                </section>
                <Corner position="right" />
            </div>
        </div>
    );
}

export default App;
