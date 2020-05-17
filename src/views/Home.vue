<template>
  <van-row>
    <van-nav-bar
      kui title="首页"
    />
    <DivSep sep-height="20"/>
    <van-grid square :column-num="4" :border="false">
      <van-grid-item to="/cust/home">
        <van-icon class-prefix="iconfont" name="guanfangbanben" size="40" color="#CC0033"/>
        <span class="van-grid-item__text" style="margin-top: 5px">客户</span>
      </van-grid-item>
      <van-grid-item>
        <van-icon class-prefix="iconfont" name="zuzhiqunzu" size="40" color="#3399CC"/>
        <span class="van-grid-item__text" style="margin-top: 5px">员工</span>
      </van-grid-item>
      <van-grid-item>
        <van-icon class-prefix="iconfont" name="shujuwajue" size="40" color="#CC3333"/>
        <span class="van-grid-item__text" style="margin-top: 5px">物料</span>
      </van-grid-item>
      <van-grid-item>
        <van-icon class-prefix="iconfont" name="gongnengdingyi" size="40" color="#FF0033"/>
        <span class="van-grid-item__text" style="margin-top: 5px">入库</span>
      </van-grid-item>
      <van-grid-item>
        <van-icon class-prefix="iconfont" name="tuoguan" size="40" color="#FF9900"/>
        <span class="van-grid-item__text" style="margin-top: 5px">出库</span>
      </van-grid-item>
      <van-grid-item>
        <van-icon class-prefix="iconfont" name="APIshuchu" size="40" color="#66CC00"/>
        <span class="van-grid-item__text" style="margin-top: 5px">出账</span>
      </van-grid-item>
      <van-grid-item>
        <van-icon class-prefix="iconfont" name="APIjieru" size="40" color="#FF6666"/>
        <span class="van-grid-item__text" style="margin-top: 5px">入账</span>
      </van-grid-item>
      <van-grid-item>
        <van-icon class-prefix="iconfont" name="shujukanban" size="40" color="#FF3399"/>
        <span class="van-grid-item__text" style="margin-top: 5px">报表</span>
      </van-grid-item>

    </van-grid>
    <DivSep sep-height="20"/>
  </van-row>
</template>

<script>
import DivSep from '../components/DivSep.vue';

export default {
  name: 'Home',
  components: { DivSep },
  mounted() {
  },
};
</script>
<style scoped>
</style>
