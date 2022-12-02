<template>
  <div :style="isDarkMode ? { backgroundColor: 'black' } : { backgroundColor: 'transparent' }">
    <Nav />
    <Heading />
    <Cards />
  </div>
</template>

<script setup lang="ts" >
const { isDarkMode } = useDrakMode();
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: Georgia;
}
</style>