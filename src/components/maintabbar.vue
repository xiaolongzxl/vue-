<template>
  <tab-bar>
    <tabbar-item path='/home'>
      <img slot="item-icon" src="~@/assets/img/首页.png" alt="">
      <div slot="item-text">首页</div>
    </tabbar-item>
    <tabbar-item path='/jz'>
      <img slot="item-icon" src="~@/assets/img/书写.png" alt="">
      <div slot="item-text">记账</div>
    </tabbar-item>
    <tabbar-item path='/zd' @click="js">
      <img slot="item-icon" src="~@/assets/img/账单.png" alt="">
      <div slot="item-text">账单</div>
    </tabbar-item>
  </tab-bar>
</template>

<script>
import tabBar from '@/components/tabbar/tabbar'
import tabbarItem from '@/components/tabbar/tabbarItem'
export default {
  name:'maintabbar',
  components:{
    tabBar,
    tabbarItem
  },
  methods:{
    js(){
      console.log(1);
      
    }
  }
}
</script>

<style>

</style>