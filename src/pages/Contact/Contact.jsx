import React from "react";
import "./Contact.css";
import locaSvg from "../../assets/images/locationSvg.svg";
import phoneSvg from "../../assets/images/phoneSvg.svg";
import mailSvg from "../../assets/images/mainSvg.svg";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-box container_acb">
        <div className="contact-title">
          <h6>Аренда люксовых и спортивных авто / Контакты</h6>
          <h2>НАШИ КОНТАКТЫ</h2>
          <h5>Будем рады помочь</h5>
        </div>
        <div className="contact-location">
          <h3>Главный офис</h3>
          <div className="contact-location_items">
            <div className="contact-location_item">
              <img src={locaSvg} alt="svgimage" />
              <span>
                Elite 3 Sports City, Dubai 26W8 24J, United Arab Emirates
              </span>
            </div>
            <div className="contact-location_item">
              <img src={phoneSvg} alt="svgimage" />
              <span>+971 (55) 846 21 24</span>
            </div>
            <div className="contact-location_item">
              <img src={mailSvg} alt="svgimage" />
              <span>office@autozoomrental.com</span>
            </div>
          
          </div>
          <div>
          {/* <div
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2421.690976234712!2d1.2958037!3d52.6294283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d9e3e7a8db78d9%3A0xb2018ea534f10978!2zNDYgTG9uZG9uIFN0LCBOb3J3aWNoIE5SMiAxTEEsINCS0LXQu9C40LrQvtCx0YDQuNGC0LDQvdC40Y8!5e0!3m2!1sru!2s!4v1714656996474!5m2!1sru!2s"
              width="600"
              height="450"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
