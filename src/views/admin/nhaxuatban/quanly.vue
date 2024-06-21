<template>
  <div class="admin-manage-publishers">
    <Sidebar />
    <div class="nhaxuatban">
    <div class="main-content">
      <h2>Quản lý Nhà Xuất Bản</h2>
      <router-link to="/admin/nhaxuatban/them">
        <button class="them">Thêm nhà xuất bản</button>
      </router-link>

      <table>
        <thead>
          <tr>
            <th>Số thứ tự</th>
            <th>Tên Nhà Xuất Bản</th>
            <th>Địa Chỉ</th>
            <th>Hành Động</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(publisher, index) in publishers" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ publisher.name }}</td>
            <td>{{ publisher.address }}</td>
            <td>
              <router-link
              :to="{
                name: 'suanhaxuatban',
                params: { id: publisher._id }
              }"
              >
                <button class="sua">Sửa</button></router-link>
              <button class="xoa" @click="deletePublisher(publisher)">
                Xóa
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  </div>
</template>
  
  <script>
import Sidebar from "@/components/Sidebar.vue";
import IssuerService from "../../../services/issuer.service";

export default {
  components: {
    Sidebar,
  },
  data() {
    return {
      publishers: [],
    };
  },
  methods: {
    async deletePublisher(publisher) {
      if (confirm("Bạn muốn xóa Nhà xuất bản này?")) {
        try {
          await IssuerService.delete(publisher._id);
          this.publishers = this.publishers.filter(
            (item) => item._id !== publisher._id
          );
        } catch (error) {
          console.error("Lỗi khi xóa nhà xuất bản:", error);
        }
      }
    },
    async getAllIssuer() {
      this.publishers = await IssuerService.getAll();
    },
  },
  mounted() {
    this.getAllIssuer();
  },
};
</script>
  
  <style scoped>
.admin-manage-publishers {
  display: flex;
}
.nhaxuatban{
  background-color: white;
  width: 100%;
  height: 800px;
  border-radius: 5px;
  padding: 20px;
}
.sidebar {
  padding: 20px;
  background-color: #f2f2f2;
}

.main-content {
  flex: 4;
  padding: 20px;
}

button {
  background-color: #007bff;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 5px;
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
.them {
  background-color: #28a745;
  margin-bottom: 11px;
}
.sua {
  background-color: #ffc107;
}
.xoa {
  background-color: #dc3545;
}
</style>
  