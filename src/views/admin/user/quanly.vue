<template>
    
    <div class="admin-page">
        <Sidebar />
        <div class="nendocgia">
        <div class="main-content">
            <h2>Quản lý Người Đọc</h2>
            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Họ và Tên</th>
                        <th>Giới Tính</th>
                        <th>Ngày Sinh</th>
                        <th>Số Điện Thoại</th>
                        <th>Địa Chỉ</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(user, index) in users" :key="index">
                        <td>{{ index + 1 }}</td>
                        <td>{{ user.hoten }}</td>
                        <td>{{ user.gioitinh }}</td>
                        <td>{{ formatDate(user.ngaysinh) }}</td>
                        <td>{{ user.sodienthoai }}</td>
                        <td>{{ user.diachi }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue"; // Đường dẫn đến component Sidebar
import UserService from "@/services/user.service";
export default {
    components: {
        Sidebar
    },
    data() {
        return {
            users: [],
        };
    },
    methods: {
        async getAllUser() {
            this.users = await UserService.getAll();
        },
        formatDate(dateString) {
            if (!dateString) return ''; // Trả về chuỗi rỗng nếu ngày sinh không tồn tại
            const date = new Date(dateString); // Tạo đối tượng Date từ chuỗi ngày sinh
            const day = date.getDate(); // Lấy ngày
            const month = date.getMonth() + 1; // Lấy tháng (lưu ý phải cộng thêm 1 vì tháng bắt đầu từ 0)
            const year = date.getFullYear(); // Lấy năm
            return `${day} - ${month} - ${year}`; // Trả về chuỗi ngày - tháng - năm
        }
    },
    created() {
        this.getAllUser();
    }
};
</script>

<style scoped>
.admin-page {
    display: flex;
}

.main-content {
    flex: 1;
    padding: 20px;
}
.nendocgia{
    background-color: white;
    width: 100%;
    height: 800px;
    border-radius: 5px;
    padding: 20px;
}
table {
    width: 100%;
    border-collapse: collapse;
}

.sidebar {
    background-color: #f2f2f2;
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
</style>