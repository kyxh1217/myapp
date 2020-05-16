<template>
  <div style="position: relative;margin-top: 15%">
    <div style="padding-bottom: 2rem">
      <img :src="heartImg" style="width: 60%" alt="heartImg">
    </div>
    <van-form style="padding: 0 10px">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        label-class="text-left"
        placeholder="请输入用户名"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        label-class="text-left"
        placeholder="请输入密码"
      />
      <div style="margin: 2rem 1rem ;">
        <van-button round block type="info" native-type="button" @click="onSubmit">
          登录
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import heartImg from '@/assets/watermelon.png';

export default {
  name: 'Login.vue',
  data() {
    return {
      username: '',
      password: '',
      heartImg,
    };
  },
  methods: {
    onSubmit() {
      this.$request.post('/rest/login', { username: this.username })
        .catch(console.log);
    },
  },
};
</script>

<style scoped>
.van-cell {
  font-size: 16px;
  margin-bottom: 1rem;
}

.van-cell:not(:last-child)::after {
  border-bottom: 1px solid #999999;
  left: 0;
}
</style>
