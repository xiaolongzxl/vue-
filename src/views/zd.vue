<template>
  <div id="zd">
    <h3>账单：</h3>
    <ul>
      <li v-for="(zd,index) in zds" :key = index>
        <p class="top"><span>{{zd.title}}</span><span>{{zd.money}}¥</span></p>
        <p class="bottom"><span>{{zd.time}}</span><i @click="pop(index)">取消</i></p>
      </li>
    </ul>
    <div class="bottom-tabbar">
      <div class="left"><span>入账</span><br/><span>{{rz | gs}}</span></div>
      <i>-</i>
      <div class="center"><span>消费</span><br/><span>{{xf | gs}}</span></div>
      <i>=</i>
      <div class="right"><span>余额</span><br/><span>{{ye | gs}}</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name:'zd',
  data(){
    return{
      zds:this.$store.state.zds,
      msg:1,
      date:2000
    }
  },
  methods:{
    pop(index){
      this.$store.commit('pop',index)

    }
  },
  computed:{
    rz(){
     let rz = this.$store.state.zds
     let newv = rz.filter((n) => n.zt == 'rz').reduce(((pre,n) => Number(pre) + Number(n.money)),0)
     this.$store.state.rz = newv
      return newv
    },
    xf(){
      let xf = this.$store.state.zds
      let newv = xf.filter((n) => n.zt == 'xf').reduce(((pre,n) => Number(pre) + Number(n.money)),0)
      this.$store.state.xf = newv
      return newv
    },
    ye(){
      let newv = this.rz - this.xf
      this.$store.state.ye = newv
      return newv
    }
  },
  filters:{
    gs(price){
      return Number(price).toFixed(2);
    }
  },
}
</script>

<style>
h3{color: #58B7FF;margin-left: 10px;}
ul{
  list-style: none;
}
li{
  height:55px;
  border-bottom: 1px solid #ccc;
}
  .top {
    width: 90%;
    height: 15px;
    line-height: 30px;
  }
  .top span{
    float: left;
    font-weight: bold;
  }
  .top span:last-child{
    float: right;
  }
  .bottom{
    width: 78%;
    font-size: 13px;
    color: #afafaf;
    margin: 0 auto;
    line-height: 20px;
    margin-left: 15%;
  }
  .bottom i{
    display: block;
    width: 18%;
    line-height: 20px;
    background: #f02323;
    border-radius: 10px;
    font-style: normal;
    text-align: center;
    color: #fff;
    margin: auto 6px;
    float: right;
  }
  .bottom-tabbar{
    display: flex;
    text-align: center;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 75px;
    color: #58B7FF;
  }
  .bottom-tabbar div,.bottom-tabbar i{
    flex: 1;
    font-style: normal;
  }
  .bottom-tabbar .left span:last-child{
    color: orange;
  }
  .bottom-tabbar .center span:last-child{
    color: red;
  }
  .bottom-tabbar .right span:last-child{
    color: green;
  }
</style>