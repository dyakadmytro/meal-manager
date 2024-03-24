<template>
  <div>
  <div style="margin-bottom: 2em">
    <el-page-header @back="onBack">
      <template v-if="useBreadcrumb" #breadcrumb>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: './page-header.html' }">
            homepage
          </el-breadcrumb-item>
          <el-breadcrumb-item
          ><a href="./page-header.html">route 1</a></el-breadcrumb-item>
          <el-breadcrumb-item>route 2</el-breadcrumb-item>
        </el-breadcrumb>
      </template>
      <template #content>
        <div class="flex items-center">
          <el-avatar
              class="mr-3"
              :size="32"
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"/>
          <span class="text-large font-600 mr-3"> Products </span>
          <span
              class="text-sm mr-2"
              style="color: var(--el-text-color-regular)">
            actions list
          </span>
          <el-tag>Full</el-tag>
        </div>
      </template>
      <template #extra>
        <div class="flex items-center">
          <el-button type="success" class="ml-2" @click="openModal" >Add</el-button>
        </div>
      </template>

<!--      <el-descriptions :column="3" size="small" class="mt-4">-->
<!--        <el-descriptions-item label="Username"-->
<!--        >kooriookami</el-descriptions-item-->
<!--        >-->
<!--        <el-descriptions-item label="Telephone"-->
<!--        >18100000000</el-descriptions-item-->
<!--        >-->
<!--        <el-descriptions-item label="Place">Suzhou</el-descriptions-item>-->
<!--        <el-descriptions-item label="Remarks">-->
<!--          <el-tag size="small">School</el-tag>-->
<!--        </el-descriptions-item>-->
<!--        <el-descriptions-item label="Address"-->
<!--        >No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province-->
<!--        </el-descriptions-item>-->
<!--      </el-descriptions>-->
    </el-page-header>
  </div>
  <el-scrollbar height="400px">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="Consistency" name="1">
        <el-descriptions title="Customized style list" :column="3" border>
          <el-descriptions-item
              label="Username"
              label-align="right"
              align="center"
              label-class-name="my-label"
              class-name="my-content"
              width="150px"
          >kooriookami</el-descriptions-item
          >
          <el-descriptions-item label="Telephone" label-align="right" align="center"
          >18100000000</el-descriptions-item
          >
          <el-descriptions-item label="Place" label-align="right" align="center"
          >Suzhou</el-descriptions-item
          >
          <el-descriptions-item label="Remarks" label-align="right" align="center">
            <el-tag size="small">School</el-tag>
          </el-descriptions-item>
          <el-descriptions-item label="Address" label-align="right" align="center"
          >No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu
            Province</el-descriptions-item
          >
        </el-descriptions>
      </el-collapse-item>
      <el-collapse-item title="Feedback" name="2">
        <div>
          Operation feedback: enable the users to clearly perceive their
          operations by style updates and interactive effects;
        </div>
        <div>
          Visual feedback: reflect current state by updating or rearranging
          elements of the page.
        </div>
      </el-collapse-item>
      <el-collapse-item title="Efficiency" name="3">
        <div>
          Simplify the process: keep operating process simple and intuitive;
        </div>
        <div>
          Definite and clear: enunciate your intentions clearly so that the
          users can quickly understand and make decisions;
        </div>
        <div>
          Easy to identify: the interface should be straightforward, which helps
          the users to identify and frees them from memorizing and recalling.
        </div>
      </el-collapse-item>
      <el-collapse-item title="Controllability" name="4">
        <el-card :body-style="{ padding: '0px' }">
          <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
          />
          <div style="padding: 14px">
            <span>Yummy hamburger</span>
            <div class="bottom">
              <time class="time">jhgjhgjhhg</time>
              <el-button text class="button">Operating</el-button>
            </div>
          </div>
        </el-card>
      </el-collapse-item>
    </el-collapse>
  </el-scrollbar>
  <el-dialog v-model="modal.active" title="Create product" width="700">
    <ProductForm @complete="closeModal"/>
<!--    <template #footer>-->
<!--      <div class="dialog-footer">-->
<!--        <el-button @click="dialogFormVisible = false">Cancel</el-button>-->
<!--        <el-button type="primary" @click="dialogFormVisible = false">-->
<!--          Confirm-->
<!--        </el-button>-->
<!--      </div>-->
<!--    </template>-->
  </el-dialog>
  </div>
</template>

<script lang="ts">
import ProductForm from "@/components/ProductForm.vue";
import {reactive} from "vue";

export default {
  name: 'ProductList',
  components: {ProductForm},
  props: {
    items: Array,
    useBreadcrumb: false
  },
  setup(props) {
    const widget = reactive({
      modal: {
        active: false,
      },
    })

    function openModal() {
      widget.modal.active = true
    }
    function closeModal() {
      widget.modal.active = false
    }

    return {
      ...widget,
      openModal,
      closeModal
    }
  }
};
</script>

<style scoped>

</style>
