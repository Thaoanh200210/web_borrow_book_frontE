<template>
  <Header />
  <div class="maunenlichsu">
  <div class="borrow-history">
    <h2>Lịch sử mượn sách</h2>
    <div class="history-list">
      <div v-for="(borrow, index) in borrowHistory" :key="index" class="borrow-item">
        <p><strong>Tên sách:</strong> {{ borrow.masach.tensach }}</p>
        <p><strong>Ngày mượn:</strong> {{ borrow.ngaymuon }}</p>
        <p><strong>Ngày trả:</strong> {{ borrow.ngaytra }}</p>
        <p style="color: blue;"><strong>Trạng thái:</strong> {{ borrow.trangthai }}</p>
      </div>
    </div>
  </div>
  
</div>
</template>

<script>
import Header from '../../components/AppHeader.vue';
import BorrowingService from '@/services/borrowing.service';
export default {
  data() {
    return {
      borrowHistory: [
      ],
    };
  },
  components: {
    Header,
  },
  methods:{
    async getAllBorrowById(){
      let user = JSON.parse(localStorage.getItem("user"));
      let id = user._id;
      console.log(id)
      this.borrowHistory = await BorrowingService.get(id);
      // this.borrowHistory.push(muon);
      console.log(this.borrowHistory)
    }
  },
  created() {
    this.getAllBorrowById();
  },
};
</script>

<style scoped>
.borrow-history {
  max-width: 800px;
  margin: auto;
}
.maunenlichsu{
  background-color: white;
  margin: 20px auto;
  width: 1200px;
  border-radius: 5px;
  padding: 20px;

}
.history-list {
  margin-top: 20px;
}

.borrow-item {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}
</style>
