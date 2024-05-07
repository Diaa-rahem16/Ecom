import BestSells from "../../Sections/BestSells";
import Categorie from "../../Sections/Categorie";
import Expensive from "../../Sections/Expensive";
import Promotion from "../../Sections/Promotion";
import ImageSlider from "../../components/Slider";
const ClientHome = () => {
  return (
    <div className="bg-[#F0F0F0] bg-cover overflow-x-hidden max-w-screen">
      <ImageSlider />
      <BestSells />
      <Promotion />
      <Categorie />
      <Expensive />
    </div>
  );
};

export default ClientHome;
