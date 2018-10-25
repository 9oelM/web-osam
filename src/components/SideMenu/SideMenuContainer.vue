<template>
    <el-menu default-active="0"  class = "side-menu-container" v-bind:class="{'collapsed': isCollapse, 'toggle': toggle}">
        <slot v-if="!isCollapse || toggle"/>

        {{/*collapse 되어있고 아직 버튼 안눌렀을때*/}}
        <el-button type="info" icon = "el-icon-d-arrow-right" v-if="isCollapse && !toggle " @click="handleToggle">
        </el-button>
        <el-button type="info" icon = "el-icon-d-arrow-left" v-if="toggle" @click="handleToggle">
            
        </el-button>
    </el-menu>
</template>
<script>
export default {
  name: "SideMenuContainer",
  computed: {
      isCollapse: function(){
          return this.$store.state.isCollapse
      },

  },
  data: function(){
      return {
          toggle: false
      }
  },
  methods: {
      handleToggle: function(){
          this.toggle = !this.toggle
      }
  }
};
</script>
<style lang = "sass">
    .side-menu-container
        min-width: 350px
    .collapsed
        min-width: 56px
        width: 56px
        display: flex
    .toggle
        min-width: 350px
        width: 350px

</style>
