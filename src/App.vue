<template>
<div id="app">
    <nav class="navbar navbar-default">
        <div class="container-fluid">

            <div class="navbar-header">
                <a class="navbar-brand" href="#">
                    <span class="glyphicon glyphicon-book bookico" aria-hidden="true"></span>
                    <!-- WebNote -->
                    <!-- <img alt="Brand" src="./assets/logo.png" height="32"> -->
                </a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <li>
                        <router-link to="/">主页</router-link>
                    </li>
                    <li>
                        <router-link to="/note">笔记</router-link>
                    </li>
                </ul>
                <form class="navbar-form navbar-right">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Search">
                    </div>
                    <button type="submit" class="btn btn-info">search</button>
                </form>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container-fluid -->
    </nav>

    <!-- <Vbutton type="primary" @click="say">button</Vbutton>
  <Vbutton type="info" @click="say">我是一个很长的按钮</Vbutton> -->


    <!--这里会切换两个页面,主页和笔记页面  -->
    <transition name="slide">
        <router-view></router-view>
    </transition>
</div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import Vbutton from './components/Vbutton'
import axios from 'axios'



export default {
    name: 'app',
    components: {

    },
    methods: {

    },
    data() {
        return {

        }
    },
    mounted() {

        axios.get('http://127.0.0.1:7502/users/getdata')
            .then(function(response) {
                console.log(response.data);
                this.$store.state.notes = response.data;
            }.bind(this))
            .catch(function(error) {
                console.log(error);
            });
    }

}
</script>

<style scoped>
.bookico {
    color: rgb(56, 178, 210);
}

.slide-enter-active {
    transition: all .3s .3s ease;
}

.slide-enter {
    transform: translateY(-30px);
    opacity: 0;
}

.slide-leave-active {
    transition: all .3s ease;
    transform: translateY(30px);
    opacity: 0;
}
</style>
