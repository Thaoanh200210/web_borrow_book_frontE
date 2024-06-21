<template>
    <div>
      <Header />
      <div class="maunen">
        <div class="books-by-publisher">
          <div class="content">
            <h2>Danh Sách Sách Theo Nhà Xuất Bản</h2>
            <div class="publisher-filter">
              <label for="publisher">Chọn Nhà Xuất Bản:</label>
              <select v-model="selectedPublisher" id="publisher">
                <option value="">Tất cả</option>
                <option v-for="publisher in publishers" :value="publisher._id" :key="publisher._id">{{ publisher.name }}</option>
              </select>
            </div>
            <div class="book-list">
              <div v-for="(book, index) in paginatedBooks" :key="index" class="book">
                <h3>{{ book.title }}</h3>
                <p><strong>Mã sách:</strong> {{ book.masach }}</p>
                <p style="color: rgb(251 44 44);
                font-size: 18px;"><strong>Tên sách:</strong> {{ book.tensach }}</p>
                <p><strong>Số lượng:</strong> {{ book.soquyen }}</p>
                <p><strong>Đơn giá:</strong> {{ formatPrice(book.dongia) }}</p>
                <p><strong>Năm Xuất Bản:</strong> {{ book.namxuatban }}</p>
                <p><strong>Nhà Xuất Bản:</strong> {{ book.nhaxuatban.name }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="pagination">
          <button class="phantrangmau" @click="previousPage" :disabled="currentPage === 1">Trang trước</button>
          <span style="padding:0 5px;">Trang {{ currentPage }} / {{ totalPages }}</span>
          <button class="phantrangmau" @click="nextPage" :disabled="currentPage === totalPages">Kế tiếp</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Header from '../../components/AppHeader.vue';
  import BookService from "../../services/book.service";
  import IssuerService from "../../services/issuer.service";
  
  export default {
    data() {
      return {
        books: [],
        publishers: [],
        selectedPublisher: '',
        currentPage: 1,
        pageSize: 9,
      };
    },
    props: {
      id: { type: String, required: true },
    },
    computed: {
      filteredBooks() {
        if (this.selectedPublisher) {
          return this.books.filter(book => book.nhaxuatban._id === this.selectedPublisher);
        }
        return this.books;
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
      async getAllIssuer() {
        try {
          this.publishers = await IssuerService.getAll();
        } catch (error) {
          console.error("Error fetching publishers: ", error);
        }
      },
      formatPrice(price) {
        const priceNumber = parseFloat(price);
        if (isNaN(priceNumber)) {
          return price;
        }
        return priceNumber.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
      },
      async getAllBook() {
        try {
          this.books = await BookService.getAll();
        } catch (error) {
          console.error("Error fetching books: ", error);
        }
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
    mounted() {
      this.getAllBook();
      this.getAllIssuer();
    },
    components: {
      Header
    }
  };
  </script>
  
  <style scoped>
  .content {
    max-width: 800px;
    margin: auto;
  }
  
  .publisher-filter {
    margin-bottom: 20px;
  }
  
  .book-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 20px;
  }
  
  .book {
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 5px;
  }
  
  .pagination {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .phantrangmau {
    background-color: #203041;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin: 0 5px;
  }
  
  .phantrangmau:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  </style>
  