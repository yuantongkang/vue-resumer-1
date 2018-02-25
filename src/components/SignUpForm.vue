<template>
  <div>
    <form>
      <div class="user-form">
      <div class="row">
        <label>用户名</label>
        <input type="text" v-model="formData.username" required>
      </div>
      <div class="row">
        <label>密码</label>
        <input type="password" v-model="formData.password" required>
      </div>
     </div>
      <div class="signInActions">
        <button @click.prevent="cancel">取 消</button></a>
        <button @click.prevent="signUp" class="active">注 册</button></a>
      </div>
    </form>
  </div>
</template>

<script>
import AV from "../lib/leancloud";
import getErrorMessage from "../lib/getErrorMessage";
import getAVUser from "../lib/getAVUser";
export default {
  name: "SignUpForm",
  data() {
    return {
      formData: {
        username: "",
        password: ""
      },
      errorMessage: ""
    };
  },
  created() {},
  methods: {
    signUp() {
      let { username, password } = this.formData;
      var user = new AV.User();
      user.setUsername(username);
      user.setPassword(password);
      console.log(username);
      console.log(password);
      user.signUp().then(
        loginedUser => {
          this.$emit("success", getAVUser());
        },
        error => {
          this.errorMessage = getErrorMessage(error.code);

          this.open4(this.errorMessage);
        }
      );
    },
    cancel() {
      this.$emit("cancel");
    },
    open4(error) {
      this.$message.error(error);
    }
  }
};
</script>

<style lang="scss" rel="stylesheet/less">
.user-form{
  margin:43px 0;
}
form {
  display: flex;
  height: 300px;
  flex-direction: column;

  .row {
    display: flex;
    justify-content: space-between;
    margin: 100px 0;
    input,
    label {
      margin-top: 16px;
      margin-left: 10px;
    }
  }
  .signInActions {
    text-align: center;
  }
  button{
    
    margin-right: 5px;
    padding: 5px 20px;
    border-radius: 5px;
    background: #00d1b2;
    border: 1px solid #ddd;
    color: #00d1b2;;
    font-size: 18px;
    &:hover {
      cursor: pointer;
      border: 1px solid #00d1b2;;
    }
    &.active {
      background: #00d1b2;;
      color: #fff;
      &:hover {
        background: #3386dd;
      }
    }
  }
}
</style>
