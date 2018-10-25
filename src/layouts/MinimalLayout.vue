<template>
  <div>
	<div class = "wrapper">
      <div class = "inner-wrapper no-pad full-height" id = "login-panel">
		<slot/>
	</div>
	</div>
</div>
</template>
<script>
export default {
  name: "MinimalLayout"
};
</script>
<style lang = "sass">
    .no-pad
        padding: 0
    .full-height
        height: 100%
    #login-panel  
        flex: 1
        justify-content: center
        align-items: center
</style>
