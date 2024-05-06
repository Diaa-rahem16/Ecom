import { useState } from "react";








  const categories = [
    { name: 'Category 1', miniCategories: [{ link: '#', label: 'Mini 1' }, { link: '#', label: 'Mini 2' }, { link: '#', label: 'Mini 3' }, { link: '#', label: 'Mini 4' }] },
    { name: 'Category 2', miniCategories: [{ link: '#', label: 'Mini 5' }, { link: '#', label: 'Mini 6' }, { link: '#', label: 'Mini 7' }, { link: '#', label: 'Mini 8' }] },
    { name: 'Category 3', miniCategories: [{ link: '#', label: 'Mini 9' }, { link: '#', label: 'Mini 10' }, { link: '#', label: 'Mini 11' }, { link: '#', label: 'Mini 12' }] },
    { name: 'Category 4', miniCategories: [{ link: '#', label: 'Mini 13' }, { link: '#', label: 'Mini 14' }, { link: '#', label: 'Mini 15' }, { link: '#', label: 'Mini 16' }] },
    { name: 'Category 5', miniCategories: [{ link: '#', label: 'Mini 17' }, { link: '#', label: 'Mini 18' }, { link: '#', label: 'Mini 19' }, { link: '#', label: 'Mini 20' }] },
    { name: 'Category 6', miniCategories: [{ link: '#', label: 'Mini 21' }, { link: '#', label: 'Mini 22' }, { link: '#', label: 'Mini 23' }, { link: '#', label: 'Mini 24' }] },
    { name: 'Category 7', miniCategories: [{ link: '#', label: 'Mini 25' }, { link: '#', label: 'Mini 26' }, { link: '#', label: 'Mini 27' }, { link: '#', label: 'Mini 28' }] },
    { name: 'Category 8', miniCategories: [{ link: '#', label: 'Mini 29' }, { link: '#', label: 'Mini 30' }, { link: '#', label: 'Mini 31' }, { link: '#', label: 'Mini 32' }] },
    { name: 'Category 9', miniCategories: [{ link: '#', label: 'Mini 33' }, { link: '#', label: 'Mini 34' }, { link: '#', label: 'Mini 35' }, { link: '#', label: 'Mini 36' }] },
    { name: 'Category 10', miniCategories: [{ link: '#', label: 'Mini 37' }, { link: '#', label: 'Mini 38' }, { link: '#', label: 'Mini 39' }, { link: '#', label: 'Mini 40' }] },
    { name: 'Category 11', miniCategories: [{ link: '#', label: 'Mini 41' }, { link: '#', label: 'Mini 42' }, { link: '#', label: 'Mini 43' }, { link: '#', label: 'Mini 44' }] },
    { name: 'Category 12', miniCategories: [{ link: '#', label: 'Mini 45' }, { link: '#', label: 'Mini 46' }, { link: '#', label: 'Mini 47' }, { link: '#', label: 'Mini 48' }] },
  ];

   
  function CategoryList() {
    const [selectedCategory, setSelectedCategory] = useState(null);
  
    return (
      <ul className="flex flex-row md:flex-row self-stretch bg-gray-100_01 md:text-[10px]">
        {categories.map((category, index) => (
          <li key={index} className="flex flex-col md:flex-row items-center gap-2 border-l-[0.1px] border-solid border-blue_gray-500 p-[15px] md:p-5 text-md font-medium text-[13px] sm:flex-wrap" >
            <div className="flex items-center cursor-pointer justify-center" onClick={() => setSelectedCategory(index)}>
            <h2>{category.name} <span className={selectedCategory === index ? "transform rotate-180" : ""}>▼</span></h2>
          </div>
            {selectedCategory === index && (
              <ul className="hidden md:block">
                {category.miniCategories.map((miniCategory, miniIndex) => (
                  <li key={miniIndex}>
                    <a href={miniCategory.link}>{miniCategory.label}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    );
  }

export default CategoryList;