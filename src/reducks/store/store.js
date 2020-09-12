import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";

// import reducers
import { usersReducer } from "../users/reducers";

// historyはパスの情報もつ
export default function createStore(history) {
  return reduxCreateStore(
    combineReducers({
      router: connectRouter(history),
      users: usersReducer,
    }),
    applyMiddleware(routerMiddleware(history), thunk)
  );
}
