import { FaPhone } from "react-icons/fa";
import "./SocialMediaRightBar.css"
import { FaEnvelope, FaFacebookSquare, FaInstagram} from 'react-icons/fa';
import { FaPhoneAlt } from "react-icons/fa";
export const SocialMediaRightBar = () => {
  return (
    <>
      <div className="social">
        <a href="whatsapp://send?text=I am interested in buying. Can you provide me with pricing and shipping information?!&phone=+971525966515">
          <div className="social-btn  animate__animated animate__pulse animate__infinite	infinite color-whatsapp">
            <div className="icons8-whatsapp"></div>
          </div>
        </a>

        <a href="tel:+97143211660">
        <div className="social-btn  animate__animated animate__pulse animate__infinite	infinite color-fb">
            <FaPhoneAlt  className="fb" />
          </div>
        </a>
        <a href="mailto:byruhafoodstuff@gmail.com">
          <div className="social-btn  animate__animated animate__pulse animate__infinite	infinite color-gmail">
            <FaEnvelope className="gmail" />
          </div>
        </a>
        <a href="https://www.facebook.com/people/Byruha-Foodstuff/100090079361665">
          <div className="social-btn  animate__animated animate__pulse animate__infinite	infinite color-fb">
            <FaFacebookSquare className="fb" />
            
          </div>
        </a>
        <a href="https://www.instagram.com/byruhafoodstuff/">
          <div className="social-btn  animate__animated animate__pulse animate__infinite	infinite color-instagram">
            <FaInstagram className="color-instagram" />
            {/* <p className="order-1 google-font margin-instagram">instagram</p> */}
          </div>
        </a>
      </div>
    </>
  );
};
