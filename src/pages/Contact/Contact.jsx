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
        </div>

          <iframe
            src="https://yandex.uz/map-widget/v1/?from=mapframe&ll=55.172133%2C25.100102&mode=search&oid=199521481701&ol=biz&sll=69.284695%2C41.337148&sspn=0.045147%2C0.019989&text=dubai%20car%20arenda&z=11.88"
            width="100%"
            height="400"
            frameborder="1"
            allowfullscreen="true"
            style={{ position: "relative", borderRadius:"15px" }}
          ></iframe>
       
      </div>
    </div>
  );
};

export default Contact;
