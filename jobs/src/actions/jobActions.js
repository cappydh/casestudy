import jobs from "../api/jobs";
import { FETCH_JOBS, FETCH_JOB } from "./types";

export const fetchJobs = () => async dispatch => {
  const response = await jobs.get("/jobs");
  dispatch({ type: FETCH_JOBS, payload: response.data });
};

export const fetchJob = id => async dispatch => {
  const response = await jobs.get(`/jobs?id=${id}`);
  dispatch({ type: FETCH_JOB, payload: response.data });
};
