<template>
  <div class="edit-publisher">
    <h2>Sửa Nhà Xuất Bản</h2>
    <form @submit="submitNhaxuatban" :validation-schema="nhaxuatbanFormSchema">
      <div class="form-group">
        <label for="publisherName">Tên Nhà Xuất Bản:</label>
        <input type="text" id="publisherName" v-model="nhaxuatbanLocal.name" required />
        <ErrorMessage name="name" class="error-feedback" />
      </div>
      <div class="form-group">
        <label for="publisherAddress">Địa Chỉ:</label>
        <input type="text" id="publisherAddress" v-model="nhaxuatbanLocal.address" required />
        <ErrorMessage name="address" class="error-feedback" />
      </div>
      <button type="submit">Lưu</button>
    </form>
  </div>
</template>
<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  emits: ["submit:nhaxuatban"],
  props: {
    nhaxuatban: { type: Object, required: true }
  },
  data() {
    const nhaxuatbanFormSchema = yup.object().shape({
      name: yup
        .string()
        .required("Tên phải có giá trị.")
        .min(2, "Tên phải ít nhất 2 ký tự.")
        .max(50, "Tên có nhiều nhất 50 ký tự."),
      address: yup.string().max(100, "Địa chỉ tối đa 100 ký tự."),
    });
    return {
      // Chúng ta sẽ không muốn hiệu chỉnh props, nên tạo biến cục bộ
      // nhaxuatbanLocal để liên kết với các input trên form
      nhaxuatbanLocal: this.nhaxuatban,
      nhaxuatbanFormSchema,
    };
  },
  methods: {
    submitNhaxuatban() {
      this.$emit("submit:nhaxuatban", this.nhaxuatbanLocal);
    },
  },
};
</script>
<style scoped>
.edit-publisher {
  max-width: 400px;
  margin: auto;
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
</style>