import { Route, Routes } from "react-router-dom";
import { Dashboard, Orders } from "./Components/Pages";
import "./App.css";
import Customers from "./Components/Pages/Customers/Customers";
import Products from "./Components/Pages/Products/Products";
import Analytics from "./Components/Pages/Analytics/Analytics";
import Marketing from "./Components/Pages/Marketing/Marketing";
import Integrations from "./Components/Pages/Integrations/Integrations";
import My_Store from "./Components/Pages/My_Store/My_Store";
import Discounts from "./Components/Pages/Discounts/Discounts";
import Settings from "./Components/Pages/Settingss/Settings";
import Get_Help from "./Components/Pages/Get_Help/Get_Help";
import MyProfile from "./Components/Pages/MyProfile/MyProfile";
import PersonalInformation from "./Components/Pages/PersonalInformation/PersonalInformation";
import LoginService from "./Components/Pages/LoginService/LoginService";
import General from "./Components/Pages/General/General";
import Login from "./Components/Pages/Login/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/products" element={<Products />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/marketing" element={<Marketing />} />
      <Route path="/integrations" element={<Integrations />} />
      <Route path="/my_store" element={<My_Store />} />
      <Route path="/discounts" element={<Discounts />} />
      <Route path="/settings" element={<Settings />} > 
      <Route path="general" element={<General />} />
      </Route>
      <Route path="/get_help" element={<Get_Help />} />
      <Route path="/my-profile" element={<MyProfile />}>
        <Route path="personal-information" element={<PersonalInformation />} />
        <Route path="login-service" element={<LoginService />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
