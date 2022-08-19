// import axios from 'axios';

// class Api{
//     constructor(){
//         this.api = axios.create({
//             baseURL: 'http://localhost:9000'
//         })
//     }

//     getAllProjects = async () => {
//         try {
//             const { data } = await this.api.get('/projects');
//             return data;
//         } catch (error) {
//             throw error;
//         }
//     }

//     getOneProject = async (id) => {
//         try {
//             const { data } = await this.api.get(`projects/${id}`);
//             return data;
//         } catch (error) {
//             throw error;
            
//         }
//     }    
// }

// export default new Api();

export const getOneProject = async (id) => {
        try {
            let url = `http://localhost:9000/${id}`;
            const response = await fetch(url);
            return response;
        } catch (error) {
            console.log('error:', error);
        }
    };