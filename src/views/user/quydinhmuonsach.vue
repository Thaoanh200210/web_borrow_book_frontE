<template>
  <Header />
    <div class="maunen" style="margin-top: 30px;">
      
      <div class="container">
        <h2 class="tieude">Hướng dẫn mượn sách:</h2>
        <ol>
          <li>Lựa chọn sách muốn mượn</li>
          <li>Bấm vào mượn sách</li>
          <li>Lấy sách và đến gặp người quản lý thư viện kí tên</li>
        </ol>
  
        <h2 class="tieude">Quy định mượn:</h2>
        <ul>
          <li>Mỗi mã sách chỉ được mượn duy nhất 1 quyển</li>
          <li>Không được xé sách, làm hư sách</li>
          <li>Mỗi người mượn tối đa 3 quyển</li>
          <li>Chỉ mượn sách trong vòng 30 ngày</li>
          <li>Trả sách đúng hạn</li>
          <li>Trả sách muộn tối đa 3 ngày</li>
          <li>Trả sách nếu hư tổn sẽ đền bù theo hư tổn tương đương giá trị sách</li>
          <li>Làm mất sách sẽ phải đền tiền theo giá tiền của sách</li>
        </ul>
  
        <p>Cảm ơn bạn đã mượn sách. Tri thức là mãi mãi.</p>
      </div>
    </div>
  </template>
  
  <script>
  import Header from '../../components/AppHeader.vue';
  
  export default {
    components: {
      Header
    }
  }
  </script>
  
  <style scoped>
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  h2 {
    color: #333;
  }
.tieude{
    color: #0b1f77;
}
  ol, ul {
    font-family: ui-monospace;
    list-style-type: none;
    padding: 0;
    font-size: 20px;
  }
  
  p {
    font-family: ui-monospace;
    margin-top: 20px;
    font-size: 30px;
    color: red;
  }
  </style>
  