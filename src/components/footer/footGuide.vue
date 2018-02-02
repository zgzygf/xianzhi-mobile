<template>
   <div>
    <mt-tabbar >
        <mt-tab-item id="tab1">
            <i class="iconfont icon-home_light" slot="icon"></i>
            <a href="/"> 首页</a>
        </mt-tab-item>
        <mt-tab-item id="tab2">
            <i class="iconfont icon-all" slot="icon"></i>
            <a href="/classify">分类</a>
        </mt-tab-item>
        <mt-tab-item id="tab3">
            <i class="iconfont icon-cart" slot="icon"></i>
            购物车
        </mt-tab-item>
        <mt-tab-item id="tab4">
            <i class="iconfont icon-wodedingdan icon-green" slot="icon"></i>
            <a href="/order">订单</a>
        </mt-tab-item>
        <mt-tab-item id="tab5">
            <i class="iconfont icon-people" slot="icon"></i>
            <a href="/login">我的</a>
        </mt-tab-item>
    </mt-tabbar>
   </div>
</template>

<script>
export default {
  
}
</script>
