<template>
  <el-container>
    <el-header>
      <Header />
    </el-header>

    <el-main>
      <nuxt />
    </el-main>
  </el-container>
</template>

<script>
  import { Header } from '~/containers';

  export default {
    components: {
      Header
    }
  }
</script>

<style>
  html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
  }

  input:focus {
    outline: none;
    border: 0;
  }

  a {
    text-decoration: none;
    color: #000;
  }
</style>
