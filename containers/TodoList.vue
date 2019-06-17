<template>
  <el-col :span="12" :offset="6">
    <el-timeline v-for="l in $GetTodoList" :key="l.idx">
      <el-timeline-item :timestamp="l.date" placement="top" color="#399f62">
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
    name: 'TodoList',
    components: {
      TodoItem
    },
    computed: {
      ...mapGetters(['$GetTodoList'])
    },
  }
</script>
