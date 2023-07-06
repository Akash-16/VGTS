import React from "react";
import { Card, Typography } from "antd";
import { useNavigate } from "react-router-dom";

import { MealsList } from "../../common/typings/mealsList.interface";
const { Meta } = Card;

const MealsCard = ({ id, image, name, discription }: MealsList) => {
  const navigate = useNavigate();
  return (
    <Card
      style={{ cursor: "pointer" }}
      cover={
        <img
          alt={name}
          src={image}
          onClick={() => navigate(`/details/${id}`)}
        />
      }
    >
      <Meta
        title={
          <Typography.Title style={{ textAlign: "center" }} level={4}>
            {name}
          </Typography.Title>
        }
        description={
          <Typography.Paragraph>
            {discription.length > 50
              ? `${discription.substring(0, 50)}...`
              : discription}
          </Typography.Paragraph>
        }
      />
    </Card>
  );
};

export default React.memo(MealsCard);
