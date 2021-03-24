import { combineReducers } from "redux";
import navigationReducer from '../../models/navigation/reducer';
import userReducer from '../../models/user/reducer';
import addressReducer from '../../modules/address/reducer';


export default combineReducers({
    ...userReducer,
    ...navigationReducer,
    ...addressReducer
});
