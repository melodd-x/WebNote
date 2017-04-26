<template lang="html">
    <div class="marked">
        <div class="title">
            <input type="text" placeholder="请输入文章标题" :value="title">
        </div>
        <div class="editor">
            <textarea name="name" rows="8" cols="8" v-model="text"></textarea>
        </div>
        <div class="screen" v-html="domarked">
            {{domarked}}
        </div>
    </div>
</template>

<script>
import marked from 'marked'
export default {
  name: 'Vmarked',
  data() {
    return {
      text: '',
      title: ''
    }
  },
  computed: {
    domarked() {
      return marked(this.text)
    }
  },
  components: {
    Vbutton
  }
}
</script>

<style lang="css" scoped>

.marked{
    width: 750px;
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
