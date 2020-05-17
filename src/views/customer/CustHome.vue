<template>
  <van-row>
    <van-row id="div1">
      <van-nav-bar title="客户" left-arrow @click-left="onClickLeft">
        <template #right>
          <van-icon name="add-o" size="18"/>
        </template>
      </van-nav-bar>
      <DivSep sep-height="20"/>
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
      />
      <DivSep sep-height="10"/>
    </van-row>
    <van-row id="div2" style="overflow-y: auto">
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <van-cell v-for="item in list" :key="item" :title="'姓名'+item" value="1805252xxxx" size="large" label="描述信息"
                    is-link title-class="text-left"/>
        </van-list>
      </van-pull-refresh>
    </van-row>
  </van-row>
</template>

<script>
import DivSep from '../../components/DivSep.vue';

export default {
  name: 'CustHome',
  components: { DivSep },
  data() {
    return {
      value: '',
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
    };
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
        }

        for (let i = 0; i < 10; i += 1) {
          this.list.push(this.list.length + 1);
        }
        this.loading = false;

        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
    onClickLeft() {
      this.$router.push('/app/home');
    },
    onSearch() {
    },
    onCancel() {
    },
  },
  mounted() {
    const div1 = document.getElementById('div1');
    const div1Height = window.parseInt(window.getComputedStyle(div1).height || 10);
    const div2 = document.getElementById('div2');
    div2.style.height = `${window.screen.availHeight - div1Height - 120}px`;
  },
};
</script>

<style scoped>

</style>
