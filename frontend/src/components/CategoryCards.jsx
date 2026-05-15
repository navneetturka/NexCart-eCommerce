import React from "react";
import { Link } from "react-router-dom";

import men from "../assets/men.jpg";
import women from "../assets/women.jpg";
import kids from "../assets/kids.jpg";
import shoes from "../assets/shoes.jpg";
import bags from "../assets/bags.jpg";

const categories = [
  {
    name: "Men",
    image: men,
    path: "/collection/men",
  },
  {
    name: "Women",
    image: women,
    path: "/collection/women",
  },
  {
    name: "Kids",
    image: kids,
    path: "/collection/kids",
  },
  {
    name: "Shoes",
    image: shoes,
    path: "/collection/shoes",
  },
  {
    name: "Bags",
    image: bags,
    path: "/collection/bags",
  },
];

const CategoryCards = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-5 mb-16">
      {categories.map((item, index) => (
        <Link to={item.path} key={index}>
          <div className="relative overflow-hidden rounded-xl group cursor-pointer shadow-md">

            <img
              src={item.image}
              alt={item.name}
              className="h-[250px] w-full object-cover group-hover:scale-110 transition duration-500"
            />

            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <h2 className="text-white text-2xl font-bold">
                {item.name}
              </h2>
            </div>

          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryCards;