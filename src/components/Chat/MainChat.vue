<template>
    <div id="main-chat">
        <el-menu mode="horizontal" class = "chat-info">
          <h3 class = "chat-room-name">{{chatRoomName}}</h3>
          <p>{{participants}}</p>
        </el-menu>
        <div id = "message-logs">
            <Message v-for="(msg, index) in messages" :message="msg" :key="index"></Message>
        </div>
        <el-form @submit.native.prevent="onSubmit" class="message-form" ref="form" label-width="10px" v-model="currentMessage">
            <el-form-item class="message-form-item">
                <el-input v-model="currentMessage" class="message-input" 
                v-on:keyup.enter.native="onSubmit"
                placeholder="메시지를 입력하세요"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit" class="message-button">보내기</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import Message from "@/components/Chat/Message.vue";
import shortid from "shortid";
import io from "socket.io-client";
import addr from "@/dev";
const socket = io.connect(addr.back);

export default {
  name: "MainChat",

  components: {
    Message
  },
  computed: {
    sender: function() {
      return this.$store.state.username;
    },
    roomId: function() {
      return this.$route.params.id;
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
    },
    currentRoom: function() {
      return this.chat.rooms.find(elem => elem.id == this.roomId);
    },
    messages: function() {
      return this.currentRoom.messages;
    },
    chatRoomName: function() {
      return this.currentRoom.name;
    },
    participants: function() {
      return `${this.currentRoom.participants[0]} 등 ${
        this.currentRoom.participants.length
      } 명`;
    }
  },
  data: function() {
    return {
      started: false,
      mounted: false,
      currentMessage: ""
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      if (this.currentMessage.length > 0) {
        let self = this;

        const msg = {
          sender: this.$store.state.username,
          content: this.currentMessage,
          notMe: false,
          id: shortid.generate()
        };
        socket.emit("chat message", msg);
        if (!this.started) {
          // register only for once
          socket.on("chat message", function(m) {
            self.messages.push({
              sender: m.sender,
              content: m.content,
              notMe: self.$store.state.username != m.sender,
              id: shortid.generate()
            });
          });
          this.started = true;
        }
      }
      this.currentMessage = "";
      return false;
    }
  }
};
</script>
<style lang = "sass" scoped>
    #main-chat 
        width: 100% 
        height: 100% 
        display: flex 
        flex-direction: column
    .message-form 
        align-self: flex-end 
        width: 100% 
        display: flex 
        margin-top: auto !important
        margin-bottom: 20px !important
    .message-input, .message-form-item 
        width: 100% 
    .message-button 
        margin: 0
    #message-logs
        overflow-y: scroll
        height: 100%
        padding: 10px 0 10px 0
    .chat-room-name
      font-weight: lighter
    .chat-info
      background-color: #409eff
      padding-left: 10px
      color: white
</style>
