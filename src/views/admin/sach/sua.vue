<template>
  <div class="nensuasach">
  <div class="edit-book">
    <h2>Sửa Sách</h2>
    <form @submit.prevent="updateBook">
      <div class="form-group">
        <label for="title">Mã sách:</label>
        <input type="text" id="title" v-model="bookLocal.masach" required>
      </div>
      <div class="form-group">
        <label for="title">Tên Sách:</label>
        <input type="text" id="title" v-model="bookLocal.tensach" required>
      </div>
      <div class="form-group">
        <label for="price">Đơn Giá:</label>
        <input type="number" id="price" v-model="bookLocal.dongia" required>
      </div>
      <div class="form-group">
        <label for="quantity">Số Lượng:</label>
        <input type="number" id="quantity" v-model="bookLocal.soquyen" required>
      </div>
      <div class="form-group">
        <label for="author">Tác Giả:</label>
        <input type="text" id="author" v-model="bookLocal.tacgia" required>
      </div>
      <div class="form-group">
        <label for="year">Năm Sản Xuất:</label>
        <input type="number" id="year" v-model="bookLocal.namxuatban" required>
      </div>
      <div class="form-group">
        <label for="publisher">Nhà Xuất Bản:</label>
        <select id="publisher" v-model="selectedPublisher" required>
          <option disabled value="">Chọn nhà xuất bản</option>
          <option v-for="nhaxuatban in nhaxuatbans" :key="nhaxuatban._id" :value="nhaxuatban._id">{{ nhaxuatban.name }}</option>
        </select>
      </div>
      <button type="submit">Lưu Thay Đổi</button>
      <router-link
        :to="{
          name: 'quanlysach',
        }"
      >
        <button type="button" class="trove">Trở Về</button>
      </router-link>
      <p>{{ message }}</p>
    </form>
  </div>
</div>
</template>
  
  <script>
import IssuerService from "../../../services/issuer.service";
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
import BookService from "../../../services/book.service";
export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  props: {
    id: { type: String, required: true },
  },
  data() {
    return {
      bookLocal: {
        masach: '',
        tensach: '',
        dongia: 0,
        soquyen: 0,
        tacgia: '',
        year: new Date().getFullYear(),
        namxuatban: '',
        nhaxuatban: '',
      },
      nhaxuatbans: [], 
      message: "",
      selectedPublisher: "",
      
    };
  },
  methods: {
    async getBook(id) {
      try {
        this.bookLocal = await BookService.get(id);
        this.selectedPublisher = this.bookLocal.nhaxuatban;
      } catch (error) {
        console.log(error);
        // Chuyển hướng sang trang NotFound đồng thời giữ nguyên URL
        this.$router.push({
          name: "notfound",
          params: {
            pathMatch: this.$route.path.split("/").slice(1)
          },
          query: this.$route.query,
          hash: this.$route.hash,
        });
      }
    },
    async getAllIssuer() {
      this.nhaxuatbans = await IssuerService.getAll();
    },
    async updateBook() {
      this.bookLocal.nhaxuatban = this.selectedPublisher;
      try {
        await BookService.update(this.id, this.bookLocal);
        this.message = "Sách được cập nhật thành công.";
      } catch (error) {
        console.log(error);
        this.message = "Đã xảy ra lỗi khi cập nhật sách.";
      }
    },
  },
  created() {
    this.selectedPublisher = this.bookLocal.nhaxuatban;
    this.getBook(this.id);
    this. getAllIssuer();
    this.message = "";
  },
};
</script>
  
  <style scoped>
.edit-book {
  max-width: 500px;
  margin: auto;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
}
.nensuasach{
  background-color: white;
  margin: 30px auto;
  width: 900px;
  border-radius: 5px;
  padding: 20px;
}
input[type="text"],
input[type="number"],
select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.trove {
  background-color: #ffc107;
  margin-left: 20px;
}
</style>
  