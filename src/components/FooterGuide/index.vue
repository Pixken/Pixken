<template>
  <div class="foot-container">
    <ul>
      <li
        class="guide-item"
        :class="{ on: $route.path == '/msite' }"
        @click="goTo('/msite')"
      >
        外卖
      </li>
      <li
        class="guide-item"
        :class="{ on: $route.path == '/search' }"
        @click="goTo('/search')"
      >
        搜索
      </li>
      <li
        class="guide-item"
        :class="{ on: $route.path == '/order' }"
        @click="goTo('/order')"
      >
        订单
      </li>
      <li
        class="guide-item"
        :class="{ on: $route.path == '/profile' }"
        @click="goTo('/profile')"
      >
        我的
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FootetGuide',
  methods: {
    goTo(path) {
      this.$router.replace(path)
    }
  }
}
</script>

<style scoped>
.foot-container {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
}

ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #333;
  height: 50px;
  padding: 0 10px;
}
li {
  width: 80px;
  height: 100%;
  text-align: center;
  line-height: 50px;
}
.on {
  background-color: yellow;
}
</style>
