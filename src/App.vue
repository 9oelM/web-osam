<template>
  <div id="app">
	  <router-view :style="{ height: '100%', width: '100%' }" ></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang = "sass">
#app, html, body 
	width: 100%
	height: 100%

#app
	&:first-child
		width: 100%
		height: 100%

body, html
	margin: 0 
	padding: 0 

</style>
