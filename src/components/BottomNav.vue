<template>
  <div class="bottom-nav" v-if="shouldShowNavbar">
    <router-link to="/login" class="nav-item">
      <font-awesome-icon icon="dumbbell" />
      <span>健身主页</span>
    </router-link>
    <router-link to="/music" class="nav-item">
      <font-awesome-icon icon="music" />
      <span>背景音乐</span>
    </router-link>
    <router-link to="/discover" class="nav-item">
      <font-awesome-icon icon="camera" />
      <span>发现</span>
    </router-link>
    <router-link to="/profile" class="nav-item">
      <font-awesome-icon icon="user" />
      <span>我的</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'BottomNavBar',
  computed: {
    // 根据路由判断是否显示导航栏
    shouldShowNavbar() {
      // 定义不显示导航栏的路由
      const noNavbarRoutes = ['Login', 'register'];
      return !noNavbarRoutes.includes(this.$route.name);
    }
  }
}
</script>

<style>
.bottom-nav {
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  border-top: 1px solid #ccc;
  position: fixed;
  top: 1376px;
  width: 810px;
  padding: 10px 0;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #333;
}

.nav-item span {
  font-size: 12px;
  margin-top: 5px;
}
</style>
