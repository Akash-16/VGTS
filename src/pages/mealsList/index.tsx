import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, Row, Col } from "antd";

import { getMealsList } from "../../redux/reducers/mealsReducer";
import { MealsState } from "../../common/typings/mealsList.interface";
import { MealsCard, Loader } from "../../components";
import "./index.css";

const { Search } = Input;

const MealsList = () => {
  const [meals, setMeals] = React.useState({
    search: "",
  });

  const { mealsList, isLoading } = useSelector(
    (state: MealsState) => state.meals
  );

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getMealsList(meals.search));
  }, [meals.search]);

  return (
    <div>
      <div className="vgts_menuSearch">
        <Search
          placeholder="Search food here"
          onSearch={(value) => setMeals((prev) => ({ ...prev, search: value }))}
        />
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <Row gutter={[8, 8]} style={{ marginTop: "1rem" }}>
          {mealsList.map((item) => (
            <Col key={item.id} xs={12} md={8} lg={6}>
              <MealsCard {...item} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default React.memo(MealsList);
