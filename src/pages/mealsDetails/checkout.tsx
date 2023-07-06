import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Space, Typography } from "antd";

import { Input, Button } from "../../components";
import { getCheckoutDetails } from "../../redux/reducers/checkoutReducer";
import "./index.css";
import { CheckoutState } from "../../common/typings/checkout.interface";

const Checkout = () => {
  const [checkout, setCheckout] = React.useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    lane: "",
    lane2: "",
    doorNum: "",
    city: "",
    pincode: "",
  });
  const [errors, setErrors] = React.useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error } = useSelector(
    (state: any) => state.checkout as CheckoutState
  );

  const inputOnChange = (value: string, key: string) => {
    setCheckout((prev) => ({ ...prev, [key]: value }));
  };

  const checkoutDetails = () => {
    if (
      checkout.firstName &&
      checkout.lastName &&
      checkout.phoneNumber &&
      checkout.email &&
      checkout.lane &&
      checkout.doorNum &&
      checkout.city &&
      checkout.pincode
    ) {
      dispatch(getCheckoutDetails(checkout));
      navigate("/success");
    } else {
      setErrors("Please Check and enter the details");
    }
  };

  return (
    <Space
      className="vgts_mdDetailsContainer"
      direction="vertical"
      size={"middle"}
    >
      <Typography.Title level={4}>Personal Info</Typography.Title>
      <Space style={{ width: "100%" }} size={"small"}>
        <Input
          id="firstName"
          lable="Firstname"
          value={checkout.firstName}
          onChangeFun={(e) => inputOnChange(e, "firstName")}
          placeholder="Enter your firstname"
          type="text"
        />
        <Input
          id="lastName"
          value={checkout.lastName}
          onChangeFun={(e) => inputOnChange(e, "lastName")}
          lable="Lastname"
          placeholder="Enter your lastname"
          type="text"
        />
      </Space>
      <Input
        id="phoneNumber"
        value={checkout.phoneNumber}
        onChangeFun={(e) => inputOnChange(e, "phoneNumber")}
        lable="Phone number"
        placeholder="Enter your phone number"
        type="text"
      />
      <Input
        id="email"
        value={checkout.email}
        onChangeFun={(e) => inputOnChange(e, "email")}
        lable="Email"
        placeholder="Enter your email"
        type="text"
      />
      <Typography.Title level={4}>Address / Shipping address</Typography.Title>
      <Input
        id="lane"
        value={checkout.lane}
        onChangeFun={(e) => inputOnChange(e, "lane")}
        lable="Lane 1"
        placeholder="Enter your Lane"
        type="text"
      />
      <Input
        value={checkout.lane2}
        onChangeFun={(e) => inputOnChange(e, "lane2")}
        lable="Lane 2 (optional)"
        placeholder="Enter your Lane 2 (optional)"
        type="text"
      />
      <Input
        id="doorNum"
        value={checkout.doorNum}
        onChangeFun={(e) => inputOnChange(e, "doorNum")}
        lable="Appartment / Home / Office No"
        placeholder="Enter your firstname"
        type="text"
      />
      <Space style={{ width: "100%" }} size={"small"}>
        <Input
          id="city"
          value={checkout.city}
          onChangeFun={(e) => inputOnChange(e, "city")}
          lable="City"
          placeholder="Enter your city"
          type="text"
        />
        <Input
          id="pincode"
          value={checkout.pincode}
          onChangeFun={(e) => inputOnChange(e, "pincode")}
          lable="Pincode"
          placeholder="Enter your pincode"
          type="text"
        />
      </Space>
      <div style={{ textAlign: "center" }}>
        {(errors || error) && (
          <Typography.Text type="danger">{error || errors}</Typography.Text>
        )}
      </div>
      <Button onClick={checkoutDetails} type="primary">
        Purchase
      </Button>
    </Space>
  );
};

export default React.memo(Checkout);
