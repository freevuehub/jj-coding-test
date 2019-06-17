<template>
  <el-col :span="12" :offset="6">
    <el-timeline v-for="l in $GetCompleteList" :key="l.idx">
      <el-timeline-item timestamp="완료" placement="top">
        <el-card shadow="hover">
          <TodoItem :item="l" />
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </el-col>
</template>

<script>
  import { mapGetters } from 'vuex';
  import {
    TodoItem
  } from '~/components';

  export default {
    name: 'CompleteList',
    components: {
      TodoItem
    },
    computed: {
      ...mapGetters(['$GetCompleteList'])
    },
  }
</script>
