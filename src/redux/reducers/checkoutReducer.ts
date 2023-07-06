import { Dispatch } from "redux";

import { Checkout } from "../../common/typings/checkout.interface";
import { checkoutDetails, updateError } from "../actions/checkoutActions";

export const getCheckoutDetails = (checkoutDetail: Checkout): any => {
  return async (dispatch: Dispatch): Promise<any> => {
    if (
      checkoutDetail.firstName &&
      checkoutDetail.lastName &&
      checkoutDetail.phoneNumber &&
      checkoutDetail.email &&
      checkoutDetail.lane &&
      checkoutDetail.doorNum &&
      checkoutDetail.city &&
      checkoutDetail.pincode
    ) {
      await dispatch(checkoutDetails(checkoutDetail));
    } else {
      dispatch(updateError("Please Check and enter the details"));
    }
  };
};
