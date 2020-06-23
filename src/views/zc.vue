<template>
  <div class="xf">
    <h3>入账：</h3>
    <ul class="zcul">
      <li><label for="data">日期:</label> <input type="date" v-model="data" :placeholder="y" id="data"/></li>
      <li><label for="time">时间:</label> <input type="text" v-model="time" :placeholder="t" id="time"/></li>
      <li class="lx">
        <p>入账类型</p>
        <div>
          <label for="ji">基本工资</label>
          <input type="radio" id="ji" v-model="lx" value="基本工资">
          <label for="fl">公司福利</label>
          <input type="radio" id="fl" v-model="lx" value="公司福利">
           <label for="qt">其他福利</label>
          <input type="radio" id="qt" v-model="lx" value="其他福利">
        </div>
      </li>
      <li><label for="money">金额(¥)</label><input type="number" v-model="money" id="money"/></li>
      <li><label for="bz">备注：(入账类型)</label><input type="texterea" v-model="bz" id="bz" /></li>
    </ul>
    <button @click="tj" class="jzbtn">提交</button>
  </div>
</template>

<script>
export default {
  name:'zc',
  data(){
    return{
      time:'',
      data:'',
      lx:'基本工资',
      money:0,
      bz:''
    }
  },
  methods:{
    tj(){
      if(this.bz){
        let jl = {
        title:this.bz,
        time:'入账时间:'+ ' ' + this.data + ' ' + this.time,
        money : this.money,
        zt:'rz'
        };
        if(this.money == 0){
          alert('你还没有输入金额')
        }else{this.$store.commit('push',jl)
        }
      }else{
        let jl = {
        title:this.lx,
        time:'入账时间:' + this.data + ' ' + this.time,
        money : this.money,
        bz:'',
        zt:'rz'
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
.zcul {list-style: none;
width: 100%;padding: 0;
font-size: 13px;
}
.zcul li{
  width: 90%;
  height: 40px;
  line-height: 40px;
 padding-bottom: 10px;
 margin: 0 auto;
 margin-bottom: 10px;
}
.zcul label{
  float: left;
  margin-left: 10px;
}
 .zcul input {
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
  .zcul .lx{
    display: flex;
    flex-direction:column;
    height: 60px;
  }
  .zcul .lx input{width: 4%;margin-top: 15px;}
  .zcul .lx p {
    margin: 0;
    height: 20px;
    padding-left: 10px;
  }
  .lx div{
    flex: 1;
    display: flex;
    font-size: 14px;
    margin-left: 15px;
    height: 20px;
    
  }
  .lx label{
    margin: 0 auto;
    margin-right: 10px;
  }
  .jzbtn {
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