import React from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../../components";
import { images } from "../../utils/images";
import "./index.css";

const Intro = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="vgts_introBanner">
        <img src={images.introBanner} alt="intro banner" />
      </div>
      <div className="vgts_introButton">
        <Button onClick={() => navigate("/list")} type="primary">
          Order Now
        </Button>
      </div>
    </div>
  );
};

export default React.memo(Intro);
