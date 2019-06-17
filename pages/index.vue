<template>
  <el-row>
    <TodoList style="margin-bottom: 20px;" />

    <CompleteList />
  </el-row>
</template>

<script>
  import {
    TodoList,
    CompleteList
  } from '~/containers';

  export default {
    name: 'ViewHome',
    components: {
      TodoList,
      CompleteList
    },
    methods: {
      async getTodoList() {
        await this.$store.dispatch('$CallGetTodoList');
      }
    },
    created() {
      this.getTodoList();
    }
  }
</script>
