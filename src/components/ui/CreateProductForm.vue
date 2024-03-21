<template>
  <form @submit.prevent="handleSubmit" class="max-w-lg mx-auto my-8">
    <div class="mb-4">
      <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Name</label>
      <input type="text" id="name" v-model="form.name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
      <span v-if="errors.name" class="text-red-500 text-xs italic">{{ errors.name }}</span>
    </div>

    <div class="mb-4">
      <label for="notes" class="block text-gray-700 text-sm font-bold mb-2">Notes</label>
      <textarea id="notes" v-model="form.notes" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
      <span v-if="errors.notes" class="text-red-500 text-xs italic">{{ errors.notes }}</span>
    </div>

    <div class="mb-4">
      <label for="tags" class="block text-gray-700 text-sm font-bold mb-2">Tags</label>
      <select id="tags" v-model="form.tags" class="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
        <option disabled value="">Please select one</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
    </div>

    <div class="flex mb-4 items-center">
      <div class="w-1/2 mr-2">
        <label for="averageSize" class="block text-gray-700 text-sm font-bold mb-2">Average Size</label>
        <input type="number" id="averageSize" v-model.number="form.averageSize" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
      </div>
      <div class="w-1/2 ml-2">
        <label for="measurements" class="block text-gray-700 text-sm font-bold mb-2">Measurements</label>
        <select v-model="form.measurements" class="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
          <option value="g">g</option>
          <option value="kg">kg</option>
        </select>
      </div>
    </div>

    <div class="mb-4">
      <label for="averageKkal" class="block text-gray-700 text-sm font-bold mb-2">Average Kkal</label>
      <input type="number" id="averageKkal" v-model.number="form.averageKkal" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
    </div>

    <div class="flex items-center justify-between">
      <button type="submit" class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Create Product
      </button>
    </div>
  </form>
</template>

<script>
import { reactive, toRefs } from 'vue';

export default {
  setup() {
    const form = reactive({
      name: '',
      notes: '',
      tags: '',
      averageSize: 0,
      measurements: 'g',
      averageKkal: 0,
    });

    const errors = reactive({
      name: null,
      notes: null,
    });

    const validateForm = () => {
      let valid = true;
      if (!form.name || form.name.length < 2 || form.name.length > 64) {
        errors.name = 'Name must be between 2 and 64 characters.';
        valid = false;
      } else {
        errors.name = null;
      }

      if (form.notes.length > 255) {
        errors.notes = 'Notes must not exceed 255 characters.';
        valid = false;
      } else {
        errors.notes = null;
      }

      return valid;
    };

    const handleSubmit = () => {
      if (validateForm()) {
        console.log('Form data:', form);
      }
    };
    return {
      form,
      errors,
      handleSubmit,
    };
  },
};
</script>

<style scoped>

</style>