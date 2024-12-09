<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Quản Lý Tác Giả</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
            <router-link to="/tac-gia" class="nav-link">Danh Sách Tác Giả</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/tac-gia/add" class="nav-link">Thêm Tác Giả</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.navbar {
  margin-bottom: 20px;
}
</style>