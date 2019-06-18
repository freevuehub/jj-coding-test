<template>
  <el-row>
    <el-col :span="4">
      <el-checkbox v-model="checked" :label="checked ? '완료' : '진행중'" border></el-checkbox>
    </el-col>

    <el-col :span="checked ? 17 : 14" :offset="1">
      <template v-if="!editing">
        <Title :class="{ [$style.title]: item.checked }">{{ item.title }}</Title>
        <p :class="{ [$style.title]: item.checked }" style="margin-top: 10px;">
          {{ item.comment }}
        </p>
      </template>

      <template v-else>
        <el-input placeholder="제목" v-model="todo">
        </el-input>
        <el-input placeholder="내용" v-model="comment" style="margin-top: 10px;">
        </el-input>
      </template>
    </el-col>

    <template v-if="editing">
      <el-col :span="2" :offset="1">
        <el-button icon="el-icon-close" @click="editing = false"></el-button>
      </el-col>
      <el-col :span="2">
        <el-button icon="el-icon-s-promotion" @click="editTodo"></el-button>
      </el-col>
    </template>

    <template v-else>
      <el-col :span="2" :offset="1" v-if="!checked">
        <el-button icon="el-icon-edit-outline" @click="editing = true"></el-button>
      </el-col>
      <el-col :span="2">
        <el-button type="danger" icon="el-icon-delete" @click="deleteItem"></el-button>
      </el-col>
    </template>
  </el-row>
</template>

<script>
  import Title from './Title';

  export default {
    name: 'TodoItem',
    components: {
      Title
    },
    props: {
      item: Object
    },
    data: (vm) => ({
      editing: false,
      checked: vm.item.checked,
      todo: vm.item.title,
      comment: vm.item.comment
    }),
    watch: {
      checked(v) {
        this.$store.dispatch('$CallPutTodoItem', { ...this.item, checked: v });
      }
    },
    methods: {
      async deleteItem() {
        await this.$store.dispatch(
          '$CallDelTodoItem',
          {
            idx: this.item.idx,
            type: this.checked ? 'complete' : 'todo'
          }
        );

        this.$notify({
          title: '삭제완료',
          message: '삭제되었습니다.',
          type: 'success'
        });
      },
      async editTodo() {
        await this.$store.dispatch(
          '$CallEditTodoItem',
          {
            idx: this.item.idx,
            data: {
              title: this.todo.trim(),
              comment: this.comment.trim(),
            }
          }
        );

        this.editing = false;
        this.$notify({
          title: '수정완료',
          message: '수정되었습니다.',
          type: 'success'
        });
      }
    }
  }
</script>

<style module>
  .title {
    text-decoration: line-through;
    opacity: .54;
  }
</style>
