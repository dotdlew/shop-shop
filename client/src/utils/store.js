import { createStoreHook } from "react-redux";
import reducer from "./reducers";

export default createStoreHook(reducer);
