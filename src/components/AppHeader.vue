<!-- Header.vue -->
<template>
  <header class="header">
      <router-link class="gachchan" to="/">
        <h1 class="phan1">Thư Viện TA</h1>
      </router-link>
      <nav class="phan2">
        <router-link class="gachchan" to="/">Trang chủ</router-link>
        <router-link class="gachchan" to="/user/lichsu">Xem lịch sử mượn sách</router-link>
        <router-link class="gachchan" to="/user/nhaxuatban">Lọc theo nhà xuất bản</router-link>
        <router-link class="gachchan" to="/user/quydinh">Quy định mượn sách</router-link>
        <router-link class="gachchan" to="/user/taikhoan">Tài khoản</router-link>
        <button style="background-color: #cbcaca;
        color: #383468;font-size: 18px; font-size: 1.4rem;" class="gachchan" @click="Logout">Đăng xuất</button>
      </nav>
  </header>
</template>

<script>
import IssuerService from "../services/issuer.service";
import UserService from "@/services/user.service";
export default {
  data() {
    return {
      publishers: [],
    };
  },
  
  methods: {
    
    async getAllIssuer() {
      try {
        this.publishers = await IssuerService.getAll();
      } catch (error) {
        console.error("Error fetching publishers: ", error);
      }
    },

  
    async Logout() {
      try {
        await UserService.logout(); // Gọi phương thức logout từ service
        this.$router.push('/login'); // Chuyển hướng đến trang đăng nhập sau khi logout thành công
      } catch (error) {
        console.error('Error logging out:', error);
      }
    }

  },
  mounted() {
    this.getAllIssuer();
  },
};
</script>

<style scoped>
.header {
  font-family: ui-monospace;
  background-color: #cbcaca;
  color: #383468;
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
}

.container {
  display: flex;
  
  align-items: center;
}
.phan1{
  margin-left: 30px;
}
.phan2{
  margin-right: 20px;
  font-size: 1.2rem;
}
nav a {
  color: #fff;
  margin-left: 1rem;
  text-decoration: none;
  font-size: larger;
}

nav a:hover {
  text-decoration: underline;
}

select {
  padding: 0.5rem;
  border-radius: 4px;
  margin-left: 12px;
  width: unset;
}

a.gachchan,
a.gachchan {
  text-decoration: none;
  color: inherit;
  
}
</style>