<template>
  <div id="home">
    <h3>记账工具：</h3>
    <div class="icon">
      <img src="~@/assets/img/钱包.png" alt="">
      <h5>可用余额：<div>{{this.$store.state.ye | gs}}<span>(¥)</span></div></h5>
    </div>
  </div>
</template>

<script>
import zd from '@/views/zd'
export default {
  name:'home',
  filters:{
    gs(price){
      return Number(price).toFixed(2);
    }
  },
}
</script>

<style>
  .icon{
    width: 200px;
    border-radius: 50%;
    background: #fff;
    border: 4px solid #e6e6e6;
    margin: 200px auto;
    position: relative;
    height: 200px;
    text-align: center;
    color: #b2b1b1
  }
  .icon img{
    width: 50%;
    position: absolute;
    top:22%;
    left:25%;
    opacity: .1;
  }
  .icon h5{
    position: absolute;
    top: 30%;
    left: 35%;
    font-size: 12px;
  }
  .icon h5 div{
    color: #58B7FF;
    font-size: 20px;
  }
  .icon h5 div span{
    color: #b2b1b1;
    font-size: 12px;
  }
</style>