<template>
  <DefaultLayout>
    <SideMenuContainer>
      <SideMenuContent/>
    </SideMenuContainer>
    <Note/>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import SideMenuContent from "@/components/Notes/SideMenuContent.vue";
import SideMenuContainer from "@/components/SideMenu/SideMenuContainer.vue";
import Note from "@/components/Notes/Note.vue";
import { VueEditor } from "vue2-editor";
import shortid from "shortid";

export default {
  name: "notes",
  components: {
    DefaultLayout,
    SideMenuContent,
    SideMenuContainer,
    VueEditor,
    Note
  }
};
</script>
<style lang="sass">
  .quillWrapper
    width: 100%
    height: 100%
</style>
