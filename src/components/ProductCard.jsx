const ProductCard = ({ imgUrl, sellerName, name, discrtiption, price }) => {
  return (
    <div className=" flex flex-col transform hover:scale-105 w-[330px] border  ring-2 ring-gray-200 cursor-pointer transition-all duration-500   rounded-xl shadow-lg">
      <img src={imgUrl} alt={name} className="h-[220px] w-full object-cover" />
      <div className="flex  px-4 justify-between items-center overflow-hidden border-gray-slate border">
        <div className="py-4 px-4 flex flex-col">
          <h1 className="text-lg font-montserrat font-medium text-[#808080]">
            {sellerName}
          </h1>
          <h2 className="text-lg font-montserrat font-medium">{name}</h2>
          <p className="text-sm font-montserrat font-medium overflow-ellipsis overflow-hidden  h-[40px] text-[#808080] leading-normal">
            {discrtiption}
          </p>
        </div>
        <p className=" text-lg font-montserrat font-medium align-middle w-[]">
          {price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
