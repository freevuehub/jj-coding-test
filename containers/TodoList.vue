<template>
  <el-col :span="12" :offset="6">
    <el-timeline>
      <NoneList title="해야할 일이 없습니다." v-if="!$GetTodoList.length" />

      <template v-else>
        <el-timeline-item :timestamp="l.date" placement="top" color="#399f62" v-for="l in $GetTodoList" :key="l.date">
          <el-card shadow="hover" v-for="n in l.items" :key="n.idx" style="margin-bottom: 10px;">
            <TodoItem :item="n" />
          </el-card>
        </el-timeline-item>
      </template>
    </el-timeline>
  </el-col>
</template>

<script>
  import { mapGetters } from 'vuex';
  import {
    TodoItem,
    NoneList
  } from '~/components';

  export default {
    name: 'TodoList',
    components: {
      TodoItem,
      NoneList
    },
    computed: {
      ...mapGetters(['$GetTodoList'])
    },
    mounted() {
      // console.log(this.$GetTodoList);
    }
  }
</script>
