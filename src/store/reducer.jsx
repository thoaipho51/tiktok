import { setJOB, addJOB } from "./constant";

const stateLocal = JSON.parse(localStorage.getItem("trangthai"));
const initState = stateLocal || {
    job: "",
  jobs: [],
};

const provider = (state, action) => {
  console.log(action);
  let newState;
  switch (action.type) {
    case setJOB:
      newState = {
        ...state,
        job: action.payload,
      };
      localStorage.setItem("trangthai", JSON.stringify(newState));
      break
    case addJOB:
      newState = {
        ...state,
        jobs: [...state.jobs, action.payload],
      };
      localStorage.setItem("trangthai", JSON.stringify(newState));
      break

    default:
      break;
  }

  return newState;
};

export { initState };
export default provider;
