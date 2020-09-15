import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn23101665Reducer from '../features/SignIn23101665/redux/reducers'
import SignUp24101664Reducer from '../features/SignUp24101664/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn23101665: SignIn23101665Reducer,
SignUp24101664: SignUp24101664Reducer,

});