import { createWebHistory, createRouter } from "vue-router";
import Trangchu from "@/views/user/trangchu.vue";
import Muonsach from "@/views/user/muonsach.vue";
import Nhaxuatban from "@/views/user/nhaxuatban.vue";
import Quydinh from "@/views/user/quydinhmuonsach.vue";
import Taikhoan from "@/views/user/taikhoan.vue";
import Lichsu from "@/views/user/lichsumuonsach.vue";
import Chitietsach from "@/components/BookDetail.vue";
import dangky from "../views/auth/register.vue";
import adminlogin from "../views/auth/adminLogin.vue";
import userlogin from "../views/auth/userLogin.vue";
import Quanlysach from "../views/admin/sach/quanly.vue";
import Themsach from "../views/admin/sach/them.vue";
import Suasach from "../views/admin/sach/sua.vue";
import Quanlynhaxuatban from "../views/admin/nhaxuatban/quanly.vue";
import Themnhaxuatban from "../views/admin/nhaxuatban/them.vue";
import Suanhaxuatban from "../views/admin/nhaxuatban/sua.vue";
import Quanlymuonsach from "../views/admin/muonsach/quanly.vue";
import Suatrangthai from "../views/admin/muonsach/sua.vue";
import Quanlyuser from "../views/admin/user/quanly.vue";

const routes = [
  {
    path: "/user/muonsach/:id",
    name: "muonsach",
    component: Muonsach,
    props: true,
  },
  {
    path: "/user/nhaxuatban",
    name: "nhaxuatban",
    component: Nhaxuatban,
    props: true,
  },
  {
    path: "/user/quydinh",
    name: "quydinh",
    component: Quydinh,
  },
  {
    path: "/user/taikhoan",
    name: "taikhoan",
    component: Taikhoan,
  },
  {
    path: "/user/lichsu",
    name: "lichsu",
    component: Lichsu,
    
  },
  {
    path: "/",
    name: "trangchu",
    component: Trangchu,
  },
  {
    path: "/chitietsach/:id",
    name: "chitietsach",
    component: Chitietsach,
    props: true,
  },
  
  
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: () => import("@/views/NotFound.vue"),
  },
  {
    path: '/register', 
    name: 'Register', 
    component: dangky
  },
  {
    path: '/login', 
    name: 'UserLogin', 
    component: userlogin,
  },
  

  //admin
  {
    path: "/admin/muonsach/quanly",
    name: "quanlymuonsach",
    component: Quanlymuonsach,
  },
  {
    path: "/admin/muonsach/sua/:id",
    name: "suatrangthai",
    component: Suatrangthai,
    props: true,
  },
  {
    path: "/admin/sach/sua/:id",
    name: "suasach",
    component: Suasach,
    props: true
  },
  {
    path: "/admin/sach/them",
    name: "themsach",
    component: Themsach,
  },
  {
    path: "/admin/sach/quanly",
    name: "quanlysach",
    component: Quanlysach,
  },

  {
    path: "/admin/nhaxuatban/sua/:id",
    name: "suanhaxuatban",
    component: Suanhaxuatban,
    props: true
  },
  {
    path: "/admin/nhaxuatban/them",
    name: "themnhaxuatban",
    component: Themnhaxuatban,
  },
  {
    path: "/admin/nhaxuatban/quanly",
    name: "quanlynhaxuatban",
    component: Quanlynhaxuatban,
  },
  {
    path: "/admin/user/quanly",
    name: "quanlyuser",
    component: Quanlyuser,
  },
  {
    path: '/admin/login', 
    name: 'Login', 
    component: adminlogin,
  },
  
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
export default router;
