<template>
  <div style="background-color: #dddddd">
    <van-nav-bar
      kui title="首页"
    />
    <DivSep sep-height="20"/>
    <van-grid square>
      <van-grid-item v-for="value in 8" :key="value" icon="photo-o" text="文字"/>
    </van-grid>
  </div>
</template>

<script>
import DivSep from '../components/DivSep.vue';

export default {
  name: 'Home',
  components: { DivSep },
  mounted() {
    const div1 = document.querySelector('div[kui]');
    div1.style.backgroundColor = '#1247F1';
    const title1 = div1.querySelector('.van-nav-bar__title');
    title1.style.color = '#ffffff';
  },
};
</script>
<style scoped>
</style>
