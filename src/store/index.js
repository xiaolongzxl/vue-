import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    zds:[

    ],
    rz:0,
    xf:0,
    ye:0,
    currentpath:'/home'
  },
  mutations: {
    push(state,jl){
      let zdlength = state.zds.length
      Vue.set(state.zds,zdlength,jl)
      alert('提交成功')
      console.log(state.ye)
    },
    pop(state,jl){
      if (confirm('你真的要删除吗?')){
      state.zds.splice(jl,1)
      }else{
        return
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
