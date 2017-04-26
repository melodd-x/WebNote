<template lang="html">
    <li class="list-group-item" @click="selectNote">
        <h4>{{this.note.title}}</h4>
        <p>{{this.note.date}}</p>
    </li>
</template>

<script>
export default {
    name:'Vnote-item',
    data(){
        return {

        }
    },
    props:{
        note:Object
    },
    methods:{
        //li点击事件
        selectNote(){
            this.$store.commit('selectNote',this.note)
        }
    }
}
</script>

<style lang="css" scoped>
li{
    cursor: pointer;

}
li:hover{
    background-color: #4a92cd;
}
h4{
    font-size: 14px;
    margin: 5px 0;
}
p{
    text-align: center;
    margin: 5px 0;
}
</style>
