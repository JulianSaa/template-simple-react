import Navbar from "./components/Navbar";
import Simpsons from "./components/Body/Body";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="container-fluid">
        <Navbar />
        <Simpsons />
        <Footer />
      </div>
    </>
  );
}

export default App;
