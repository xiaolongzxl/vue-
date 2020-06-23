<template>
  <div class="tabbar-item" @click="click" :class="{active:this.path == this.$store.state.currentpath }">
    <div><slot name="item-icon"></slot></div>
    <div><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name:'tabbarItem',
  data(){
    return{

    }
  },
  methods:{
    click(path){
        this.$router.push(this.path)
        this.$store.state.currentpath = this.path
    }
  },
  props:{
    path:String
  }
}
</script>

<style>
  .tabbar .tabbar-item{
   flex: 1;
 }
 .tabbar .tabbar-item img{
   width: 24px;
   height: 24px;
 }
 .tabbar .tabbar-item div{
   font-size: 12px;
 }
 .active{color: #58B7FF;}
</style>