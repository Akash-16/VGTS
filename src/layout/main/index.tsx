import React from "react";
import { Outlet } from "react-router-dom";
import { Typography, Space } from "antd";

import "./index.css";

const MainLayout = () => {
  return (
    <div>
      <div className="vgts_mainLayout">
        <Space
          style={{ width: "100%", position: "relative" }}
          direction="vertical"
        >
          <Typography.Title style={{ textAlign: "center" }}>
            Free Meal
          </Typography.Title>
          <Outlet />
        </Space>
      </div>
    </div>
  );
};

export default React.memo(MainLayout);
