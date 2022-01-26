import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./pages/Main";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
    <Header/>
      <Main />
      <Footer/>
    </>
  );
}

export default App;
