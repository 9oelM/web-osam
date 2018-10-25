<template>
    <div class = "menu-item-container">
      <el-menu-item index = "0" class = "menu-item is-active" @click="makeNote" >
           <div><i class="el-icon-circle-plus-outline"></i><span style = "color: #0881ff !important">새로운 메모 추가하기</span></div>
      </el-menu-item >
      <el-menu-item v-for="(note, index) in notes" :key="`note-${index}`" :index = "new String(index+1)" class = "menu-item" @click="selectNoteIndexAndChangeNoteView(index)">
        {{stripTags(note.content).length > 15 ? stripTags(note.content).substring(0, 15)  + "..." : stripTags(note.content)}}
      </el-menu-item>
    </div>
</template>
<script>
export default {
  name: "SideMenuContent",
  props: ["cb"],
  computed: {
    notes: function() {
      return this.$store.state.notes;
    }
  },
  methods: {
    selectNoteIndexAndChangeNoteView: function(index) {
      this.$store.commit("selectNoteIndex", index);
      this.$emit("note-change");
    },
    stripTags: function(str) {
      if (str === null || str === "") return str;
      else str = str.toString();

      return str.replace(/<[^>]*>/g, "");
    },
    makeNote: function() {
      let self = this;
      return self.$store.commit("makeNote");
    }
  }
};
</script>
<style lang = "sass">
  .menu-item
    border-bottom: 1px solid #dcdfe6
</style>
