<template>
  <Header />
  <div class="maunen">
  <div class="book-list">
    <h2>Sách mới cập nhật</h2>
    <div class="search-filter">
      <input type="text" v-model="searchQuery" placeholder="Tìm kiếm">
    </div>
    <div class="books">
      <div v-for="book in paginatedBooks" :key="book._id" class="book">
        <router-link class="gachchan" :to="{
          name: 'chitietsach',
          params: { id: book._id }
        }">
          <h3 class="tensach">{{ book.tensach }}</h3>
          <p>Mã sách: {{ book.masach }}</p>
          <p>Tác giả: {{ book.tacgia }}</p>
          <p>Số quyển: {{ book.soquyen }}</p>
          <p>Đơn giá: {{ formatPrice(book.dongia) }}</p>
        </router-link>
        <router-link class="gachchan" :to="{ 
          name: 'muonsach',
          params: { id: book._id } }">
          <div>
            <button class="muonsach">Mượn sách</button>
          </div>
        </router-link>
      </div>
    </div>
    <div class="pagination" style="margin:0 0 9px 719px;">
      <button class="phantrangmau" @click="previousPage" :disabled="currentPage === 1">Trang trước</button>
      <span style="padding:0 5px 0 5px;">Trang {{ currentPage }} / {{ totalPages }}</span>
      <button class="phantrangmau" @click="nextPage" :disabled="currentPage === totalPages">Kế tiếp</button>
    </div>
  </div>
</div>
</template>

<script>
import Header from '../../components/AppHeader.vue';
import BookService from "../../services/book.service";

export default {
  data() {
    return {
      books: [],
      searchQuery: '',
      currentPage: 1,
      pageSize: 12,
    };
  },
  components: {
    Header,
  },
  computed: {
    filteredBooks() {
      let filtered = this.books;
      if (this.searchQuery) {
        filtered = filtered.filter(book =>
          book.tensach.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }
      return filtered;
    },
    totalPages() {
      return Math.ceil(this.filteredBooks.length / this.pageSize);
    },
    paginatedBooks() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return this.filteredBooks.slice(startIndex, endIndex);
    },
  },
  methods: {
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
    async getAllBook() {
      this.books = await BookService.getAll();
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
  },
  created() {
    this.getAllBook();
  },
};
</script>




<style>
.book-list {
  max-width: 1000px;
  margin: auto;
}
.maunen{
  background-color: white;
  margin: auto;
  width: 1200px;
  border-radius: 5px;
  padding: 20px;
}
.search-filter {
  margin-bottom: 1rem;
}

.books {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1rem;
}

.book {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 10px;
  margin-top: 0px;
}

.muonsach {
  border: none;
  bottom: 10px;
  cursor: pointer;
  background: linear-gradient(to right, #D28AD2, #178D8D);
}

.muonsach:hover {

  background: linear-gradient(to right, #D74E69, #424E8A);
}

h2 {
  font-family: ui-rounded;
  margin-top: 8px;
}

a.gachchan,
a.gachchan {
  text-decoration: none;
  color: inherit;
}
.tensach{
  color: #0b1f77;
}
.phantrangmau{
  background-color: #344a61;
}
</style>
