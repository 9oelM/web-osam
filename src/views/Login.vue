<template>
    <MinimalLayout>
        <el-card id = "login-container">
            <div slot="header" id = "login-header">
                <h2 class = "mili-work">Mili&Work</h2>
                <p>효율적인 전투!</p>
            </div>
            <el-form class="message-form" ref="form" :model="form" label-width="10px">
                <el-form-item id="id" >
                    <el-input v-model="form.name" id="id-input" @keyup.enter.native="onSubmit"  placeholder="군번 (- 포함)"/>
                </el-form-item>
                <el-form-item id="pw">
                    <el-input v-model="form.pw" id="pw-input" @keyup.enter.native="onSubmit" type = "password" placeholder="비밀번호"/>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit" id = "login-button">로그인</el-button>
                </el-form-item>
                <el-alert v-if="warn"
                    title="군번이나 비밀번호를 다시 확인해주세요."
                    type="error"
                    :closable="false" >
                </el-alert>
            </el-form>
        </el-card>
    </MinimalLayout>

</template>
<script>
import MinimalLayout from "@/layouts/MinimalLayout.vue";
export default {
  name: "login",
  data: function() {
    return {
      form: {
        name: "",
        pw: ""
      },
      warn: false
    };
  },
  components: {
    MinimalLayout
  },
  methods: {
    onSubmit() {
      // fake login process
      if (this.form.name == "14-123123" && this.form.pw == "123123") {
        this.$store.commit({
          type: "setUsername",
          name: "상사 홍길동"
        });
        this.$router.push({ path: "/dashboard" });
      } else if (this.form.name == "10-123123" && this.form.pw == "123123") {
        this.$store.commit({
          type: "setUsername",
          name: "대위 김영희"
        });
        this.$router.push({ path: "/dashboard" });
      } else if (this.form.name.length && this.form.pw.length) {
        this.$store.commit({
          type: "setUsername",
          name: "중사 김철수"
        });
        this.$router.push({ path: "/dashboard" });
      } else {
        this.onUndersiredInput();
      }
    },
    onUndersiredInput() {
      this.warn = true;
    }
  }
};
</script>
<style lang = "sass" scoped>
    #login-button
        width: 100%
    #login-header
        text-align: center
        h2
            font-size: 2em
            text-align: center
        p   
            font-size: 13px
            font-weight: 300
            text-align: center
    #login-container   
        min-width: 400px
</style>
