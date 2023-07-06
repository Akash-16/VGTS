import React from "react";
import { Input as AntInput, Typography, Space, InputProps } from "antd";

interface InputProp extends InputProps {
  lable: string | React.ReactNode;
  onChangeFun: (value: string) => void;
  iserror?: boolean;
}

const Input = (props: InputProp) => {
  const [input, setInput] = React.useState({
    error: "",
  });

  const inputOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onChangeFun(event.target.value);
  };

  const inputOnFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    if (!event.target.value && props.id) {
      setInput((prev) => ({ ...prev, error: `please enter ${props.id}` }));
    } else {
      setInput((prev) => ({ ...prev, error: "" }));
    }
  };

  return (
    <Space style={{ width: "100%" }} direction="vertical" size={"small"}>
      <Typography.Text>{props.lable}:</Typography.Text>
      <AntInput
        status={input.error && "error"}
        onBlur={inputOnFocus}
        onChange={inputOnChange}
        {...props}
      />
      {(input.error || props.iserror) && (
        <Typography.Text type="danger">{input.error}</Typography.Text>
      )}
    </Space>
  );
};

export default React.memo(Input);
