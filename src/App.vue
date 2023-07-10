<template>
  <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
          <component :is="Component" />
      </transition>
  </router-view>
</template>

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
