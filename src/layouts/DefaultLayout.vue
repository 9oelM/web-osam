<template>
  <div>
		<TopNav/>
		<div class = "wrapper">
      <div class = "inner-wrapper">
		    <slot/>
		  </div>
		</div>
		</div>
</template>
<script>
import TopNav from "../components/TopNav/TopNav.vue";
import ResizeSensor from "css-element-queries/src/ResizeSensor"
export default {
  name: "DefaultLayout",
  components: {
    TopNav
  },
  data: function(){
    return {
      mounted: false
    }
  },
  computed: {
    store: function(){
      return this.$store
    }
  },
  mounted(){
    const parentWrapper = document.getElementsByClassName("inner-wrapper")[0]
    let self = this
    new ResizeSensor(parentWrapper, function() {
      console.log('Changed to ' + parentWrapper.clientWidth);
      // 반응형 메뉴. 웹페이지의 가로 길이가 줄어들면 자동으로 collapse 하게 설정함.
      if(Number(parentWrapper.clientWidth) < 810){
        self.store.commit('handleCollapse', true)
      }
      else
        self.store.commit('handleCollapse', false)
    });
  }
};
</script>
<style>
#id {
  height: 100%;
  width: 100%;
}
.wrapper {
  height: 100%;
  width: 100%;
}
.inner-wrapper {
  padding-top: 61px;
  display: flex;
  height: calc(100% - 60px);
  overflow-y: hidden;
  position: static !important;
}
</style>
