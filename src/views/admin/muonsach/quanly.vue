<template>
  <div class="admin-manage-borrowing">
    <Sidebar />
    <div class="nenmuonsach">
      <div class="main-content">
        <h2>Quản lý Mượn Sách</h2>
        <table>
          <thead>
            <tr>
              <th>Số Thứ Tự</th>
              <th>Tên Người Mượn</th>
              <th>Tên Sách Mượn</th>
              <th>Ngày Mượn</th>
              <th>Ngày Trả</th>
              <th>Tình Trạng</th>
              <th>Hành Động</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(borrowing, index) in paginatedBooks" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ borrowing.madocgia.hoten }}</td>
              <td>{{ borrowing.masach.tensach }}</td>
              <td>{{ borrowing.ngaymuon }}</td>
              <td>{{ borrowing.ngaytra }}</td>
              <td>{{ borrowing.trangthai }}</td>
              <td>
                <router-link :to="{
                  name: 'suatrangthai',
                  params: { id: borrowing._id }
                }"><button class="sua" @click="editStatus(borrowing)">Sửa Trạng Thái</button> </router-link>

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
import BorrowingService from '@/services/borrowing.service';

export default {
  components: {
    Sidebar,
  },
  data() {
    return {
      borrowings: [
      ],
      currentPage: 1,
      pageSize: 10,
    };
  },
  methods: {
    editStatus(borrowing) {
      this.$router.push({ name: "suatrangthai" });
    },
    async getAllBorrow() {
      this.borrowings = await BorrowingService.getAll();
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
  computed: {
    totalPages() {
      return Math.ceil(this.borrowings.length / this.pageSize);
    },
    paginatedBooks() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return this.borrowings.slice(startIndex, endIndex);
    },
  },
  created() {
    this.getAllBorrow();
  },
};
</script>

<style scoped>
.admin-manage-borrowing {
  display: flex;
}
.nenmuonsach{
  background-color: white;
  width: 100%;
  height: 800px;
  border-radius: 5px;
  padding: 20px;
}
.sidebar {
  background-color: #f2f2f2;
}

.main-content {
  flex: 4;
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

.sua {
  background-color: #ffc107;
}

button {
  padding: 5px 10px;
  margin-right: 5px;
}

.phantrang {
  margin-top: 5px;
  margin-left: 1329px;
  padding: 2px;
}
</style>