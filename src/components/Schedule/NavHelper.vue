<template>
    <el-menu mode="horizontal" id = "cal-menu">
      <el-button @click="calendar.changeView('month', true)">이번 달</el-button>
      <el-button @click="calendar.changeView('week', true)">이번 주</el-button>
      <el-button @click="calendar.changeView('day', true)">오늘</el-button>
      <el-button type="primary" circle icon = "el-icon-arrow-left" @click="calendar.prev()"></el-button>
      <el-button type="primary" circle icon = "el-icon-arrow-right" @click="calendar.next()"></el-button>
    </el-menu>
</template>
<script>
export default {
  name: "NavHelper",
  computed: {
    calendar: function() {
      return this.$store.state.calendar;
    },
  },
};
</script>
<style lang = "sass" scoped>
  .inner-wrapper
    flex-direction: column
  #cal-menu 
    padding: 10px
</style>
