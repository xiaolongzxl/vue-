<template>
  <div id="app">
    <transition name="view" mode="out-in"><router-view></router-view></transition>
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
 @import url(~@/assets/css/app-animation.css);
</style>
