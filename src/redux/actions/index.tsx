import { createAction, Action } from 'redux-actions'
import *as constants from '../../constants'

// eslint-disable-next-line @typescript-eslint/naming-convention

// export const loginRequest: (account: account) => void= createAction(constants.LOGIN_REQUEST);

export const loginRequest = createAction(constants.LOGIN_REQUEST)
export const loginSuccess = createAction(constants.LOGIN_SUCCESS)
export const loginFailure = createAction(constants.LOGIN_FAILURE)

export const getProductRequest = createAction(constants.GET_PRODUCT_REQUEST)
export const getProductSuccess = createAction(constants.GET_PRODUCT_SUCCESS)
export const getProductFailure = createAction(constants.GET_PRODUCT_FAILURE)

export const getDetailProductRequest = createAction(constants.actionDetailProduct.GET_PRODUCT_DETAIL_REQUEST)
export const getDetailProductSuccess = createAction(constants.actionDetailProduct.GET_PRODUCT_DETAIL_SUCCESS)
export const getDetailProductFailure = createAction(constants.actionDetailProduct.GET_PRODUCT_DETAIL_FAILURE)

export const getUserRequest = createAction(constants.GET_USER_REQUEST)
export const getUserSuccess = createAction(constants.GET_USER_SUCCESS)
export const getUserFailure = createAction(constants.GET_USER_FAILURE)

export const getDetailUserRequest = createAction(constants.GET_DETAIL_USER_REQUEST)
export const getDetailUserSuccess = createAction(constants.GET_DETAIL_USER_SUCCESS)
export const getDetailUserFailure = createAction(constants.GET_DETAIL_USER_FAILURE)

