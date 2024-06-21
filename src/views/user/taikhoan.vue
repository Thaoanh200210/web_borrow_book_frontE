<template>
    <Header />
    <div class="formdangky">
        <div class="edit-profile">
            <h2>Chỉnh sửa thông tin cá nhân</h2>
            <form @submit.prevent="updateProfile">
                <div class="form-group">
                    <label for="fullname"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                            <path
                                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                        </svg>
                        Họ và tên:</label>
                    <input type="text" id="fullname" v-model="user.hoten" required />
                </div>
                <div class="form-group">
                    <label for="phone"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                            <path
                                d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                        </svg>
                        Số điện thoại:</label>
                    <input type="tel" id="phone" v-model="user.sodienthoai" required />
                </div>
                <div class="form-group">
                    <div class="phai">
                        <label>Phái:</label>
                        <input type="radio" id="male" value="Nam" class="radio" v-model="user.gioitinh" />
                        <label for="male">Nam</label>
                        <input type="radio" id="female" value="Nữ" class="radio" v-model="user.gioitinh" />
                        <label for="female">Nữ</label>
                    </div>
                </div>
                <div class="form-group">
                    <label for="address"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
                            <path
                                d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z" />
                        </svg>
                        Địa chỉ:</label>
                    <input type="text" id="address" v-model="user.diachi" required />
                </div>
                <div class="form-group">
                    <label for="dob">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-cake2" viewBox="0 0 16 16">
                            <path
                                d="m3.494.013-.595.79A.747.747 0 0 0 3 1.814v2.683q-.224.051-.432.107c-.702.187-1.305.418-1.745.696C.408 5.56 0 5.954 0 6.5v7c0 .546.408.94.823 1.201.44.278 1.043.51 1.745.696C3.978 15.773 5.898 16 8 16s4.022-.227 5.432-.603c.701-.187 1.305-.418 1.745-.696.415-.261.823-.655.823-1.201v-7c0-.546-.408-.94-.823-1.201-.44-.278-1.043-.51-1.745-.696A12 12 0 0 0 13 4.496v-2.69a.747.747 0 0 0 .092-1.004l-.598-.79-.595.792A.747.747 0 0 0 12 1.813V4.3a22 22 0 0 0-2-.23V1.806a.747.747 0 0 0 .092-1.004l-.598-.79-.595.792A.747.747 0 0 0 9 1.813v2.204a29 29 0 0 0-2 0V1.806A.747.747 0 0 0 7.092.802l-.598-.79-.595.792A.747.747 0 0 0 6 1.813V4.07c-.71.05-1.383.129-2 .23V1.806A.747.747 0 0 0 4.092.802zm-.668 5.556L3 5.524v.967q.468.111 1 .201V5.315a21 21 0 0 1 2-.242v1.855q.488.036 1 .054V5.018a28 28 0 0 1 2 0v1.964q.512-.018 1-.054V5.073c.72.054 1.393.137 2 .242v1.377q.532-.09 1-.201v-.967l.175.045c.655.175 1.15.374 1.469.575.344.217.356.35.356.356s-.012.139-.356.356c-.319.2-.814.4-1.47.575C11.87 7.78 10.041 8 8 8c-2.04 0-3.87-.221-5.174-.569-.656-.175-1.151-.374-1.47-.575C1.012 6.639 1 6.506 1 6.5s.012-.139.356-.356c.319-.2.814-.4 1.47-.575M15 7.806v1.027l-.68.907a.94.94 0 0 1-1.17.276 1.94 1.94 0 0 0-2.236.363l-.348.348a1 1 0 0 1-1.307.092l-.06-.044a2 2 0 0 0-2.399 0l-.06.044a1 1 0 0 1-1.306-.092l-.35-.35a1.935 1.935 0 0 0-2.233-.362.935.935 0 0 1-1.168-.277L1 8.82V7.806c.42.232.956.428 1.568.591C3.978 8.773 5.898 9 8 9s4.022-.227 5.432-.603c.612-.163 1.149-.36 1.568-.591m0 2.679V13.5c0 .006-.012.139-.356.355-.319.202-.814.401-1.47.576C11.87 14.78 10.041 15 8 15c-2.04 0-3.87-.221-5.174-.569-.656-.175-1.151-.374-1.47-.575-.344-.217-.356-.35-.356-.356v-3.02a1.935 1.935 0 0 0 2.298.43.935.935 0 0 1 1.08.175l.348.349a2 2 0 0 0 2.615.185l.059-.044a1 1 0 0 1 1.2 0l.06.044a2 2 0 0 0 2.613-.185l.348-.348a.94.94 0 0 1 1.082-.175c.781.39 1.718.208 2.297-.426" />
                        </svg>
                        Ngày sinh:
                    </label>
                    <input type="date" id="dob" v-model="user.ngaysinh" required />
                </div>
                <button type="submit" class="dangky_thatsu">Cập nhật thông tin</button>
            </form>
            <p v-if="message" class="message">{{ message }}</p>
        </div>
    </div>
</template>

<script>
import UserService from "../../services/user.service";
import Header from "../../components/AppHeader.vue";

export default {
    data() {
        return {
            user: {
                hoten: "",
                ngaysinh: "",
                sodienthoai: "",
                diachi: "",
                gioitinh: "",
            },
            message: "",
        };
    },
    components: {
        Header,
    },
    methods: {
        async updateProfile() {
            try {
                const userId = JSON.parse(localStorage.getItem("user"))._id;
                console.log(userId);
                await UserService.update(userId, {
                    hoten: this.user.hoten,
                    diachi: this.user.diachi,
                    ngaysinh: this.user.ngaysinh,
                    gioitinh: this.user.gioitinh,
                    sodienthoai: this.user.sodienthoai,
                });
                this.message = "Thông tin đã được cập nhật.";
            } catch (error) {
                this.message = "Đã xảy ra lỗi khi cập nhật thông tin.";
                console.error(error);
            }
        },
        fetchUserProfile() {
            try {
                const userData = JSON.parse(localStorage.getItem("user"));
                // Chuyển đổi ngày tháng từ chuỗi MongoDB sang định dạng trình duyệt có thể hiểu
                const ngaySinhChinhXac = userData.ngaysinh
                    ? new Date(userData.ngaysinh).toISOString().slice(0, 10)
                    : "";
                this.user = {
                    hoten: userData.hoten || "",
                    ngaysinh: ngaySinhChinhXac, // Gán giá trị ngày sinh đã chuyển đổi
                    sodienthoai: userData.sodienthoai || "",
                    diachi: userData.diachi || "",
                    gioitinh: userData.gioitinh || "",
                };
            } catch (error) {
                console.error(error);
            }
        },
    },
    created() {
        this.fetchUserProfile();
    },
};
</script>

<style scoped>
.edit-profile {
    max-width: 400px;
    margin: auto;
}

.profile-form {
    margin-top: 20px;
}

.form-group {
    margin-bottom: 20px;
}

label {
    display: block;
    margin-bottom: 5px;
}

input[type="text"],
input[type="tel"],
input[type="date"],
select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

button {
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.btn-save {
    background-color: #28a745;
}

.message {
    color: #dc3545;
    font-style: italic;
    margin-top: 10px;
}

.formdangky {
    margin: 50px auto;
    background-color: white;
    width: 500px;
    height: 580px;
    padding-top: 10px;
    border-radius: 5px;
}
</style>