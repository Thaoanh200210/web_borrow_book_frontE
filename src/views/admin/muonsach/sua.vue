<template>
  <div class="nensua">
  <div class="edit-borrowing-status">
    <h2>Sửa Trạng Thái Mượn Sách</h2>
    <form @submit.prevent="saveStatus">
      <div class="form-group">
        <label for="status">Chọn Trạng Thái:</label>
        <select v-model="selectedStatus" id="status">
          <option value="Đã Mượn">Đã Mượn</option>
          <option value="Đã Trả">Đã Trả</option>
          <option value="Trả muộn">Trả muộn</option>
        </select>
      </div>
      
      <button type="submit" >Lưu</button>
      <router-link
              :to="{
                name: 'quanlymuonsach'
              }"
              >
        <button type="button" class="trove">Trở Về</button>
      </router-link>
    </form>
    <p>{{ message }}</p>
  </div>
</div>
</template>
  
  <script>
import BorrowingService from '@/services/borrowing.service';
export default {
  props: {
    id: { type: String, required: true },
  },
  data() {
    return {
      borrow:{},
      selectedStatus: "Đã Mượn",
      message: "",
    };
  },
  methods: {
    async getBorrow() {
      try {
        this.borrow = await BorrowingService.get(this.id);
      } catch (error) {
        console.log(error);
      }
    },
    async saveStatus() {
      try {
      await BorrowingService.update(this.id, {trangthai: this.selectedStatus});
      this.message= 'Đã cập nhật trạng thái thành công.';
    } catch (error) {
      console.error('Lỗi khi cập nhật trạng thái:', error);
    }
    },
  },
  created() {
    this.getBorrow(this.id);
  }
};
</script>
  
  <style scoped>
.edit-borrowing-status {
  max-width: 400px;
  margin: auto;
}

.form-group {
  margin-bottom: 20px;
}
.nensua{
  background-color: white;
  margin: 30px auto;
  width: 900px;
  border-radius: 5px;
  padding: 20px;
}
label {
  display: block;
  font-weight: bold;
}

select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.trove {
  background-color: #ffc107;
  margin-left: 20px;
}
button {
  background-color: #007bff;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
  