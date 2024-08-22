import axios from "axios";
import { getData } from "../helpers/storage";
import { STORAGE } from "../helpers/utils";
import api from "../api/api";

export const fetchProjects = async <T>() : Promise<T[]>=> {
    const token = await getData(STORAGE.accessToken);
    const response = await api.get<T[]>("/projects", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
    });
    
    return response.data
};
  
export const createProject = async (projectData: { name: string; description: string }) => {
    const token = await getData(STORAGE.accessToken);
    const response = await api.post('/projects', projectData,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};
export const createTask = async (taskData: { title: string; description: string,project_id:number }) => {
    const token = await getData(STORAGE.accessToken);
    const response = await api.post('/tasks', taskData,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};
  
export const fetchProjectsById = async <T>({projectId}:{projectId:number}) : Promise<T[]>=> {
    const token = await getData(STORAGE.accessToken);
    const response = await api.get<T[]>(`/projects/${projectId}/tasks`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
    });
    
    return response.data
};

export const fetchTaskById = async <T>({taskId}:{taskId:number}) : Promise<T[]>=> {
    const token = await getData(STORAGE.accessToken);
    const response = await api.get<T[]>(`/tasks/${taskId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
    });
    
    return response.data
};

export const updateTask = async (taskData: { title: string; description: string,taskId:number ,status:string}) => {
    const token = await getData(STORAGE.accessToken);
    const response = await api.put(`/tasks/${taskData.taskId}`, {title:taskData.title,description:taskData.description,status:taskData.status },{
        headers: {
          Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};