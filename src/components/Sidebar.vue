
<script>
  import Avatar from './Avatar.vue';
  import IconLogout from './icons/IconLogout.vue';
  import IconBook from './icons/IconBook.vue';
  import IconFavourites from './icons/IconFavourites.vue';
  import IconRecipes from './icons/IconRecipes.vue';
  import {defineComponent} from "vue";
  import Menu from "@/components/Menu.vue";

  export default defineComponent({
    components: {Menu}
  })

</script>

<template>
  <div class="sidebar">
<!--    <div class="logo">-->
<!--      <img src="logo.png" alt="">-->
<!--    </div>-->

    <Avatar/>

    <Menu/>
  </div>
</template>

<style scoped>
  .sidebar {
    background-color: var(--white-color);
    height: 100vh;
  }
</style>