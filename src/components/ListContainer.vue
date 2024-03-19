<template>
  <div class="relative flex flex-col text-gray-700 bg-white shadow-md w-full rounded-xl bg-clip-border">
    <nav class="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
      <div v-for="item in items" >
        <component :is="item.component" :item="item.props" :key="item.key"/>
      </div>

    </nav>
  </div>
</template>

<script>
export default {
  name: 'ListContainer',
  props: {
    items: Array
  }
};
</script>

<style scoped>

</style>
