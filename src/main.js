import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import router from "./router";
import axios from 'axios';
import UserService from "./services/user.service";
// axios.interceptors.request.use(async config => {
//     // Kiểm tra xem người dùng đã đăng nhập chưa
//     console.log(UserService.isLoggedIn())
//     if (UserService.isLoggedIn()) {
//         console.log("Đã đăng nhập")
//       // Lấy thông tin người dùng đã đăng nhập
//       const user = UserService.getCurrentUser();
//       // Đặt giá trị của header "user" là thông tin người dùng
//       config.headers['user'] = JSON.stringify(user);
//     }
//     return config;
//   });
createApp(App).use(router).mount("#app");

