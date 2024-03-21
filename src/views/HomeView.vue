<template>
  <div class="container mx-auto py-2 h-full bg-slate-200">
    <ListContainer :items="listData" class="w-1/4"/>
  </div>
</template>

<script>
import { markRaw } from 'vue';
import ListContainer from "@/components/ListContainer.vue";
import BadgedListItem from "@/components/ui/BadgedListItem.vue";

export default {
  name: "HomeView",
  components: {ListContainer},
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