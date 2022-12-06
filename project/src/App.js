import "./App.css";
import Header from "./components/layouts/header";
import Footer from "./components/layouts/footer";
import Nav from "./components/home/nav";
import Carousel from "./components/home/carousel";
import Home from "./components/home/home";
import ChatHeader from "./components/chat/chatHeader";
import ChatBody from "./components/chat/chatBody";
import ChatMessage from "./components/chat/chatMessage";
import ChatContainer from "./components/chat/chatContainer";
import Gallery from "./components/gallery/gallery";

function App() {
  return (
    <div className="App">
      <Header />

      <Nav />
      <Carousel />
      <Home />
      <Footer />
      <Gallery />
      <ChatContainer />
    </div>
  );
}

export default App;
