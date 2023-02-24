import * as actions from '../../constants';

interface State {
  isLoading: boolean
  data: any
  err: boolean
  errMsg: string | null
}

const DEFAULT_STATE: State = {
  isLoading: false,
  data: null,
  err: false,
  errMsg: null
}

export default (state: State = DEFAULT_STATE, action: any): State => {
  switch (action.type) {
    case actions.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      }
    case actions.LOGIN_FAILURE:
      return {
        ...state,
        err: true,
        errMsg: action.payload,
      }
    default:
      return state
  }
}
