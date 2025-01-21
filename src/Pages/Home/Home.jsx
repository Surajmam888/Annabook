import { Box } from "@mui/material";
import BlogSection from "../../Components/BlogSection";
import CustomerSupport from "../../Components/CustomerSupport";
import HeroSection from "../../Components/HeroSection";
import Navbar from "../../Components/Navbar";
import BettingBlog from "../../Components/BettingBlog";
import MyCarousel from "../../Components/MyCarousel";
import HappyClients from "../../Components/HappyClients";
import Footer from "../../Components/Footer";


const HomePage = () => {

 return (
    <Box>
      <Navbar/>
      <HeroSection/>
      <CustomerSupport/>
      <BlogSection/>
      <BettingBlog/>
      <MyCarousel/>
      <HappyClients/>
      <Footer/>
    </Box>
  );
};

export default HomePage;