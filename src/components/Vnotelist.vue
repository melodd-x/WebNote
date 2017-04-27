<template lang="html">
    <div class="panel panel-default">
        <div class="panel-body">
            <Vbutton type="info" @click="addNote">添加笔记</Vbutton>
            <hr />
            <ul class="list-group">
                <Vnoteitem v-for="(note,index) in getNotes" :note="note" :key="index"></Vnoteitem>
            </ul>
    </div>
</div>
</template>

<script>
import Vbutton from './Vbutton'
import Vnoteitem from './Vnote-item'
export default {
  name: 'Vnotelist',
  components: {
    Vbutton,
    Vnoteitem
  },
  computed:{
      getNotes(){
          
          return this.$store.state.notes
      }
  },
  methods:{
      addNote(){

        var min = 1;
        var max = 1000000;
        var num = Math.random()*(max-min)+min;
        num = Math.round(num);

        if (this.$store.state.note.title) {
        //   需要触发一个mutatuons执行,必须使用commit方法
            this.$store.commit('addNote',{
                id:num,
                title:this.$store.state.note.title,
                date:new Date().toLocaleString(),
                markdown:this.$store.state.note.markdown
            })
            console.log(this.$store.state.note);

        }else {
            alert("没有笔记可以添加");
        }


      }
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="css">
</style>
