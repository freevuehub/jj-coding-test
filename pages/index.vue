<template>
  <el-row :gutter="20">
    <el-col :span="12" :offset="6">
      <el-timeline v-for="l in __TodoList" :key="l.idx">
        <el-timeline-item :timestamp="l.date" placement="top" color="#399f62">
          <el-card shadow="hover">
            <h4>{{ l.title }}</h4>
            <p>{{ l.comment }}</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </el-col>

    <el-col :span="12" :offset="6">
      <el-timeline>
        <el-timeline-item timestamp="완료" placement="top">
          <el-card shadow="never">
            <h4>test</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam, deleniti earum exercitationem hic magnam nobis recusandae. A autem cumque ea, eum fugiat in ipsam ipsum minus molestias neque qui?</p>
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
