import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Row, Col, Typography, Space } from "antd";

import { getMealsDetails } from "../../redux/reducers/mealsReducer";
import { MealsState } from "../../common/typings/mealsList.interface";
import { Loader, Button } from "../../components";
import { Meals } from "../../common/typings/meals.interface";
import "./index.css";
import IngredientsTable from "./ingredientsTable";
import Checkout from "./checkout";

const MealsDetails = () => {
  const [mealsDetail, setMealsDetail] = React.useState({
    isCheckOut: false,
  });
  const { mealsDetails, isLoading } = useSelector(
    (state: MealsState) => state.meals
  ) as { mealsDetails: Meals; isLoading: boolean };

  const dispatch = useDispatch();
  const params = useParams();

  React.useEffect(() => {
    if (params?.id) {
      dispatch(getMealsDetails(params?.id));
    }
  }, []);

  const ingredientsValue = Object.values(mealsDetails)
    .slice(9, 29)
    .filter((el) => el);

  const ingredientsQuantity = Object.values(mealsDetails).slice(29, 49);

  const data = ingredientsValue.map((item: string, index) => {
    if (item !== "") {
      return {
        key: item.toLowerCase(),
        ingredients: item,
        quantity: ingredientsQuantity[index],
      } as TableData;
    }
  });

  const tableColumn = [
    {
      title: "Ingredients",
      dataIndex: "ingredients",
      key: "ingredients",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
  ];

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <Row gutter={16}>
          <Col xs={24} md={12}>
            <div className="vgts_mdimgContainer">
              <img src={mealsDetails.strMealThumb} alt={mealsDetails.strMeal} />
            </div>
          </Col>

          <Col xs={24} md={12}>
            {mealsDetail.isCheckOut ? (
              <Checkout />
            ) : (
              <Space
                style={{ width: "100%" }}
                direction="vertical"
                size={"large"}
                className="vgts_mdDetailsContainer"
              >
                <Typography.Title level={3} style={{ textAlign: "center" }}>
                  Meal Name -{mealsDetails.strMeal}
                </Typography.Title>
                <Typography.Text style={{ textAlign: "center" }}>
                  Meal Instruction -{mealsDetails.strInstructions}
                </Typography.Text>
                <div style={{ marginTop: "1rem" }}>
                  <IngredientsTable columns={tableColumn} data={data} />
                </div>
                <Button
                  onClick={() =>
                    setMealsDetail((prev) => ({ ...prev, isCheckOut: true }))
                  }
                  type="primary"
                  style={{ width: "100%" }}
                >
                  Checkout
                </Button>
              </Space>
            )}
          </Col>
        </Row>
      )}
    </div>
  );
};

export default React.memo(MealsDetails);
