import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";

// import reducers
import { usersReducer } from "../users/reducers";
import { productsReducer } from "../products/reducers";

// historyはパスの情報もつ
export default function createStore(history) {
  return reduxCreateStore(
    combineReducers({
      router: connectRouter(history),
      users: usersReducer,
      products: productsReducer,
    }),
    applyMiddleware(routerMiddleware(history), thunk)
  );
}
