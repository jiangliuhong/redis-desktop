<template>
  <div id="app">
    <el-container>
      <el-header>Redis-Desktop</el-header>
      <el-container>
        <el-aside :width="asideWidth">
          <asideIndex></asideIndex>
        </el-aside>
        <el-container>
          <el-main>Main</el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import asideIndex from "./pages/aside/index.vue";
export default {
  name: "App",
  components: {
    asideIndex
  },
  data() {
    return {
      asideWidth: "400px"
    };
  }
};
</script>

<style scoped>
@import "./css/index.css";
</style>
