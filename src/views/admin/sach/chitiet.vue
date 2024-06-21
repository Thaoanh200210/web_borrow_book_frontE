<!-- BookDetail.vue -->
<template>

      <div class="book-detail">
        <h2>Chi tiết sách</h2>
        <div class="detail">
          <div class="info">
            <p><strong>Mã sách:</strong> {{ book.id }}</p>
            <p><strong>Tên sách:</strong> {{ book.title }}</p>
            <p><strong>Số lượng:</strong> {{ book.quantity }}</p>
            <p><strong>Đơn giá:</strong> {{ book.price }}</p>
            <p><strong>Tác giả:</strong> {{ book.author }}</p>
            <p><strong>Nhà sản xuất:</strong> {{ book.publisher }}</p>
            <p><strong>Năm sản xuất:</strong> {{ book.year }}</p>
          </div>
        </div>
      </div>
</template>
    
<script>
    export default {
      data() {
        return {
          book: {
          },
        };
      },
    };
</script>
    
    <style>
    .book-detail {
      max-width: 600px;
      margin: auto;
    }
    .detail {
      background-color: #f9f9f9;
      padding: 20px;
      border-radius: 5px;
    }
    .info {
      margin-bottom: 10px;
    }
    </style>
    