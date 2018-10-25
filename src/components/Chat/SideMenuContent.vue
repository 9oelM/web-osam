<template>
    <div class = "menu-item-container">
      <el-menu-item class = "room" v-for="(room, index) in chat.rooms" v-bind:index="`${index}`" v-bind:key="`${room.id}`" v-on:click="()=>changeRoute(room.id)">
        <div>
        <h3 class = "room-name">{{room.name.substring(0, 15)}}</h3>
        <span style = "display: block"></span>
        <p class = "room-participants">{{showParticipants(room.participants)}}</p>
        </div>
      </el-menu-item >
      </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "SideMenuContainer",
  computed: {
    sender: function() {
      return this.$store.state.username;
    },
    chat: function() {
      // 상사 홍길동에게만 모든 채팅방을 보여주고, 나머지 사용자들에게는 첫번째 채팅방만 보여주기
      if (this.sender == "상사 홍길동") {
        return this.$store.state.chat;
      } else {
        const firstRoom = this.$store.state.chat.rooms[0];
        const selectedChat = {
          rooms: [{ ...firstRoom }]
        };
        return selectedChat;
      }
    }
  },
  methods: {
    changeRoute(route) {
      this.$router.push({ path: "/messenger/" + route });
    },
    showParticipants(participants) {
      let str = "";
      participants.forEach(elem => (str += elem + ", "));
      let cut = 20;
      return str.length > cut ? `${str.slice(0, cut)}...` : str;
    }
  }
};
</script>
<style lang = "sass">
  .room-name, .room-participants
    margin: 0 
    display: block;
  .room
    height: auto !important
    border-bottom: 1px solid #dcdfe6
  .menu-item-container
      flex-grow: 1
</style>
