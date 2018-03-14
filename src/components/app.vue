
<style rel="stylesheet/less" lang="less">
    // @import '../styles/common.css';
    @import '../styles/index';
    @import '../asset/css/1px.css';
    @import '../asset/css/reset.css';

    .page{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
</style>
<template>
    <div>
        <transition :name="direction" mode="in-out">
            <keep-alive :include="includedComponents">
                <router-view   class="page"></router-view>
            </keep-alive>
        </transition>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                direction:'forward',
                includedComponents:"index"
            }
        },
        mounted () {


        },
        beforeDestroy () {

        },
        watch:{
            $route(to,from){

                let toDepth = to.path.split('/').length;
                let fromDepth = from.path.split('/').length;

                if (toDepth == fromDepth) {
//                    this.direction = 'vlc-ani-fade'
                } else if(toDepth > fromDepth) {
                    this.direction = 'vlc-ani-slide-right';
                } else if (toDepth < fromDepth) {

                    this.direction = 'vlc-ani-slide-left'
                } else {
                    this.direction = '';

                }
//        // 取野练的openid
//        if (env.isWechat && to.name !== 'login-quick') {
//
//          var has = getActivityOpenid.call(this);
//          if (!has) return;
//        }
//
//        if(!Cache.get(cache_keys.info))  setUserCache.call(this)

            },
        },
        methods: {

        },

    }
</script>
