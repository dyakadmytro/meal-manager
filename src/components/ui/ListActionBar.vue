<template>
<div class="w-full flex flex-row h-16 rounded-lg border-b-4">
  <div class="flex items-center w-1/3 h-full text-2xl px-10">
    <h4>{{title}}</h4>
  </div>
  <div class="flex flex-row-reverse w-2/3 h-full items-center px-6">
    <button @click="openModal" type="button" class=" h-10 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-teal-500 text-white hover:bg-teal-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
      Create
    </button>
  </div>
</div>
</template>

<script>
import CreateProductForm from "@/components/ui/CreateProductForm.vue";

export default {
  name: "ListActionBar",
  props: {
    title: String,
  },
  data() {
    return {
      modalContent: {
        component: CreateProductForm,
        data: {}
      }

    }
  },
  methods: {
    openModal() {
      this.$refs.modal.open();
    }
  },
}
</script>

<style scoped>

</style>