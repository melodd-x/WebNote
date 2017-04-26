// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


// 1.引入,开启状态管理
import Vuex from 'vuex'
// 2.将vuex挂在vue实例里面
Vue.use(Vuex);
// 3.创建全局可用的大仓库    ps,state相当于整个程序的date,里面的数据都不能直接更改,必须通过mutations修改
const store = new Vuex.Store({
    state:{
        notes:[
            { id:1,title:'1',date:'2017-4-25',content:'我是第一条note',markdown:'# 我是一级标题' },
            { id:2,title:'22',date:'2017-4-26',content:'我是第二条note' ,markdown:'# 我是二级标题'},
            { id:3,title:'333',date:'2017-4-27' ,content:'我是第三条note',markdown:'# 我是三级标题'},
            { id:4,title:'4444',date:'2017-4-28' ,content:'我是第四条note',markdown:'# 我是四级标题'},
            { id:5,title:'55555',date:'2017-4-29',content:'我是第五条note' ,markdown:'# 我是五级标题'}
        ],
        note:{id:'',title:'',date:'',content:'',markdown:''}
    },

    mutations:{
        // 进化中的函数都是为了更新state而存在的
        // 每一个函数的第一个参数都要传入state
        // 第二个参数,是子组件在调用mutations的时候可以回传的数据\

        //把note添加到notes中
        addNote(state,note){
            state.notes.push(note);

            state.note.id = '';
            state.note.title = '';
            state.note.date = '';
            state.note.content = '';
            state.note.markdown = '';

        },
        // 选中note
        selectNote(state,note){
            state.note = note;
            console.log(state.note);

        },
        // 保存note
        saveNote(state,note){
            state.note = note;
            // console.log("笔记保存到了全局的note里了");
            // console.log(state.note);
        }
    }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
