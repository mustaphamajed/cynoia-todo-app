import axios from "axios";
import { getData } from "../helpers/storage";
import { STORAGE } from "../helpers/utils";
import api from "../api/api";

export const fetchProjects = async () => {
    const token = await getData(STORAGE.accessToken);
    const response = await api.get("/projects", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
    });
    return response.data
  };