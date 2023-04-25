import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex max-w-[400px] flex-col items-center justify-center overflow-hidden rounded-xl">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
