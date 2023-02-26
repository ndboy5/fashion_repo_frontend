import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
import ChatContainer from "./components/chat/chatContainer";
import Gallery from "./components/gallery/gallery";
import OrderForm from "./components/order/orderForm";
import SignUp from "./components/Signup/signup";
import SignIn from "./components/Signin/signin";
import MeasurementList from "./components/myHome/measurement/measurementList";
import MyHome from "./components/myHome/myHome";
import Market from "./components/market/template";
import SingleMeasurement from "./components/myHome/measurement/singleMeasurement";
import Layout from "./components/layouts/layout";
import ProfileComponent from "./components/profile/profileComponent";
import BuyNowModal from "./components/market/buyNowModal";
import CartModal from "./components/market/cartModal";
import EditDetails from "./components/profile/editDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          {/*  defining the routes for the app  */}
          <Route path="/" element={<Home />} />
          <Route path="/myhome" element={<MyHome />} />
          <Route path="/community" element={<ChatContainer />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/topic/:id" element={<ChatContainer />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/order" element={<OrderForm />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/market" element={<Market />} />
          <Route path="/myhome/measurement" element={<MeasurementList />} />
          <Route
            path="/myhome/measurement/:id"
            element={<SingleMeasurement />}
          />
          <Route path="/userProfile" element={<ProfileComponent />} />
          <Route path="/buyNowModal" element={<BuyNowModal />} />
          <Route path="/market/CartModal" element={<CartModal />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
