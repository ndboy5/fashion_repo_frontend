import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useMemo, useState } from "react";
import Home from "./components/home/home";
import ChatContainer from "./components/chat/chatContainer";
import Gallery from "./components/gallery/gallery";
import OrderForm from "./components/order/orderForm";
import SignUp from "./components/Signup/signup";
import SignIn from "./components/Signin/signin";
import MeasurementList from "./components/myHome/measurement/measurementList";
import MyHome from "./components/myHome/myHome";
import Market from "./components/market/market";
import SingleMeasurement from "./components/myHome/measurement/singleMeasurement";
import Layout from "./components/layouts/layout";
import ProfileComponent from "./components/profile/profileComponent";
import BuyNowModal from "./components/market/buyNowModal";
import CartModal from "./components/market/cartModal";
import SingleTopic from "./components/topics/singleTopic";

import MessageContainer from "./components/chat/messageContainer";
import ChatLog from "./components/chat/chatLog";
import NewMeasurement from "./components/myHome/measurement/newMeasurement";
import { UserContext } from "./utils/userContext";

function App() {
  const [user, setUser] = useState(null);
  const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <div className="App">
      <UserContext.Provider value={providerValue}>
        <Routes>
          <Route element={<Layout />}>
            {/*  defining the routes for the app  */}
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/myhome" element={<MyHome />} />
            <Route path="/chatContainer" element={<ChatContainer />} />
            <Route path="/topics/:id" element={<SingleTopic />} />
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
            <Route path="/CartModal" element={<CartModal />} />
            <Route path="/messageContainer" element={<MessageContainer />} />
            <Route path="/chatLog" element={<ChatLog />} />
            <Route path="/newMeasurement" element={<NewMeasurement />} />
          </Route>
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
