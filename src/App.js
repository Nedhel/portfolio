import { Corner } from "./components/Corner";
import { Navbar } from "./components/Navbar";

function App() {
    return (
        <div className="xl:px-20 bg-[#111111]">
            <div className="bg-[#111111] h-screen flex justify-center items-center relative">
                <Corner position="left" />
                <section className="text-white border w-[97%] h-[98%] sm:h-[95%] z-10 bg-[#111111] rounded-md">
                    <Navbar />
                </section>
                <Corner position="right" />
            </div>
        </div>
    );
}

export default App;
