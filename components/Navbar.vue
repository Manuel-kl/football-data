<template>
    <nav class="flex justify-between p-4 bg-main-bg-color">
      <router-link
        to="/"
        class="border-r-main-green hover:border-r-white hover:border-b-main-green border-r-2 border-b-2 px-5 flex items-center rounded-md font-bold"
      >
        <h1 class="text-white hover:text-yellow text-xl">
          Football<span class="text-yellow hover:text-white p-0 m-0">Data</span>
        </h1>
      </router-link>

      <div>
        <el-dropdown trigger="click">
          <el-button
            color="#181818"
            class="text-white font-bold shadow-sm shadow-grass-green w-[150px]"
          >
            EPL <el-icon class="el-icon--right"><arrow-down /></el-icon>
          </el-button>
          <template #dropdown>
            <el-dropdown-menu class="font-bold px-5 bg-main-bg-color">
              <el-dropdown-item class="text-white">Bundesliga</el-dropdown-item>
              <el-dropdown-item class="text-white">Serie A</el-dropdown-item>
              <el-dropdown-item class="text-white">La Liga</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </nav>
  </template>
  <script setup>
  import { ArrowDown } from "@element-plus/icons-vue";
  </script>

  <style scoped></style>
