<template lang="html">
    <div class="panel panel-default">
        <div class="panel-body">
            <Vbutton type="success" @click="saveNote">保存笔记</Vbutton>
            <!-- <div class="alert alert-success col-lg-3 pull-right " role="alert">保存成功</div> -->
            <hr />
            <div class="marked">
                <div class="title">
                    <input id="titleVlaue" type="text" placeholder="请输入文章标题" v-model="titleText">
                </div>
                <div class="editor">
                    <textarea id="markdownVlaue" name="name" rows="8" cols="8" v-model="content"></textarea>
                </div>
                <div id="screenHtml" class="screen" v-html="domarked"></div>
            </div>
            <div style="display:none">{{text}}</div>
            <div style="display:none">{{text2}}</div>
        </div>
    </div>
</template>

<script>
import Vbutton from './Vbutton'
import marked from 'marked'

export default {
  name: 'Vnoteedit',
  data() {
    return {
        titleText:'',
        content:''
    }
  },
  methods: {
    saveNote() {
        //获取titile
      var titleVlaue = document.getElementById('titleVlaue').value;
    //   获取完整编译过的文本
      var screenHtml = document.getElementById('screenHtml').innerHTML;
    //   获取markdown.md
      var markdownVlaue = document.getElementById('markdownVlaue').value;

      // console.log(titleVlaue);
    //   console.log(markdownVlaue);

      if (titleVlaue) {
        // 将note保存到全局的note里
        this.$store.commit('saveNote', {
          title: titleVlaue,
          markdown:markdownVlaue
        })
        alert("保存成功");
      } else {
        alert("请填写标题");
      }

    }
  },
  computed: {
    //获取note里面的markdown
    // text(){
    //
    //     return this.$store.state.note.markdown;
    // },
    text(){
            this.content = this.$store.state.note.markdown
            return this.$store.state.note.markdown;
    },
    // 获取note里面的title
    // titleText(){
    //     return this.$store.state.note.title;
    // },

    text2(){
            this.titleText = this.$store.state.note.title
            return this.$store.state.note.title;
    },

    //screen获取markdownVlaue里面的text
    domarked() {
      return marked(this.content);
    }
  },
  components: {
    Vbutton
  }
}
</script>

<style lang="css" scoped>

.marked{
    width: 60vw;
    margin: 2px auto;
    overflow: hidden;
}
.title input{
    width: 100%;
    height: 50px;
    padding: 10px;
    outline: none;
    border: 1px solid #ccc;
    border-bottom: none;
    border-radius: 5px 5px 0 0;
}
input::-webkit-input-placeholder{
    color: rgba(94, 204, 226, 0.62);
    font-weight: 200;
}
.editor,.screen{
    width: 50%;
    height: 300px;
    float: left;
    border: 1px solid #ccc;
    box-sizing: border-box;
}
.editor{
    border-right: none;
    border-radius: 0 0 0 5px;
}
.screen{
    padding: 10px;
    background-color: rgba(140, 214, 143, 0.1);
    border-radius: 0 0 5px 0;
    word-wrap: break-word;
}
textarea{
    padding: 10px;
    height: 100%;
    width: 100%;
    border: none;
    background-color: rgba(208, 214, 140, 0.1);
}
textarea:focus{
    outline: none;
}

</style>
