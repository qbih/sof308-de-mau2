<template>
    <div>
      <h2>Danh sách tác giả</h2>
      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên</th>
            <th>Giới Tính</th>
            <th>Địa Chỉ</th>
            <th>Tuổi</th>
            <th>Hành Động</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="author in authors" :key="author.id">
            <td>{{ author.id }}</td>
            <td>{{ author.ten }}</td>
            <td>{{ author.gioiTinh ? 'Nam' : 'Nữ' }}</td>
            <td>{{ author.diaChi }}</td>
            <td>{{ author.tuoi }}</td>
            <td>
              <button @click="removeAuthor(author.id)" class="btn btn-danger">Xóa</button>
            </td>
          </tr>
        </tbody>
      </table>
      <router-link to="/tac-gia/add" class="btn btn-primary">Thêm Tác Giả</router-link>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        authors: [
          { id: 1, ten: 'Nguyễn Văn A', gioiTinh: true, diaChi: 'Hà Nội', tuoi: 30 },
          { id: 2, ten: 'Trần Thị B', gioiTinh: false, diaChi: 'Hồ Chí Minh', tuoi: 25 },
        ]
      };
    },
    methods: {
      removeAuthor(id) {
        this.authors = this.authors.filter(author => author.id !== id);
      },
      addAuthor(newAuthor) {
        this.authors.push(newAuthor);
      }
    },
    created() {
      this.$root.$on('author-added', this.addAuthor);
    },
    beforeDestroy() {
      this.$root.$off('author-added', this.addAuthor);
    }
  }
  </script>