<template>
  <DefaultLayout>
    <div id = "schedule-wrapper">
    <NavHelper/>
    <Scheduler/>
    </div>
  </DefaultLayout>
  
</template>

<script>
// @ is an alias to /src
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import Scheduler from "@/components/Schedule/Scheduler.vue";
import NavHelper from "@/components/Schedule/NavHelper.vue";
export default {
  name: "schedule",
  components: {
    DefaultLayout,
    Scheduler,
    NavHelper
  }
};
</script>
<style  scoped>
#schedule-wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow-y: hidden;
}
</style>
