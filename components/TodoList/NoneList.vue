<template>
  <el-card shadow="never" style="line-height: 22px;">
    <el-alert
      :title="title"
      :closable="false"
      type="info"
      show-icon>
    </el-alert>
  </el-card>
</template>

<script>
  export default {
    name: 'NoneList',
    props: {
      title: String
    }
  }
</script>
