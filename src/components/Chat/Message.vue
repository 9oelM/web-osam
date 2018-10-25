<template>
    <div>
        <div v-bind:class="{'message-inner-container-not-me': message.notMe,  'message-inner-container': !message.notMe}">
            <p v-bind:class="{'sender-not-me': message.notMe,  'sender': !message.notMe}">
                {{message.sender}}
            </p>
                <el-card class = "message-content">
                    {{message.content}}
                </el-card>
        </div>
    </div>
</template>
<script>
export default {
  name: "Message",
  props: ["message"]
};
</script>
<style lang = "sass">
    .message-inner-container-not-me
        max-width: 300px
        margin-left: auto
        margin-right: 30px
    .message-inner-container
        max-width: 300px
        margin-right: auto
        margin-left: 30px
        .message-content
            background-color: #dbedff
            border-color: #dbedff
    .sender-not-me
        font-weight: bold
        text-align: right
    .sender
        font-weight: bold
        text-align: left
</style>
