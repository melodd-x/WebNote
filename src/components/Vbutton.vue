<template lang="html">
    <button
    class="btn"
    :class="btnType"
    @click="clickHandler"
    >
        <slot>
        阿牛
        </slot>
    </button>
</template>

<script>
export default {
    name:'Vbutton',
    data(){
        return {

        }
    },
    props:{
        type:String
    },
    methods:{
        clickHandler(){
            this.$emit('click')
        }
    },
    computed:{
        btnType(){
            return {
                'btn-primary':this.type === 'primary'?true:false,
                'btn-info':this.type === 'info'?true:false,
                'btn-danger':this.type === 'danger'?true:false,
                'btn-success':this.type === 'success'?true:false,
                'btn-warning':this.type === 'warning'?true:false,
                'btn-default':this.type === 'default'?true:false
            }
        }
    }
}
</script>

<style lang="css" >


</style>
