<template>
  <page-header />
  <router-view/>
  <page-footer />
</template>
<script>
import PageFooter from './components/Footer.vue'
import PageHeader from './components/Header.vue'
export default {
  components: { PageHeader, PageFooter },
}
</script>

<style lang="scss">
*,
*:after,
*:before,
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
</style>
