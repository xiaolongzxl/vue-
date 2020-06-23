<template>
  <div id="app">
    <router-view></router-view>
    <maintab-bar></maintab-bar>
  </div>
</template>
<script>
import maintabBar from '@/components/maintabbar'
import home from './views/Home'
export default {
  name:'App',
  components:{
    maintabBar,
  }
}
</script>
<style>
 @import url(~@/assets/css/normalize.css);
 
</style>
