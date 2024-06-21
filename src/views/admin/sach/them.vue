<template>
  <div class="nenthemsach">
  <div class="add-book">
    <h2>Thêm Sách</h2>
    <form @submit.prevent="addBook">
      <div class="form-group">
        <label for="title">Mã sách:</label>
        <input type="text" id="title" v-model="newBook.masach" required>
      </div>
      <div class="form-group">
        <label for="title">Tên Sách:</label>
        <input type="text" id="title" v-model="newBook.tensach" required>
      </div>
      <div class="form-group">
        <label for="price">Đơn Giá:</label>
        <input type="number" id="price" v-model="newBook.dongia" required>
      </div>
      <div class="form-group">
        <label for="quantity">Số Lượng:</label>
        <input type="number" id="quantity" v-model="newBook.soquyen" required>
      </div>
      <div class="form-group">
        <label for="author">Tác Giả:</label>
        <input type="text" id="author" v-model="newBook.tacgia" required>
      </div>
      <div class="form-group">
        <label for="year">Năm Sản Xuất:</label>
        <input type="number" id="year" v-model="newBook.namxuatban" required>
      </div>
      <div class="form-group">
        <label for="publisher">Nhà Xuất Bản:</label>
        <select id="publisher" v-model="selectedPublisher" required>
          <option disabled value="">Chọn nhà xuất bản</option>
          <option v-for="nhaxuatban in nhaxuatbans" :key="nhaxuatban._id" :value="nhaxuatban._id">{{ nhaxuatban.name }}</option>
        </select>
      </div>
      <button type="submit">Thêm Sách</button>
      <router-link
              :to="{
                name: 'quanlysach'
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
import BookService from "../../../services/book.service";
export default {
  data() {
    return {
      newBook: {
        masach: '',
        tensach: '',
        dongia: 0,
        soquyen: 0,
        tacgia: '',
        year: new Date().getFullYear(),
        namxuatban: '',
        nhaxuatban: '' // Thêm thuộc tính nhaxuatban vào đây
      },
      selectedPublisher: "",
      nhaxuatbans: [] // Thay thế bằng dữ liệu thực tế
    };
  },
  methods: {
    async getAllIssuer() {
      this.nhaxuatbans = await IssuerService.getAll();
    },
    
    async addBook() {
      try {
        this.newBook.nhaxuatban = this.selectedPublisher;
        await BookService.create(this.newBook);
        this.newBook.masach = "";
        this.newBook.tensach = "";
        this.newBook.dongia = 0; 
        this.newBook.soquyen = 0; 
        this.newBook.tacgia = "";
        this.newBook.namxuatban = "";
        this.newBook.nhaxuatban = "";
        this.message = "Sách đã được thêm thành công.";
      } catch (error) {
        this.message = "Đã xảy ra lỗi khi thêm sách.";
        console.error(error);
      }
    },
  },
  created() {
    this.getAllIssuer(); // Gọi phương thức getAllIssuer để lấy dữ liệu nhà xuất bản
    this.message = "";
  }
};
</script>

<style scoped>
.add-book {
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
.nenthemsach{
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
