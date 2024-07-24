import axios from "axios";

const API_KEY=import.meta.env.VITE_STRAPI_API_KEY;
const axiosClient=axios.create({
    baseURL:import.meta.env.VITE_API_BASE_URL+"/api/",
    headers:{
        'Content-Type':'application/json',
        'Authorization':`Bearer ${API_KEY}`
    }
})
const CreateNewResume=(data)=>axiosClient.post('/user-resumes',data);
const GetUserResumes=(userEmail)=>axiosClient.get('/user-resumes?filters[userEmail][$eq]='+userEmail);
const UpdateResumeDetail = (id, data) => {  
    return axiosClient.put('/user-resumes/' + id, data)  
        .then(response => response.data)  
        .catch(error => {  
            if (error.response) {  
                console.error("Error details:", error.response.data);  
            } else {  
                console.error("An error occurred:", error.message);  
            }  
        });  
};
const GetResumeById=(id)=>axiosClient.get('/user-resumes/'+id+"?populate=*")
const DeleteResumeById=(id)=>axiosClient.delete('/user-resumes/'+id)

export default{
    CreateNewResume,
    GetUserResumes,UpdateResumeDetail,GetResumeById, DeleteResumeById}