import React from "react";
import { Spin, Typography } from "antd";

import "./index.css";

const Loader = () => {
  return (
    <div className="vgts_loader">
      <Spin size="large" />
      <Typography.Text>Loading...</Typography.Text>
    </div>
  );
};

export default React.memo(Loader);
