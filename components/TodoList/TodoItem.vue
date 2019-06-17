<template>
  <el-row>
    <el-col :span="4">
      <el-checkbox v-model="checked" label="완료" border></el-checkbox>
    </el-col>
    <el-col :span="17" :offset="1">
      <nuxt-link to="/">
        <Title :class="{ [$style.title]: item.checked }">{{ item.title }}</Title>
      </nuxt-link>
    </el-col>
    <el-col :span="2">
      <el-button type="danger" icon="el-icon-delete-solid"></el-button>
    </el-col>
  </el-row>
</template>

<script>
  import Title from './Title';

  export default {
    name: 'TodoItem',
    components: {
      Title
    },
    props: {
      item: Object
    },
    data: (vm) => ({
      checked: vm.item.checked
    })
  }
</script>

<style module>
  .title {
    text-decoration: line-through;
    opacity: .54;
  }
</style>
