import "./App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/layouts/footer";
import Nav from "./components/home/nav";
import Home from "./components/home/home";
import ChatContainer from "./components/chat/chatContainer";
import Gallery from "./components/gallery/gallery";
import OrderForm from "./components/order/orderForm";
import Header from "./components/layouts/header";
import SignUp from "./components/layouts/Signup/signup";
import SignIn from "./components/Signin/signin";
import Market from "./components/market/template";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Nav />
        <Routes>
          {/*  defining the routes for the app  */}
          <Route path="/" element={<Home />} />
          <Route path="/community" element={<ChatContainer />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/topic/:id" element={<ChatContainer />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/order" element={<OrderForm />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/market" element={<Market />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
