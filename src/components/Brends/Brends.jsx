import axios from "axios"
import React, { useEffect, useState } from "react";

const Brends = () => {
  const [brands, setBrands] = useState([]);

  const getBrands = () => {
    axios
      .get("https://autoapi.dezinfeksiyatashkent.uz/api/brands")
      .then((response) => {
        setBrands(response.data.data);
        console.log(response.data);
      })
      .catch((err) => {
        Toast.error(err.message);
      });
  };
  useEffect(() => {
    getBrands();
  }, []);

  //  ok

  const data = brands.map((item, index) => ({
    key: index,
    name: item.title,
    images: item.images_src,
  }));

  return (
    <div className="bg-gradient-to-r from-slate-500 to-slate-800">
      <div className="container">
        <h4 className="text-[35px] text-gray-100 font-semibold">Brands</h4>
        <div>
          {data.map((item) => (
            <div key={item.key}>
              <img src={item.images} alt="" />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brends;
