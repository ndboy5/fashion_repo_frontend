import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/layouts/header";
import Footer from "./components/layouts/footer";
import Nav from "./components/home/nav";
import Home from "./components/home/home";
import ChatContainer from "./components/chat/chatContainer";
import Gallery from "./components/gallery/gallery";
import OrderForm from "./components/order/orderForm";

function App() {
  return (
    <>
      <div className="App">
        <Nav />
        <Routes>
          {/*  defining the routes for the app  */}
          <Route path="/" element={<Home />} />
          <Route path="/community" element={<ChatContainer />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
