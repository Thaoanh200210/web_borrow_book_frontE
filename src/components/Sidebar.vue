<template>
    <div class="sidebar">
      <div class="logo">
        <h2>Admin TABOOK</h2>
      </div>
      <ul class="list-group">
        <router-link to="/admin/nhaxuatban/quanly"> <li class="list-group-item">Quản lý Nhà Xuất Bản</li></router-link>
        <router-link to="/admin/muonsach/quanly"> <li class="list-group-item">Quản lý Mượn Sách</li></router-link>
        <router-link to="/admin/user/quanly"> <li class="list-group-item">Quản lý Đọc Giả</li></router-link>
        <router-link to="/admin/sach/quanly"><li class="list-group-item">Quản lý Sách</li> </router-link>
        <router-link to="/admin/login"><li class="list-group-item">Đăng xuất</li> </router-link>
      </ul>
      <!-- <div class="menu">
        
        <router-link to="/admin/nhaxuatban/quanly"> <button>Quản lý Nhà Xuất Bản</button></router-link>
        <router-link to="/admin/muonsach/quanly"> <button>Quản lý Mượn Sách</button></router-link>
        <router-link to="/admin/user/quanly"> <button>Quản lý Đọc Giả</button></router-link>
        <router-link to="/admin/sach/quanly"><button>Quản lý Sách</button> </router-link>
        <router-link to="/admin/login"><button>Đăng xuất</button> </router-link>
      </div> -->
    </div>
  </template>
  
  <style scoped>
  .sidebar {
    width: 250px;
    padding: 20px;
    height: 806px;
  }
  
  .logo {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .menu {
    display: flex;
    flex-direction: column;
  }
  
  .router-link {
    color: black;
    text-decoration: none;
    margin-bottom: 10px;
  }
  
  .router-link:hover {
    text-decoration: underline;
    
  }

  button{
    margin: 3px;
    background-color: #b5adad;
    color: black;
    border: solid;
    font-size: 16px;
  
  }
  </style>
  