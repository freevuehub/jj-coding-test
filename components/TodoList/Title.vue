<template>
  <h3 :class="$style.title">
    <slot></slot>
  </h3>
</template>

<style module>
  .title {
    font-size: 18px;
    color: #444;
    line-height: 40px;
  }
</style>
