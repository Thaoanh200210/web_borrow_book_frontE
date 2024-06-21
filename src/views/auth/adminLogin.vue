<!-- LoginComponent.vue -->
<template>
  <div class="formdangnhap">
    <div class="login-form" >
      <h2>ADMIN ĐĂNG NHẬP</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="phone"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
          </svg> Số điện thoại:</label>
          <input type="tel" id="phone" v-model="manager.sodienthoai" required>
        </div>
        <div class="form-group">
          <label for="password"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-key" viewBox="0 0 16 16">
            <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8m4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5"/>
            <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
          </svg> Mật khẩu:</label>
          <input type="password" id="password" v-model="manager.password" required>
        </div>
        <button type="submit" class="dangnhap">Đăng nhập</button>
      </form>

      <div v-if="loginSuccessMessage" class="login-success-message">
        {{ loginSuccessMessage }}
      </div>
    </div>
  </div>
  </template>
  
  <script>
  import ManagerService from '@/services/manager.service';
  export default {
    data() {
      return {
        manager:{
          sodienthoai: '',
        password: ''
      },
      loginSuccessMessage: '',
    };
    },
    methods: {
      async submitForm() {
      try {
        await ManagerService.login(this.user); // Sử dụng UserService trực tiếp
        this.loginSuccessMessage = 'Đăng nhập thành công!';
        // Chuyển hướng sau một khoảng thời gian
        setTimeout(() => {
          this.$router.push({ name: 'quanlysach' });
        }, 2000); 
      } catch (error) {
        console.error('Đăng nhập không thành công:', error);
        alert('Đăng nhập không thành công. Vui lòng kiểm tra lại số điện thoại và mật khẩu.');
      }
    }
    }
  };
  </script>
  
  <style>
  .login-form {
    max-width: 400px;
    margin: auto;
  }
  .form-group {
    margin-bottom: 1rem;
  }
  label {
    display: block;
  }
  input[type="tel"],
  input[type="password"] {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  .dangnhap {
    background: linear-gradient(to right, #fc00ff, #00dbde);
    color: #fff;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  .dangnhap:hover{
  
    background: linear-gradient(to right, #fc466b, #3f5efb); 
  }
  </style>
  