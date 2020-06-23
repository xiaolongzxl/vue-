<template>
  <div id="jz">
    <h3>记账：</h3>
    <div class="button">
      <router-link tag="button" to="/xf">消费</router-link>
      <router-link tag="button" to="/zc">入账</router-link>
    </div>
  </div>
</template>

<script>
import xf from '@/views/xf'
import zc from '@/views/zc'

export default {
  name:'jz',
  components:{
    xf,
    zc
  }
}
</script>

<style>
  button{
    width: 170px;
    line-height: 40px;
    display: block;
    border-radius: 7px;
    box-shadow: none;
    margin: 10px;
    border: 0;
    color:#fff;
    background: #ff0000;
  }
  button:nth-child(2){
    background: #34b834;
  }
  .button{
    margin: 50% 25%;
  }
</style>