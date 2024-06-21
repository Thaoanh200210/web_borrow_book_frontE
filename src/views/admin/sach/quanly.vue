<template>
  <div class="admin-panel">
    <Sidebar />
    <div class="nensach">
    <div class="main-content">
      <h2>Quản lý Sách</h2>
      <div class="search-bar">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Tìm kiếm"
          style="width: 90%; margin: 3px"
        />
        <button @click="searchBooks" class="search-button">Tìm kiếm</button>
      </div>
      <router-link to="/admin/sach/them">
        <button class="them">Thêm sách</button>
      </router-link>
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Mã Sách</th>
            <th>Tên Sách</th>
            <th>Số Lượng</th>
            <th>Giá</th>
            <th>Tác Giả</th>
            <th>Năm Sản Xuất</th>
            <th>Nhà Xuất Bản</th>
            <th>Hành Động</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(book, index) in paginatedBooks" :key="index">
            <td>{{ (currentPage - 1) * pageSize + index + 1 }}</td>
            <td>{{ book.masach }}</td>
            <td>{{ book.tensach }}</td>
            <td>{{ book.soquyen }}</td>
            <td>{{ formatPrice(book.dongia) }}</td>
            <td>{{ book.tacgia }}</td>
            <td>{{ book.namxuatban }}</td>
            <td>{{ book.nhaxuatban.name }}</td>
            <td>
              <router-link
                :to="{
                  name: 'suasach',
                  params: { id: book._id },
                }"
              >
                <button class="sua">Sửa</button>
              </router-link>
              <button class="xoa" @click="deleteBook(book)">Xóa</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="pagination phantrang">
        <button @click="previousPage" :disabled="currentPage === 1">
          Trang trước
        </button>
        <span style="padding-right: 5px"
          >Trang {{ currentPage }} / {{ totalPages }}
        </span>
        <button @click="nextPage" :disabled="currentPage === totalPages">
          Kế tiếp
        </button>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import BookService from "../../../services/book.service";

export default {
  components: {
    Sidebar,
  },
  data() {
    return {
      books: [],
      currentPage: 1,
      pageSize: 10,
      searchQuery: "",
    };
  },
  methods: {
    async getAllBook() {
      this.books = await BookService.getAll();
    },
    async searchBooks() {
      if (this.searchQuery.trim() === "") {
        this.getAllBook();
        return;
      }
      try {
        let filtered = this.books;
        if (this.searchQuery) {
          filtered = filtered.filter((book) =>
            book.tensach.toLowerCase().includes(this.searchQuery.toLowerCase())
          );
        }
        this.books = filtered;
      } catch (error) {
        console.error("Lỗi khi tìm kiếm sách:", error);
      }
    },

    async deleteBook(book) {
      if (confirm("Bạn muốn xóa sách này?")) {
        try {
          await BookService.delete(book._id);
          this.books = this.books.filter((item) => item._id !== book._id);
        } catch (error) {
          console.error("Lỗi khi xóa sách:", error);
        }
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
    formatPrice(price) {
      const priceNumber = parseFloat(price);
      if (isNaN(priceNumber)) {
        return price;
      }
      // Định dạng giá tiền sang "40.000 vnđ"
      return priceNumber.toLocaleString("vi-VN", {
        style: "currency",
        currency: "VND",
      });
    },
  },
  computed: {
    totalPages() {
      return Math.ceil(this.books.length / this.pageSize);
    },
    paginatedBooks() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return this.books.slice(startIndex, endIndex);
    },
  },
  mounted() {
    this.getAllBook();
  },
};
</script>


<style scoped>
.admin-panel {
  display: flex;
}

.sidebar {
  background-color: #f2f2f2;
}
.nensach{
  background-color: white;
  width: 100%;
  height: 800px;
  border-radius: 5px;
  padding: 20px;
}
.main-content {
  flex: 1;
  padding: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

button {
  padding: 5px 10px;
  margin-right: 5px;
}

.them {
  margin-bottom: 12px;
  background-color: #28a745;
}

.sua {
  background-color: #ffc107;
}

.xoa {
  background-color: #dc3545;
}
.phantrang {
  margin-top: 5px;
  margin-left: 1329px;
  padding: 2px;
}
</style>