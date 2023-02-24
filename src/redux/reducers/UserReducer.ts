/* eslint-disable no-fallthrough */
import * as types from '../../constants'

const defaultState = {
    isLoading: false,
    data: [],
    err: false,
    messageError: null,
    keySearch: '',
    totalPage: 1,
    pageIndex: 1,
    dataDetail: {}
}
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action : any) => {
    switch (action.type) {
        case types.GET_USER_REQUEST:
        // case types.ADD_USER_REQUEST:
        // case types.UPDATE_USER_REQUEST:
        // case types.DELETE_USER_REQUEST:
        case types.GET_DETAIL_USER_REQUEST:


            return {
                ...state,
                isLoading: true
            }
        case types.GET_USER_SUCCESS:
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
            }
        case types.GET_DETAIL_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                dataDetail: action.payload
            }
        // case types.ADD_USER_SUCCESS:
        // case types.UPDATE_USER_SUCCESS:
        // case types.DELETE_USER_SUCCESS:
        //     return {
        //         ...state,
        //         isLoading: false
        //     }


        case types.GET_USER_FAILURE:
        // case types.ADD_USER_FAILURE:
        // case types.UPDATE_USER_FAILURE:
        // case types.DELETE_USER_FAILURE:
        case types.GET_DETAIL_USER_FAILURE:
            return {
                ...state,
                isLoading: false,
                err: true,
                messageError: action.payload
            }



        default: return state;

    }
}