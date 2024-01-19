import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./pages/Main";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Festival from "./components/Festival";
function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <Festival />
      <ToastContainer />
    </>
  );
}

export default App;
