<template>
  <div
    style="
      display: flex;
      align-items: center;
      background-color: #409eff;
      color: white;
    "
  >
    <span style="margin: 0 30px; font-size: 18px; font-weight: 600">SCUI</span>
    <el-menu
      style="flex: 1; border-width: 0"
      :default-active="activeIndex"
      mode="horizontal"
      :router="true"
      text-color="#C0C4CC"
      background-color="#409eff"
      active-text-color="#fff"
    >
      <el-menu-item index="/home">{{ $t("m.home") }} </el-menu-item>
      <el-menu-item index="/about">{{ $t("m.about") }} </el-menu-item>
    </el-menu>
    <el-select class="lang-select" v-model="lang" size="small">
      <el-option label="简体中文" value="zh-CN"> </el-option>
      <el-option label="English" value="en-US"> </el-option>
    </el-select>
    <a
      style="fill: #3a3a3a; margin-right: 20px"
      target="contract-interaction"
      href="https://github.com/honghu666/contract-interaction"
    >
      <svg
        height="20"
        viewBox="0 0 16 16"
        version="1.1"
        width="20"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
        ></path>
      </svg>
    </a>
  </div>
</template>

<script>
import Db from "../lib/db";

export default {
  data: function () {
    return {
      activeIndex: "/home",
      lang: "zh-CN",
    };
  },
  created: function () {
    this.activeIndex = this.$route.path;
    this.lang = this.$i18n.locale;
  },
  watch: {
    lang: function () {
      this.$i18n.locale = this.lang;
      Db.setLang(this.lang);
    },
  },
};
</script>

<style>
.lang-select {
  margin-right: 20px;
  text-align: right;
  width: 100px;
}
.lang-select input {
  background-color: transparent;
  border-color: transparent;
  border-width: 0;
  color: white;
  text-align: right;
}

.lang-select .el-select__caret {
  color: white;
}
</style>