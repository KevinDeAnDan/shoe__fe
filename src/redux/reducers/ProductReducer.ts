/* eslint-disable no-fallthrough */
import * as types from '../../constants';

const defaultState = {
  isLoading: false,
  data: [],
  err: false,
  messageError: null,
  keySearch: '',
  totalPage: 1,
  pageIndex: 1,
  dataDetail: {},
};
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action: any) => {
  switch (action.type) {
    case types.GET_PRODUCT_REQUEST:
    // case types.ADD_PRODUCT_REQUEST:
    // case types.UPDATE_PRODUCT_REQUEST:
    // case types.DELETE_PRODUCT_REQUEST:

    case types.actionDetailProduct.GET_PRODUCT_DETAIL_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload.data,
        dataDetail: {},
        err: false,
        messageError: null,
        pageIndex: action.payload.pageIndex,
        totalPage: action.payload.totalPage,
        keySearch: action.payload.keySearch,
      };
    // case types.ADD_PRODUCT_SUCCESS:
    // case types.UPDATE_PRODUCT_SUCCESS:
    // case types.DELETE_PRODUCT_SUCCESS:
    //     return {
    //         ...state,
    //         isLoading: false
    //     }
    case types.actionDetailProduct.GET_PRODUCT_DETAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        dataDetail: action.payload,
      };

    case types.GET_PRODUCT_FAILURE:
    // case types.ADD_PRODUCT_FAILURE:
    // case types.UPDATE_PRODUCT_FAILURE:
    // case types.DELETE_PRODUCT_FAILURE:

    case types.actionDetailProduct.GET_PRODUCT_DETAIL_FAILURE:
      return {
        ...state,
        isLoading: false,
        err: true,
        messageError: action.payload,
      };

    default:
      return state;
  }
};
