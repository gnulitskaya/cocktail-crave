<template>
  <header class="header">
    <Search/>
    <Button>Go to premium</Button>
  </header>
</template>

<script>
import Search from "@/components/UI/Search.vue";
import Button from "@/components/UI/Button.vue";

export default {
  components: {Button, Search},
  setup() {


    return {}
  }
}
</script>

<style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }
</style>