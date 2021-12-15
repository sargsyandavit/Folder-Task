import { ADD_FOLDER_DATA_IN_STORE } from "../Actions/IndexSetDataAction";

const inishalState = {
  data: []
}

export default function IndexReducer(state = inishalState, action) {
    switch(action.type){
      case ADD_FOLDER_DATA_IN_STORE:
        return {
          ...state,
          data: action.data
        }

        default:
            return state;
    }
}