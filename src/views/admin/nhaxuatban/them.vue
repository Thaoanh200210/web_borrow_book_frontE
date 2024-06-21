<template>
  <div class="maunenthem">
  <div class="add-publisher">
    <h2>Thêm Nhà Xuất Bản</h2>
    <form @submit.prevent="addPublisher">
      <div class="form-group">
        <label for="publisherName">Tên Nhà Xuất Bản:</label>
        <input type="text" id="publisherName" v-model="newPublisher.name" required />
      </div>
      <div class="form-group">
        <label for="publisherAddress">Địa Chỉ:</label>
        <input type="text" id="publisherAddress" v-model="newPublisher.address" required />
      </div>
      <button type="submit">Thêm</button>
      <router-link
              :to="{
                name: 'quanlynhaxuatban'
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
export default {
  data() {
    return {
      newPublisher: {
        name: "",
        address: "",
      },
      message: "",
    };
  },
  methods: {
    async addPublisher() {
      try {
         await IssuerService.create(this.newPublisher);
          this.newPublisher.name = "";
          this.newPublisher.address = "";
          this.message = "Nhà xuất bản đã được thêm thành công.";
      
      } catch (error) {
        this.message = "Đã xảy ra lỗi khi thêm nhà xuất bản.";
        console.error(error);
      }
    },
  },
  created() {
        this.message = "";
    },

};
</script>

<style scoped>
.add-publisher {
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