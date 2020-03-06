<template>
  <div id="app">
    <el-container>
      <el-header>
        Redis-Desktop
        <el-button type="text" @click="testRedis">测试Redis</el-button>
      </el-header>
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
import redisUtil from "./js/utils/redis";
export default {
  name: "App",
  components: {
    asideIndex
  },
  data() {
    return {
      asideWidth: "40%"
    };
  },
  methods: {
    testRedis() {
      redisUtil.createClient();
      redisUtil.getKey("test2").then(function(res) {
        console.log(res);
      });
    }
  }
};
</script>

<style scoped>
@import "./css/index.css";
</style>
