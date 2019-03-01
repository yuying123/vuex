import Vue from 'vue'
import Vuex from 'vuex'
import { VUE_SET } from './components/mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:0,
    todoList:[
      {id:1,text:'111',done:true},
      {id:2,text:'222',done:false},
      {id:3,text:'333',done:true},
    ],
    me:{name:'yy'}
  },

  // 可以认为是 store 的计算属性
  getters:{
    doneTodoList:state=>{
      return state.todoList.filter(x=>x.done)
    },
    doneTodoListLength:(state,getters)=>{
      return getters.doneTodoList.length
    },
    getTodoById:(state) => (id) =>{
      return state.todoList.find(x=>x.id===id)
    }
    // getTodoById:(state) => {
    //   return (id) =>{
    //     return state.todoList.find(x=>x.id===id)
    //   }
    // }
  },


  /**
   * 最好提前在你的 store 中初始化好所有所需属性。
   * 当需要在对象上添加新属性时，你应该 使用 Vue.set(obj, 'newProp', 123), 或者 以新对象替换老对象。state.obj = { ...state.obj, newProp: 123 }
   * mutation 必须是同步函数
   */
  mutations: {
    increment (state) {
      state.count++
    },
    incrementAdd(state,n){
      state.count += n
    },
    incrementAdd1(state,payload){
      state.count += payload.amount
    },
    [VUE_SET] (state){
      // Vue.set(state.me,'done',"true")
      state.me = {...state.me,done:true}
    }
  },


  /**
   * Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象
   * Action 通过 store.dispatch 方法触发：我们可以在 action 内部执行异步操作
   */
  actions: {
    increment (context){
      context.commit('increment')
    },
    increment ({commit}){
      // {commit} = context
      // commit('increment')
      setTimeout(() => {
        commit('increment')
      }, 1000)
    },


    // TODO:  http://es6.ruanyifeng.com/#docs/generator ????????
    // async increment({commit}){
    //   return new Promise((resolve,reject)=>{
    //     commit('increment', await increment())
    //   })
    // },

    // async increment_1({commit,dispatch}){
    //   await dispatch('increment')
    //   commit('incrementAdd', await incrementAdd())
    // },

    // incrementAdd({commit,state},n){
    //   return new Promise((resolve,reject)=>{
    //     commit('incrementAdd',10)
    //     resolve()
    //   })

    //   // console.log(n)
    //   // commit('incrementAdd',n)
    // }
  }
})
