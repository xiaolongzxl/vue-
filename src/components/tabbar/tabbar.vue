<template>
    <div class="tabbar">
      <slot></slot>
    </div>
</template>

<script>
export default {
  name:'TabBar',
}
</script>

<style>
 .tabbar{
   height: 49px;
   display: flex;
   text-align: center;
   position: fixed;
   left: 0;
   right: 0;
   bottom: 0;
   background: #f6f6f6;
   box-shadow: 0px -4px 1px rgba(100,100,100,.08);
 }
 
</style>