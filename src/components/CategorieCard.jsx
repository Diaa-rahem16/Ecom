const CategorieCard = ({ imgSrc, title }) => {
  return (
    <div className="flex transform hover:scale-110 transition-all duration-500 flex-col h-[200px] relative rounded-2xl cursor-pointer ">
      {" "}
      <img src={imgSrc} className="h-full relative w-[200px] object-cover" />
      <h3 className="text-black text-lg font-montserrat absolute w-full h-[20%] bottom-[-10%]  bg-white bg-opacity-80 z-10 text-center font-semibold">
        {title}
      </h3>
    </div>
  );
};

export default CategorieCard;
