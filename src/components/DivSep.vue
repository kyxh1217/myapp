<template>
  <div :style="divStyle"></div>
</template>

<script>
export default {
  name: 'DivSep',
  props: ['sepHeight'],
  data() {
    return {
      divStyle: {
        height: `${this.sepHeight}px`,
        backgroundColor: '#f7f8fa',
      },
    };
  },
};
</script>

<style scoped>

</style>
