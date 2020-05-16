import AppConstants from './AppConstants';

export default {
  checkAppEnv: (_this) => {
    const ua = window.navigator.userAgent;
    if (!ua || ua.indexOf(AppConstants.APP_ENV) === -1) {
      _this.$toast({
        message: '请在app中打开该页面',
        duration: 5000,
      });
      /* _this.$router.push('/openInApp')
         .then((r) => console.log(r)); */
    }
  },
};
