<template>
  <div class="head flex">
    <div class="logo">
      <i class="iconfont icon-biji"></i>
      <!--<img src="../../assets/imgs/small-LOGO.png">-->
    </div>
    <div class="flex flex-1 align-items-center justify-content-end">
      <div class="head-nav flex">
        <!--<router-link to="/">书架</router-link>-->
        <!--<router-link to="/github">Github</router-link>-->
      </div>
      <router-link to="/login" class="user-avatar-layout">
        <img :src="userName.avatar" v-if="userName.avatar">
      </router-link>
    </div>
  </div>
</template>
<script>
  import { mapState, mapGetter, mapMutations, mapActions } from 'vuex'
  export default {
    computed:{
      ...mapState({
        userName: state => state.user.userInfo
      })
    }
  }
</script>
<style lang="less" scoped>
  .head{
    padding: 15px;
    background: @bg-color;
    position: relative;

  }
  .logo{
    position: absolute;
    width: 65px;
    height: 65px;
    border-radius: 50%;
    left: 10px;
    top: 10px;
    img{
      height: 65px;
    }
  }
  .head-nav{
    a{
      color: #fff;
      padding: 0 10px;
      text-decoration: none;
    }
    border-right: solid 1px @border-color;
    margin-right: 20px;
  }
  .user-avatar-layout{
    width: 28px;
    height: 28px;
    border-radius: 5px;
    overflow: hidden;
    background: #fff;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .icon-biji{
    font-size: 35px;
    color: #fff;
  }
</style>
