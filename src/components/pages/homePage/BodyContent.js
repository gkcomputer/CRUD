import body_image from "../../../assests/body_image.jpg";
import "./BodyContent.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import simple from "../../../assests/simple_interface.png";
import multiple from "../../../assests/multiple_process.png";
import quality from "../../../assests/high_quality.png";
import { Login } from "./Custom.Login";

export const BodyContent = () => {
  return (
    <div className="seprate">
      <div className="main">
        <div className="content">
          <div className="imagediv">
            <img className="image" src={body_image} alt="" />
          </div>
          <div className="footer">
            <div>
              <div>
                <h1 className="title">Warehouse 360</h1>
                <p className="paragraph">
                  Our application provides for an end-to-end digital warehousing
                  solutions specialising in medium to large scale warehouse
                  management. Developed by Mastex and managed by GK Tech
                  solutions, warehouse 360 delivers state of the art quality
                  required to meet today's needs for warehousemanagement.
                </p>
                <div className="mediaIcons">
                  <p>
                    <FacebookIcon />
                  </p>
                  <p>
                    <WhatsAppIcon />
                  </p>
                  <p>
                    <TwitterIcon />
                  </p>
                  <p>
                    <InstagramIcon />
                  </p>
                </div>
              </div>
            </div>
            <div className="sub_div">
              <div className="subcontent">
                <div>
                  <img className="img" src={simple} alt="" />
                </div>
                <div className="sub_desc">
                  <p className="desc_text_head">Simple Interface</p>
                  <p className="desc_text">
                    Minimal & simple interface with efficent user experience
                  </p>
                </div>
              </div>
              <div className="subcontent">
                <div>
                  <img className="img" src={quality} alt="" />
                </div>
                <div className="sub_desc">
                  <p className="desc_text_head">High quality Code</p>
                  <p className="desc_text">
                    High quality code to ensure smooth process
                  </p>
                </div>
              </div>
              <div className="subcontent">
                <div>
                  <img className="img" src={multiple} alt="" />
                </div>
                <div className="sub_desc">
                  <p className="desc_text_head">Multiple Modules</p>
                  <p className="desc_text">
                    High quality code to ensure smooth process
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="blueborder"></div>
      <Login />
    </div>
  );
};
