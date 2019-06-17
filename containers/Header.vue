<template>
  <el-row style="margin-top: 10px;">
    <el-col :span="12" :offset="6">
      <el-row>
        <el-col :span="4" :offset="1">
          <el-date-picker
            v-model="date"
            type="date"
            format="yyyy/MM/dd"
            value-format="yyyy/MM/dd"
            placeholder="날짜">
          </el-date-picker>
        </el-col>
        <el-col :span="16" :offset="3">
          <el-input placeholder="해야할 일" v-model="todo">
            <el-button slot="append" icon="el-icon-s-promotion"></el-button>
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
      date: ''
    })
  }
</script>

<style>
  .el-header {
    background-color: #399f62;
  }
</style>
