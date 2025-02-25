import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import authReducer from './slices/authSlice'

const rootReducer = combineReducers({
  counter: counterReducer,
  auth: authReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
