<template>
  <Header />
  <div class="maunenchitiet">
  <div class="book-detail">

    <h2>Chi tiết sách</h2>
    <div class="detail">
      <div class="info" style="    font-size: 20px;">
        <p><strong>Mã sách:</strong> {{ book.masach }}</p>
        <p><strong>Tên sách:</strong> {{ book.tensach }}</p>
        <p><strong>Số lượng:</strong> {{ book.soquyen }}</p>
        <p><strong>Đơn giá:</strong> {{ formatPrice(book.dongia)  }}</p>
        <p><strong>Tác giả:</strong> {{ book.tacgia }}</p>
        <p><strong>Năm sản xuất:</strong> {{ book.namxuatban }}</p>
        <p><strong>Nhà sản xuất:</strong> {{ book.nhaxuatban.name }}</p>
      </div>
    </div>
    <router-link
        :to="{
          name: 'trangchu',
        }"
      >
        <button type="button" class="trovetrangchu">Trở Về</button>
      </router-link>
  </div>
</div>
</template>

<script>
import BookService from '@/services/book.service';
import Header from './AppHeader.vue';

export default {
  props: {
    id: { type: String, required: true },
  },
  data() {
    return {
      book: {}, 
    };
  },
  components: {
    Header,
  },
  methods: {
    async getBookById(id) {
      try {
        this.book = await BookService.get(this.id); // Sử dụng this.id để truyền vào hàm get
      } catch (error) {
        console.error(error);
      }
    },
    formatPrice(price) {
      // Ép kiểu giá trị đơn giá sang số
      const priceNumber = parseFloat(price);
      // Kiểm tra nếu không phải là một số hợp lệ thì trả về giá trị ban đầu
      if (isNaN(priceNumber)) {
        return price;
      }
      // Định dạng giá tiền sang "40.000 vnđ"
      return priceNumber.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    },
  },
  created() {
    this.getBookById(this.id); // Sử dụng this.id
  }
};
</script>

<style>
.book-detail {
  max-width: 600px;
  margin: auto;
}
.maunenchitiet{
  background-color: white;
  margin: 30px auto;
  width: 1000px;
  border-radius: 5px;
  padding: 20px;
}
.detail {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 5px;
}

.info {
  margin-bottom: 10px;
}
.trovetrangchu{
  margin-top: 6px;
  background-color: gray;
}
</style>
