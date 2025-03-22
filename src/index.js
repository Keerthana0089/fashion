const backendDomain =process.env.REACT_APP_BACKEND_URL || "http://localhost:8080";

const SummaryApi={
  signUP:{
    url:`${backendDomain}/api/signup`,
    method:"post",
  },
  signIN:{
    method:"post",
  },
  AddDesign:{
    url:`${backendDomain}/api/AddDesign`,
    method:"post",

  }
  
};
export default SummaryApi;

