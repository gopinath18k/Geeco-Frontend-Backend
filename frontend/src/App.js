import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Allpumps } from "./components/AllPumps/Allpumps";
import { Contactus } from "./components/Contactus/Contactus";
import { Home } from "./components/Home/Home";
import PumpSelectionTool from "./components/PumpSelectionTool/PumpSelectionTool";
import { RegisterPump } from "./components/Registration/RegisterPump";
import { RegisteredPumps } from "./components/Registration/RegisteredPumps";
import { Agriculture } from "./components/AllPumps/Agriculture/Agriculture";
import { Navbar } from "./components/Home/Header/Navbar";
import Footer from "./components/Home/Footer/Footer";
import { BorewellV4Pumps } from "./components/AllPumps/Agriculture/Borewell_V4_Pump/Borewell_V4_Pump";
import { V4TuffPump } from "./components/AllPumps/Agriculture/Borewell_V4_Pump/V4_Tuff_Pump/V4_Tuff_Pump";
import { V4BulletPump } from "./components/AllPumps/Agriculture/Borewell_V4_Pump/V4_Bullet_Pump/V4_Bullet_Pump";


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/contact-us' element={<Contactus/>}></Route>
        <Route path='/all-pumps-categories' element={<Allpumps/>}></Route>
        <Route path='/pump-selection-tool' element={<PumpSelectionTool/>}></Route>
        <Route path='/warranty-registration' element={<RegisterPump/>}></Route>
        <Route path='/registered-pumps' element={<RegisteredPumps/>}></Route>
        <Route path='/agriculture-pump-categories' element={<Agriculture/>}></Route>
        <Route path='/agriculture-pump/borewell_v4_pumps' element={<BorewellV4Pumps/>}></Route>
        <Route path='/agriculture-pump/borewell_v4_pumps/v4_tuff_pump' element={<V4TuffPump/>}></Route>
        <Route path='/agriculture-pump/borewell_v4_pumps/v4_bullet_pump' element={<V4BulletPump/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
