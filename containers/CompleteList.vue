<template>
  <el-col :span="12" :offset="6">
    <el-timeline>
      <el-collapse-transition>
        <el-timeline-item timestamp="완료" placement="top" v-if="$GetCompleteList.length">
          <transition-group name="el-zoom-in-top">
            <el-card shadow="never" v-for="l in $GetCompleteList" :key="l.idx" style="margin-bottom: 10px;">
              <TodoItem :item="l" />
            </el-card>
          </transition-group>
        </el-timeline-item>

        <NoneList title="완료한 일이 없습니다." v-else />
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
    name: 'CompleteList',
    components: {
      TodoItem,
      NoneList
    },
    computed: {
      ...mapGetters(['$GetCompleteList'])
    },
  }
</script>
