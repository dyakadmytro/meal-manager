<template>
  <el-card class="box-card login-card">
    <template #header>
      <div class="card-header">
        <span>Welcome to MealManager</span>
      </div>
    </template>
    <el-form
        label-position="right"
        label-width="80px"
        :model="loginForm"
        style="max-width: 460px"
    >
      <el-form-item label="Login">
        <el-input v-model="loginForm.login" />
      </el-form-item>
      <el-form-item label="Password">
        <el-input v-model="loginForm.password" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">Login</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>


<script>
export default {
  name: "LogInForm",
  data() {
    return {
      loginForm: {
        login: '',
        password: ''
      }
    }
  },
  methods: {
    submitForm(data) {
      console.log(data)
    }
  }
}
</script>

<style scoped>
.login-card {
  position: relative;
  top: 10em;
  margin: auto;
  width: 25em;
}
</style>