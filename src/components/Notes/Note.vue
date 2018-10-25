<template>
    <div id = "editSection"></div>
</template>
<script>
require("codemirror/lib/codemirror.css"); // codemirror
require("tui-editor/dist/tui-editor.css"); // editor ui
require("tui-editor/dist/tui-editor-contents.css"); // editor content
require("highlight.js/styles/github.css"); // code block highlight
const Editor = require("tui-editor");
let editor;

export default {
  name: "Note",
  mounted() {
    let self = this;
    editor = new Editor({
      el: document.querySelector("#editSection"),
      initialEditType: "wysiwyg",
      previewStyle: "vertical",
      height: "100%",
      initialValue: this.notes[this.activeNoteIndex].content,
      events: {
        change: () => this.onChange(editor)
      }
    });
  },
  computed: {
    notes: function() {
      return this.$store.state.notes;
    },
    activeNoteIndex: function() {
      return this.$store.state.activeNoteIndex;
    }
  },
  methods: {
    onChange: function(editor) {
      this.$store.commit("editNote", editor.getHtml());
    }
  },
  watch: {
    activeNoteIndex: function(index) {
      editor.setHtml(this.notes[this.activeNoteIndex].content);
    }
  }
};
</script>
<style lang = "sass">
  #editSection
    width: 100%
    height: 100%
</style>
