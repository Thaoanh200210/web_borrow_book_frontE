import createApiClient from "./api.services";
import axios from "axios";
class UserService {
    currentUser = null;

    constructor(baseUrl = "/api/users") {
        this.api = createApiClient(baseUrl);
    }

    getCurrentUser (){
        return this.currentUser;
    }
    isLoggedIn() {
        return this.currentUser !== null;
      }
    // async logout(){
    //     return (await this.api.post("/logout")).data;
    // }
    async logout () {
        try {
          await axios.post(
            `http://localhost:3000/api/users/logout`,
            {}, // Dữ liệu gửi đi rỗng trong trường hợp này
            {
              headers: {
                user: this.currentUser._id,
              },
            },
          );
        } catch (error) {
          console.log(error);
        }
      };
    async getAll() {
        return (await this.api.get("/")).data;
    }
    async create(data) {
        return (await this.api.post("/", data)).data;
    }
    async deleteAll() {
        return (await this.api.delete("/")).data;
    }
    
    async login(data){
        this.currentUser = (await this.api.post("/login",data)).data;
        return (await this.api.post("/login",data)).data;
    }
    async get(id) {
        return (await this.api.get(`/${id}`)).data;
    }
    async update(id, data) {
        return (await this.api.put(`/${id}`, data)).data;
    }
    async delete(id) {
        return (await this.api.delete(`/${id}`)).data;
    }

    
}
export default new UserService();