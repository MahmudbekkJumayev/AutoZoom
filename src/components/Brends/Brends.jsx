import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Brends = () => {
  const [brands, setBrands] = useState([]);
  const { t } = useTranslation();
  const urlimg = "https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/";

  const getBrands = () => {
    axios
      .get("https://autoapi.dezinfeksiyatashkent.uz/api/brands")
      .then((response) => {
        setBrands(response.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getBrands();
  }, []);

  return (
    <div className="py-20">
      <div className="container">
        <h4 className="text-[35px] text-gray-100 font-semibold">
          {t("brand")}
        </h4>
        <div className="parent py-2- my-20 px-4 md:px-24 w-full  snap-proximity snap-x overflow-x-auto  md:grid-cols-3">
          {brands.map((item) => (
            <div
              key={item.id}
              className="bg-gray-950 w-60 md:w-72 h-60 md:h-72 bg-gradient-to-r cursor-pointer mx-2 md:mx-0 snap-center flex flex-col justify-center items-center hover:from-slate-500 "
            >
              <div className="w-32 md:w-40 h-32 md:h-40 object-cover">
                <img
                  className="w-full h-full"
                  src={`${urlimg}${item.image_src}`}
                />
              </div>
              <p className="text-2xl md:text-3xl text-gray-300 mt-5 text-center">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brends;
