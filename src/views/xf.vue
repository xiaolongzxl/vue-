<template>
  <div class="xf">
    <h3>消费：</h3>
    <ul class="xful">
      <li><label for="data">日期:</label> <input type="date" v-model="data" :placeholder="y" id="data"/></li>
      <li><label for="time">时间:</label> <input type="text" v-model="time" :placeholder="t" id="time"/></li>
      <li class="lx">
        <p>消费类型</p>
        <div>
          <label for="fruit">水果零食</label>
          <input type="radio" id="fruit" v-model="lx" value="水果零食"><br/>
          <label for="cy">餐饮伙食</label>
          <input type="radio" id="cy" v-model="lx" value="餐饮伙食">
        </div>
        <div>
          <label for="ly">出行旅游</label>
          <input type="radio" id="ly" v-model="lx" value="出行旅游"><br/>
          <label for="shop">网上购物</label>
          <input type="radio" id="shop" v-model="lx" value="网上购物">
        </div>
      </li>
      <li><label for="money">金额(¥)</label><input type="number" v-model="money" id="money"/></li>
      <li><label for="bz">备注：(消费类型)</label><input type="texterea" v-model="bz" id="bz" /></li>
    </ul>
    <button @click="tj" class="xfbtn">提交</button>
  </div>
</template>

<script>
export default {
  name:'xf',
  data(){
    return{
      time:'',
      data:'',
      lx:'水果零食',
      money:0,
      bz:''
    }
  },
  methods:{
     tj(){
      if(this.bz){
        let jl = {
        title:this.bz,
        time:'消费时间:' + ' ' + this.data + ' ' + this.time,
        money : this.money,
        zt:'xf'
        };
        if(this.money == 0){
          alert('你还没有输入金额')
        }else{this.$store.commit('push',jl)
        }
      }else{
        let jl = {
        title:this.lx,
        time:'消费时间:' + this.data + ' ' + this.time,
        money : this.money,
        bz:'',
        zt:'xf'
        };
        if(this.money == 0){
          alert('你还没有输入金额')
        }else{this.$store.commit('push',jl)
        }
      }
      }
  },
  computed:{
    t(){
      let now = new Date();
      let ti = now.getMinutes()
      ti < 10 ? ti = '0' + ti : ti
      let t = now.getHours() + ':' + ti
      this.time = t
      return  t
    },
    y(){
      let now = new Date();
      let month = now.getMonth()+1
      month < 10 ? month='0' + month : month
      let m = now.getFullYear() + '-' + month + '-' + now.getDate()
      this.data = m
      return  m
    }
  }
}
</script>

<style>
.xful {list-style: none;
width: 100%;padding: 0;
font-size: 13px;
}
.xful li{
  width: 90%;
  height: 40px;
  line-height: 40px;
  padding-bottom: 10px;
  margin: 0 auto;
  margin-bottom: 10px;
}
.xful label{
  float: left;
  margin-left: 10px;
}
  .xful input {
    width: 60%;
    float: right;
    line-height: 35px;
    border-radius:12px ;
    outline: none;
    text-align: right;
    padding-right: 37px;
    box-sizing: border-box;
  }
  #data{
    padding: 0;
  }
  .xful .lx{
    display: flex;
    flex-direction:column;
    height: 100px;
  }
  .lx input{width: 4%;margin-top: 15px;}
  .lx p {
    margin: 0;
    height: 20px;
    padding-left: 10px;
  }
  .xful .lx div{
    flex: 1;
    display: flex;
    font-size: 14px;
    margin-left: 15px;
    height: 20px;
    
  }
  .xful .lx label{
    margin: 0 auto;
    margin-right: 10px;
  }
  .xfbtn {
    width: 35%;
    line-height: 40px;
    margin: 0 auto;
    background: #f44336;
    border-radius: 7px;
    border: 0;
    margin-left: 30%;
    color: #fff;
  }
</style>