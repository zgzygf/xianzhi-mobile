<template>
   <div class="searchTop">
         <mt-search
            v-model="value"
            cancel-text="取消"
            placeholder="搜索">
        </mt-search>
   </div>
</template>
<script>
export default {
  name:'searchTop'
}
</script>
<style lang="less">
    .searchTop{
        .mint-searchbar{
            background-color: #2ec748;
            .mint-searchbar-inner .mintui-search{
                font-size: 16px;
            }
            .mint-searchbar-core{ margin-left:5px;}
            .mint-searchbar-cancel{
                color: #fff;
                font-size: 16px;
            }
        }
    }
</style>

