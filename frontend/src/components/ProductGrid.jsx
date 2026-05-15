import React from "react";

const ProductGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {products.map((item, index) => (
        <div key={index} className="cursor-pointer">

          <img
            src={item.image}
            alt={item.name}
            className="h-[320px] w-full object-cover rounded-lg"
          />

          <h3 className="mt-2 text-sm md:text-base">
            {item.name}
          </h3>

          <p className="font-semibold">
            ₹{item.price}
          </p>

        </div>
      ))}
    </div>
  );
};

export default ProductGrid;