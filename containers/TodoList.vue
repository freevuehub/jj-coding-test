<template>
  <el-col :span="12" :offset="6">
    <el-timeline>
      <el-collapse-transition>
        <NoneList title="해야할 일이 없습니다." v-if="!$GetTodoList.length" />

        <template v-else>
          <transition-group name="el-zoom-in-top">
            <el-timeline-item :timestamp="l.date" placement="top" color="#399f62" v-for="l in $GetTodoList" :key="l.date">
              <transition-group name="el-zoom-in-top">
                <el-card shadow="hover" v-for="n in l.items" :key="n.idx">
                  <TodoItem :item="n" />
                </el-card>
              </transition-group>
            </el-timeline-item>
          </transition-group>
        </template>
      </el-collapse-transition>
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
