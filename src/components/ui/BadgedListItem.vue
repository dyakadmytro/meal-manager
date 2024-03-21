<template>
  <div>
    <div :class="[{'hidden': !isActive}, 'w-full bg-amber-800 text-gray-700 overflow-hidden']">
      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
      terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
      labore wes anderson cred nesciunt sapiente ea proident. Ad vegan
      excepteur butcher vice lomo. Leggings occaecat craft beer
      farm-to-table, raw denim aesthetic synth nesciunt you probably haven't
      heard of them accusamus labore sustainable VHS. 3 wolf moon officia
      aute, non cupidatat skateboard dolor brunch. Food truck quinoa
      nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a
      bird on it squid single-origin coffee nulla assumenda shoreditch et.
    </div>
    <div role="button"
         @click="toggle"
         class="relative flex items-center w-full p-3 leading-tight transition-all c outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
      <div class="grid mr-4 place-items-center">
        <img :src="item.src"
             class="relative inline-block h-12 w-12 !rounded-full object-cover object-center" />
      </div>
      <div>
        <h6 class="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
          {{ item.name }}
        </h6>
        <p class="block font-sans text-sm antialiased font-normal leading-normal text-gray-700">
          {{ item.position }}
        </p>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "BadgedListItem",
  props: {
    item: Object
  },
  data() {
    return {
      isActive: false
    }
  },
  methods: {
     toggle() {
       this.isActive = !this.isActive
     },
  }
}
</script>

<style scoped>

</style>