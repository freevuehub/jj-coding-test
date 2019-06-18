<template>
  <el-col :span="12" :offset="6">
    <el-timeline>
      <el-timeline-item timestamp="완료" placement="top" v-if="$GetCompleteList.length">
        <el-card shadow="never" v-for="l in $GetCompleteList" :key="l.idx" style="margin-bottom: 10px;">
          <TodoItem :item="l" />
        </el-card>
      </el-timeline-item>

      <NoneList title="완료한 일이 없습니다." v-else />
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
