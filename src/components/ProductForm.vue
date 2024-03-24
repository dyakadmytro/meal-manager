<template>
  <el-form :model="form">
    <el-form-item label="Name" >
      <el-input v-model="formData.name" />
    </el-form-item>
    <el-form-item :label="form.tags.label">
      <el-select
          v-model="formData.tags"
          multiple
          filterable
          allow-create
          default-first-option
          :reserve-keyword="false"
          placeholder="Choose tags for your article"
      >
        <el-option
            v-for="option in form.tags.options"
            :key="option.value"
            :label="option.name"
            :value="option.value"
        />
      </el-select>
    </el-form-item>
    <div class="form-inputs-grid">
      <el-form-item :label="form.calories.label" label-width="100">
        <el-input-number class="form-input-number" v-model="formData.calories" :min="1" :max="1000" :controls="false"/>
      </el-form-item>
      <el-form-item label="Avg size" >
        <el-input-number v-model="formData.averageSize" :min="1" :max="1000" autocomplete="off" />
      </el-form-item>
      <el-form-item :label="form.meas.label">
        <el-select
            v-model="formData.sizeMeas"
            :reserve-keyword="false"
            placeholder="g"
            style="width: 5em"
        >
          <el-option
              v-for="option in form.meas.options"
              :key="option.value"
              :label="option.name"
              :value="option.value"
          />
        </el-select>
      </el-form-item>
    </div>
    <div class="form-inputs-grid">
      <el-form-item :label="form.protein.label" label-width="100">
        <el-input-number class="form-input-number" v-model="formData.protein" :min="0" :max="1000" :controls="false" />
      </el-form-item>
      <el-form-item :label="form.carbohydrates.label" label-width="100">
        <el-input-number class="form-input-number" v-model="formData.carbohydrates" :min="0" :max="1000" :controls="false" />
      </el-form-item>
      <el-form-item :label="form.fat.label" label-width="100">
        <el-input-number class="form-input-number" v-model="formData.fat" :min="0" :max="1000" :controls="false" />
      </el-form-item>
      <el-form-item :label="form.sugars.label" label-width="100">
        <el-input-number class="form-input-number" v-model="formData.sugars" :min="0" :max="1000" :controls="false" />
      </el-form-item>
      <el-form-item :label="form.cholesterol.label" label-width="100">
        <el-input-number class="form-input-number" v-model="formData.cholesterol" :min="0" :max="1000" :controls="false" />
      </el-form-item>
      <el-form-item :label="form.calcium.label" label-width="100">
        <el-input-number class="form-input-number" v-model="formData.calcium" :min="0" :max="1000" :controls="false" />
      </el-form-item>
    </div>
    <el-form-item label="Description" >
      <el-input v-model="formData.description" autocomplete="off" type="textarea"/>
    </el-form-item>
    <div class="form-footer">
      <el-form-item>
        <el-button type="primary" @click="handleSubmit">Create</el-button>
      </el-form-item>
    </div>
  </el-form>
</template>

<script lang="ts">
import {reactive, toRef, PropType} from 'vue';
import {Product} from '@/types'

export default {
  name: 'ProductForm',
  props: {
    product: {
      type: Object as PropType<Product>,
      required: false
    }
  },
  setup(props, ctx) {
    const formData = reactive({
      name: '',
      description: '',
      tags: [],
      averageSize: 0,
      sizeMeas: '',
      calories: 0,
      protein: 0,
      carbohydrates: 0,
      fat: 0,
      sugars: 0,
      cholesterol: 0,
      calcium: 0,
    });

    if (props.product) {
      Object.keys(props.product).forEach((item) => formData[item] = props.product?.[item])
    }

    const form = {
      tags: {
        label: 'Tags',
        options: [
          {
            name: 'milk',
            value: 1
          },
          {
            name: 'bread',
            value: 2
          },
          {
            name: 'floor',
            value: 3
          },
          {
            name: 'meat',
            value: 4
          }
        ]
      },
      meas: {
        label: 'Meas',
        options: [
          {
            name: 'g',
            value: 'g'
          },
          {
            name: 'kg',
            value: 'kg'
          },
          {
            name: 'lit',
            value: 'lit'
          }
        ]
      },
      calories: {
        label: 'calories',
      },
      protein: {
        label: 'Protein (g)'
      },
      carbohydrates: {
        label: 'Carbons (g)'
      },
      fat: {
        label: 'Total fat (g)',
      },
      sugars: {
        label: 'sugars (g)'
      },
      cholesterol: {
        label: 'Trans fat (mg)'
      },
      calcium: {
        label: 'Calcium (%)'
      }
    };

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
      formData,
      errors,
      handleSubmit,
    };
  },
};
</script>

<style scoped>
.form-inputs-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.form-footer {
  display: flex;
  flex-direction: row-reverse;
}
.form-input-number {
  width: 5em;
}
</style>