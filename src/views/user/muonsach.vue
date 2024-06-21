<!-- BorrowBook.vue -->
<template>
  <Header />
  <div class="nenmuonsach">
    <div class="borrow-book">
      <h2>Mượn Sách</h2>
      <form @submit.prevent="borrowBook">
        <div class="form-group">
          <label for="borrowerName">Tên người mượn:</label>
          <input type="hidden" id="borrowerName" v-model="user._id" required />
          <input type="text" id="hoten" v-model="user.hoten" disabled />
        </div>
        <div class="form-group">
          <label for="borrowDate">Ngày mượn:</label>
          <input type="date" id="borrowDate" v-model="ngaymuon" required />
        </div>
        <div class="form-group">
          <label for="returnDate">Ngày trả:</label>
          <input type="date" id="returnDate" v-model="ngaytra" required />
        </div>
        <div class="form-group">
          <label for="book">Tên sách:</label>
          <input type="hidden" id="returnDate" v-model="book._id" required />
          <input type="text" id="tensach" v-model="book.tensach" disabled />
        </div>
        <button type="submit" class="muonsach">Mượn Sách</button>
        <router-link
          :to="{
            name: 'trangchu',
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
import Header from "../../components/AppHeader.vue";
import BookService from "@/services/book.service";
import BorrowingService from "../../services/borrowing.service";
export default {
  props: {
    id: { type: String, required: true },
  },
  data() {
    return {
      ngaymuon: "",
      ngaytra: "",
      book: {},
      user: {},
      message: "",
    };
  },
  components: {
    Header,
  },
  methods: {
    async borrowBook() {
      try {
        // Lấy thông tin sách để kiểm tra số lượng
        let book = await BookService.get(this.book._id);

        // Kiểm tra số lượng sách
        if (book.soquyen > 0) {
          let borrow = {
            ngaymuon: this.ngaymuon,
            ngaytra: this.ngaytra,
            madocgia: this.user._id,
            masach: this.book._id,
          };

          // Tạo phiếu mượn sách
          await BorrowingService.create(borrow);

          // Giảm số lượng sách sau khi mượn thành công
          await BookService.updateQuantity(this.book._id);

          this.ngaymuon = "";
          this.ngaytra = "";
          this.message = "Đã mượn sách thành công.";
        } else {
          this.message = "Xin lỗi, đã hết sách. Không thể mượn.";
        }
      } catch (e) {
        this.message = "Đã xảy ra lỗi khi mượn sách.";
        console.log(e);
      }
    },
    async getUserName() {
      this.user = JSON.parse(localStorage.getItem("user"));
    },
    async getBookById() {
      try {
        this.book = await BookService.get(this.id); // Sử dụng this.id để truyền vào hàm get
      } catch (error) {
        console.error(error);
      }
    },
  },
  created() {
    this.getBookById(this.id);
    this.getUserName();
  },
};
</script>

<style>
.borrow-book {
  max-width: 400px;
  margin: auto;
}
.nenmuonsach {
  background-color: white;
  margin: 30px auto;
  width: 800px;
  border-radius: 5px;
  padding: 20px;
}
.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
}

input[type="text"],
input[type="date"],
select {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: #007bff;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.trove {
  background-color: #424039;
  margin-left: 20px;
}
</style>