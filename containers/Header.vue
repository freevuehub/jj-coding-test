<template>
  <el-row style="margin-top: 10px;">
    <el-col :span="14" :offset="5">
      <el-row>
        <el-col :span="6">
          <el-date-picker
            v-model="date"
            type="date"
            format="yyyy/MM/dd"
            value-format="yyyy/MM/dd"
            placeholder="날짜">
          </el-date-picker>
        </el-col>
        <el-col :span="7">
          <el-input placeholder="제목" v-model="todo">
          </el-input>
        </el-col>
        <el-col :span="11">
          <el-input placeholder="내용" v-model="comment">
            <el-button slot="append" icon="el-icon-s-promotion" @click="addTodo"></el-button>
          </el-input>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: 'Header',
    data: () => ({
      todo: '',
      comment: '',
      date: ''
    }),
    methods: {
      async addTodo() {
        if (!this.date) {
          return this.$message({
            showClose: true,
            type: 'error',
            message: '날짜를 선택해주세요.'
          });
        }
        if (!this.todo) {
          return this.$message({
            showClose: true,
            type: 'error',
            message: '해야할 일을 작성해주세요.'
          });
        }

        await this.$store.dispatch('$CallAddTodoItem', {
          date: this.date,
          comment: this.comment,
          todo: this.todo
        });

        this.$notify({
          title: '추가완료',
          message: '추가되었습니다.',
          type: 'success'
        });
      }
    }
  }
</script>

<style>
  .el-header {
    background-color: #399f62;
  }
</style>
