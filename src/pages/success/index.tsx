import React from "react";
import { useSelector } from "react-redux";
import { Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { CheckoutState } from "../../common/typings/checkout.interface";

const Success = () => {
  const navigate = useNavigate();
  const { checkoutDetails } = useSelector(
    (state: any) => state.checkout as CheckoutState
  );

  React.useEffect(() => {
    if (!Object.values(checkoutDetails).length) {
      navigate("/list");
    }
  }, []);

  return (
    <div
      style={{
        maxWidth: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography.Title level={1}>Congratulation !</Typography.Title>
      <Typography.Text>Your order has been submitted</Typography.Text>
      <Typography.Text>Your Details</Typography.Text>
      <Typography.Text>
        {checkoutDetails.firstName} {checkoutDetails.lastName}
      </Typography.Text>
      <Typography.Text>{checkoutDetails.email}</Typography.Text>
      <Typography.Text>
        {checkoutDetails.doorNum} {checkoutDetails.lane} {checkoutDetails.city}
      </Typography.Text>
      <Typography.Text>{checkoutDetails.phoneNumber}</Typography.Text>
      <Typography.Text>{checkoutDetails.pincode}</Typography.Text>
    </div>
  );
};

export default React.memo(Success);
