import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {
  return (
    <div className="flex flex-col items-center h-screen">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
