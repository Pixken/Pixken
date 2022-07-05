<template>
  <div class="app">
    <div class="router-view">
      <router-view></router-view>
    </div>
    <FooterGuide></FooterGuide>
  </div>
</template>

<script>
import FooterGuide from '@/components/FooterGuide'
export default {
  name: 'App',
  components: {
    FooterGuide
  }
}
</script>

<style>
.app {
  width: 100%;
  height: 100%;
}
</style>
