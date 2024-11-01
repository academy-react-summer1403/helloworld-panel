// ** Icons Import
import { HealtcareIcon } from "hugeicons-react";
import { Heart } from "react-feather";

const Footer = () => {
  return (
    <p className="clearfix mb-0">
      <span className="float-md-start d-block d-md-inline-block mt-25">
        COPYRIGHT © {new Date().getFullYear()}{" "}
        <a
          href="https://1.envato.market/pixinvent_portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          IrnoTech
        </a>
        <span className="d-none d-sm-inline-block">, All rights Reserved</span>
      </span>
      <span className="float-md-end d-none d-md-block">
        <HealtcareIcon style={{marginLeft:"5px"}} />
        {/* <Heart size={14} /> */}
        Hand-crafted & Made with
      </span>
    </p>
  );
};

export default Footer;
