<template>
    <div class="header">
        <div class="header-icon" @click="showSidebar"><i class="icon">&#xe692;</i></div>
        <div class="header-cont">
            <div class="nav-item">
                <router-link to="/home/popular">热门</router-link>
            </div>
            <div class="nav-item">
                <router-link to="/collection">排行榜</router-link>
            </div>
            <div class="nav-item">
                <router-link to="/user">我的</router-link>
            </div>
        </div>
        <div class="header-icon">
            <router-link to="/search">
                <i class="icon">&#xe638;</i>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        showSidebar() {
            this.$store.dispatch(
            'setShowSidebar',true);
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/function';
.header {
    height: px2rem(100px);
    position:"absolute";
    top:0;
    left:0;
    line-height: px2rem(100px);
    text-align: center;
    background: #D4303B;
    display: flex;
    justify-content: space-between;
    color: #fff;
    font-size: px2rem(36px);
    .header-icon {
        flex: 0.5;
        cursor: pointer;
        .icon {
            font-size: px2rem(50px);
        }
    }
    .header-cont {
        flex: 2;
        margin: px2rem(5px) px2rem(50px) 0;
        display: flex;
        .nav-item {
            flex: 1;
            font-weight: 700;
            cursor: pointer;
            a {
                display: block;
                color: #fff;
                &.active {
                	font-weight:800;
                	font-size:px2rem(38px);
                }
            }
        }
    }
}
</style>