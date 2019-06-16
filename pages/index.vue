<template>
  <el-row :gutter="20">
    <el-col :span="12" :offset="6">
      <el-timeline v-for="l in __TodoList" :key="l.idx">
        <el-timeline-item :timestamp="l.date" placement="top">
          <el-card shadow="hover">
            <h4>{{ l.title }}</h4>
            <p>{{ l.comment }}</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </el-col>
  </el-row>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'ViewHome',
    computed: {
      ...mapGetters(['__TodoList'])
    },
    methods: {
      async getTodoList() {
        await this.$store.dispatch('callGetTodoList');
      }
    },
    created() {
      this.getTodoList();
    }
  }
</script>
