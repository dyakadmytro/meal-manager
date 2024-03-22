<template>
  <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <ProductList :items="listData" />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { markRaw } from 'vue';
import ProductList from "@/components/ProductList.vue";
import BadgedListItem from "@/components/ui/BadgedListItem.vue";

export default {
  name: "HomeView",
  components: {ProductList},
  data() {
    return {
      listData: [
        {
          component: markRaw(BadgedListItem),
          key: 'k1',
          props: {
            src: 'https://docs.material-tailwind.com/img/face-1.jpg',
            name: 'Tania Andrew',
            position: 'Software Engineer @ Material Tailwind',
          }
        },{
          component: markRaw(BadgedListItem),
          key: 'k2',
          props: {
            src: 'https://docs.material-tailwind.com/img/face-1.jpg',
            name: 'Tanаываывia Andrew',
            position: 'Software Enвыавgineer @ Material Tailwind',
          }
        },{
          component: markRaw(BadgedListItem),
          key: 'k3',
          props: {
            src: 'https://docs.material-tailwind.com/img/face-1.jpg',
            name: 'Tania Andrew',
            position: 'Software Enвыаывgineer @ Material Tailwind',
          }
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>