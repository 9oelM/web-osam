<template>
  <el-menu default-active="0" class="el-menu-demo" mode="horizontal" @select="handleSelect" id="top-nav">
    <el-menu-item v-for="item in menu" v-bind:index="`${item.i}`" v-bind:key="`${item.id}`" class="text item" v-on:click="()=>changeRoute(item.route)">
      {{item.title}}
    </el-menu-item>
    <h2 class = "mili-work" v-if="!isCollapse">Mili&Work</h2>
    <el-popover class="me" placement="top" width="160" v-model="visible">
      <div style="display: flex">
        <el-button type="primary" plain size="mini" @click="togglePopover" class="popover-button">내 정보</el-button>
        <el-button type="primary" size="mini" @click="logout" class="popover-button">로그아웃</el-button>
      </div>
      <el-button slot="reference">{{username}}</el-button>
    </el-popover>
  </el-menu>
</template>

<script>
import shortid from "shortid";

export default {
  computed: {
    username: function() {
      return this.$store.state.username;
    },
    isCollapse: function(){
      return this.$store.state.isCollapse;
    }
  },
  data() {
    return {
      menu: [
        {
          title: "대시보드",
          i: 1,
          route: "/dashboard",
          id: shortid.generate()
        },
        {
          title: "일정",
          i: 2,
          route: "/schedule",
          id: shortid.generate()
        },
        {
          title: "메신저",
          i: 3,
          route: `/messenger/${this.$store.state.chat.rooms[0].id}`,
          id: shortid.generate()
        },
        {
          title: "노트",
          i: 4,
          route: "/notes",
          id: shortid.generate()
        }
      ],
      activeIndex: "1",
      visible: false
    };
  },

  methods: {
    handleSelect(key) {
      this.activeIndex = key.toString();
    },
    changeRoute(route) {
      this.$router.push({
        path: route
      });
    },
    logout() {
      this.togglePopover();
      this.$router.push({
        path: "/login"
      });
    },
    togglePopover() {
      this.visible = false;
    }
  }
};
</script>
<style lang="sass">
  #top-nav
    display: flex
    position: fixed
    width: 100%
  .me
    margin-left: auto
    padding-right: 10px
    align-self: center
  .popover-button
    width: 100%
  .mili-work
    margin: auto
    color: #7b7b7b
    font-weight: 300
</style>
