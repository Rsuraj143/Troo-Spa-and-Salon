import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Routes/Home';
import About from './Routes/About';
import Service from "./Routes/Services/Services"
import ServiceDetails from "./Routes/Services/ServiceDetails"
import Team from './Routes/Pages/Team';
import TeamDetails from "./Routes/Pages/TeamDetails"
import Testimonial from './Routes/Pages/Testimonial';
import Gallery from "./Routes/Pages/Gallery"
import Work from "./Routes/Pages/Work"
import WorkDetails from "./Routes/Pages/WorkDetails"
import FAQ from "./Routes/Pages/FAQs"
import Pricingtable from './Routes/Pages/Pricingtable';
import CommingSoon from './Routes/Pages/CommingSoon';
import Errorpage from './Routes/Pages/Errorpage';
import Blogs from './Routes/Blogs/Blogs';
import BlogDetails from './Routes/Blogs/BlogDetails';
import ContactUs from './Routes/ContactUs';
import Appointment from './Routes/Appointment';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/Home' element={<Home/>}  />
        <Route path='/Home/About_Us' element={<About/>} />

        <Route path='/Home/Our_Services' element={<Service/> } />
        <Route path='/Home/Our_Services/Service_Details' element={<ServiceDetails/> } />

        <Route path='/Home/Our_Team' element={<Team/> } />
        <Route path='/Home/Our_Team/Team_Details' element={<TeamDetails />} />
        <Route path='/Home/Testimonial' element={<Testimonial/> } />
        <Route path='/Home/Gallery' element={<Gallery/> } />
        <Route path='/Home/Our_Works' element={<Work/> } />
        <Route path='/Home/Our_Works/Work_Details' element={<WorkDetails/> } />
        <Route path='/Home/FAQ' element={<FAQ/> } />
        <Route path='/Home/Pricing_Table' element={<Pricingtable/> } />
        <Route path='/Home/Comming_Soon' element={<CommingSoon/> } />
        <Route path='/Home/Error404' element={<Errorpage/> } />

        <Route path='/Home/Blogs' element={<Blogs/> } />
        <Route path='/Home/Blogs/Blog_Details' element={<BlogDetails/> } />

        <Route path='/Home/Contact_Us' element={<ContactUs/> } />
        <Route path='/Home/Make_An_Appointment' element={<Appointment/> } />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
