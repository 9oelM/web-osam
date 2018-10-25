<template>
  <DefaultLayout>
    <SideMenuContainer>
      <SideMenuContent></SideMenuContent>
    </SideMenuContainer>
    <MainChat/>
  </DefaultLayout>
</template>

<script>
// @ is an alias to /src
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import SideMenuContainer from "@/components/SideMenu/SideMenuContainer.vue";
import SideMenuContent from "@/components/Chat/SideMenuContent.vue";
import MainChat from "@/components/Chat/MainChat.vue";
export default {
  name: "messenger",
  components: {
    DefaultLayout,
    SideMenuContainer,
    SideMenuContent,
    MainChat
  }
};
</script>
