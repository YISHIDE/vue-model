<template>
    <div style="position: absolute; left: 0; right: 0; top: 0; bottom: 0; background: #fff;">
        这是主页
        <div class="test " style=''></div>
        <!--<img src="asset/img/b.png" />-->
    </div>
</template>

<script>

    import INDEX from '../../../../views/index.vue'
    export default {
        extends:INDEX
    }
</script>
<style lang="less">
    @import '../../../../styles/index.less';
    .test{
        /*background: url("../../../../asset/img/a.jpg");*/
        /*width: 200px;*/
        /*height: 200px;*/
        /*transform: rotate(90deg);*/
    }
</style>