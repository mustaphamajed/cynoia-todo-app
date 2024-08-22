
import axios from "axios";
import { endPoint } from "./endPoint";

export default axios.create({
  baseURL: endPoint,
    headers: {
        Accept: "application/json",
    "Content-Type": "application/json",
  },
});