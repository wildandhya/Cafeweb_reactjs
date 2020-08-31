/** @format */

import {
  getAllproduct,
  pending,
  fulfilled,
  rejected,
} from "../action/actionType";

const initialState = {
  data: [],
  error: "",
  isPending: false,
  isFulfilled: false,
  isRejected: false,
};

const getProductReducer = (prevState = initialState, { type, payload }) => {
  switch (type) {
    case getAllproduct + pending:
      return {
        ...prevState,
        isPending: true,
      };

    case getAllproduct + rejected:
      return {
        ...prevState,
        isRejected: true,
        error: payload,
        isPending: false,
      };
    case getAllproduct + fulfilled:
      console.log("sgjad");
      return {
        ...prevState,
        isFulfilled: true,
        data: payload.data.data,
        isPending: false,
      };
    default:
      return prevState;
  }
};

export default getProductReducer;
