import CategorieCard from "../components/CategorieCard";

const categories = [
  {
    imgSrc: "../public/images/img_accessories.png",
    altText: "gaming",
    title: "Accessories",
  },
  {
    imgSrc: "../public/images/img_units.png",
    altText: "gaming",
    title: "Units",
  },
  {
    imgSrc: "../public/images/img_games.png",
    altText: "gaming",
    title: "Games",
  },
  {
    imgSrc: "../public/images/img_collectibles.png",
    altText: "gaming",
    title: "Collections",
  },
  {
    imgSrc: "../public/images/img_consoles.png",
    altText: "gaming",
    title: "Console",
  },
];

const Categorie = () => {
  return (
    <section className=" padding-x py-4 my-6 ">
      <div className="flex flex-col justify-around items-center  px-8 py-4 my-6 bg-black  ">
        <h1 className="text-2xl font-montserrat font-medium text-white">
          Gaming
        </h1>
        <div className="flex justify-between w-[95%] my-10 sm:flex-col sm:gap-12">
          {categories.map((category, index) => (
            <CategorieCard
              key={index}
              imgSrc={category.imgSrc}
              altText={category.altText}
              title={category.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categorie;
