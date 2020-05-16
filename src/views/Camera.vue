<template>
  <div style="padding: 0 10px">
    <van-button type="info" size="large" @click="qrcodeScan">primary</van-button>
  </div>
</template>

<script>
import AppConstants from '../constant/AppConstants';

let KuiJSBridge;
export default {
  name: 'Camera',
  methods: {
    showQrcode(qrcode) {
      this.$toast({
        message: `扫码结果:${qrcode}`,
        duration: 5000,
      });
    },
    qrcodeScan() {
      KuiJSBridge.qrcodeScan();
    },
  },
  mounted() {
    this.KuiUtils.checkAppEnv(this);
    KuiJSBridge = window[AppConstants.JS_BRIDGE];
    window.showQrcode = this.showQrcode;
  },
};
</script>

<style scoped>

</style>
