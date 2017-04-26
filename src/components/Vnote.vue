<template lang="html">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h3 class="panel-title ">继续vue的及时应用</h3>
                  </div>
                  <div class="panel-body">
                    <div class="row">
                        <div class="col-lg-3">
                            <Vnotelist></Vnotelist>
                        </div>
                        <div class="col-lg-9">
                            <Vnoteeditor></Vnoteeditor>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vnotelist from './Vnotelist'
import Vnoteeditor from './Vnoteeditor'

export default {
    name:'Vnote',
    data(){
        return {

        }
    },
    components:{
        Vnotelist,
        Vnoteeditor
    }
}
</script>

<style lang="css">
</style>
