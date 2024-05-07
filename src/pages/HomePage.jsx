import BestSells from "../Sections/BestSells";
import Categorie from "../Sections/Categorie";
import Expensive from "../Sections/Expensive";
import Promotion from "../Sections/Promotion";
import Header from "../components/Header";
import ImageSlider from "../components/Slider";
import Footer from "../components/Footer";
const HomePage = () => {
  return (
    <div className="bg-[#F0F0F0] bg-cover overflow-x-hidden max-w-screen">
      <Header />
      <ImageSlider />
      <BestSells />
      <Promotion />
      <Categorie />
      <Expensive />
      <Footer />
    </div>
  );
};

export default HomePage;
