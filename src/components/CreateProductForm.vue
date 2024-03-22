<template>
  <el-form :model="form">
    <el-form-item label="Promotion name" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off" />
    </el-form-item>
    <el-form-item label="Zones" :label-width="formLabelWidth">
      <el-select v-model="form.region" placeholder="Please select a zone">
        <el-option label="Zone No.1" value="shanghai" />
        <el-option label="Zone No.2" value="beijing" />
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="handleSubmit">Create</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { reactive, toRefs } from 'vue';

export default {
  setup(props, ctx) {
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
      ctx.emit('complete')
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