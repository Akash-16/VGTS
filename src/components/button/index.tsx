import React from "react";
import { Button as AntButton, ButtonProps } from "antd";

const Button = (props: ButtonProps) => {
  return (
    <>
      <AntButton style={{ width: "100%" }} {...props} />
    </>
  );
};

export default React.memo(Button);
