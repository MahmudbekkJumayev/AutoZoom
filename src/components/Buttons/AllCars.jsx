import React from "react";
import { MdDoubleArrow } from "react-icons/md";
import { useTranslation } from "react-i18next";

const AllCars = () => {
  const { t } = useTranslation();
  return (
    <div>
      <a href="/blog">
        <div className="block w-[200px]">
          <span className="flex items-center gap-5 bg-gradient-to-r p-3 rounded-r-3xl from-emerald-500 to-emerald-900  ">
            <span className="text-white text-[20px]">{t("carButton")}</span>
            <span>
              <MdDoubleArrow color="white" className="w-[40px] h-[30px]" />
            </span>
          </span>
        </div>
      </a>
    </div>
  );
};

export default AllCars;
