<template>
  <div class="maunenthem">
    <div class="edit-publisher ">
      <h2>Sửa Nhà Xuất Bản</h2>
      <form @submit.prevent="submitNhaxuatban">
        <div class="form-group">
          <label for="publisherName">Tên Nhà Xuất Bản:</label>
          <input type="text" id="publisherName" v-model="nhaxuatbanLocal.name" required />
        </div>
        <div class="form-group">
          <label for="publisherAddress">Địa Chỉ:</label>
          <input type="text" id="publisherAddress" v-model="nhaxuatbanLocal.address" required />
        </div>
        <button type="submit">Lưu</button>
        <router-link :to="{
          name: 'quanlynhaxuatban'
        }">
          <button type="button" class="trove">Trở Về</button>
        </router-link>
      </form>
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script>
import IssuerService from "../../../services/issuer.service";
import { Form, Field, ErrorMessage } from "vee-validate";

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
      nhaxuatbanLocal: {
        name: '',
        address: '',
      },
      message: "",
    };
  },
  methods: {
    async getNhaxuatban(id) {
      try {
        this.nhaxuatbanLocal = await IssuerService.get(id);

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
    async submitNhaxuatban() {
      try {
        await IssuerService.update(this.id, this.nhaxuatbanLocal);
        this.message = "Nhà xuất bản được cập nhật thành công.";
      } catch (error) {
        console.log(error);
        this.message = "Đã xảy ra lỗi khi cập nhật nhà xuất bản.";
      }
    },
  },
  created() {
    this.getNhaxuatban(this.id);
    this.message = "";
  },
};
</script>

<style scoped>
.edit-publisher {
  max-width: 400px;
  margin: auto;
}
.maunenthem{
  background-color: white;
  margin: 30px auto;
  width: 900px;
  border-radius: 5px;
  padding: 20px;
}
.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
}

input[type="text"] {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: #007bff;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.trove {
  background-color: #ffc107;
  margin-left: 20px;
}
</style>