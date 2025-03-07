import { setJOB, addJOB, removeJOB } from "./constant";

export const setjob = (payload) => {
  return {
    type: setJOB,
    payload,
  };
};

export const addjob = (payload) => {
  return {
    type: addJOB,
    payload,
  };
};
