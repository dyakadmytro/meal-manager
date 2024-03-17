<template>
  <div class="flex flex-col items-center justify-center min-h-screen login-view-bg">
    <div class="w-full max-w-xs">
      <log-in-form />
      <p class="text-center text-gray-500 text-xs">
        &copy;2024 Meal Manager. All rights reserved.
      </p>
    </div>
  </div>

</template>

<script>
import LogInForm from "@/components/LogInForm.vue";

export default {
  name: "LogInView",
  components: {LogInForm}
}
</script>

<style scoped>
.login-view-bg{
  background: rgb(231,201,188);
  background: radial-gradient(circle, rgba(231,201,188,0.6153054971988796) 7%, rgba(221,164,202,0.6909357492997199) 49%, rgba(129,150,173,0.6545211834733893) 96%);
}
</style>