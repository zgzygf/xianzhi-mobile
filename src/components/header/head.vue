<template>
   <div class="headTop">
        <mt-navbar class="page-part" v-model="selected">  
            <mt-tab-item id="1">全部</mt-tab-item>  
            <mt-tab-item id="2">待付款</mt-tab-item>  
            <mt-tab-item id="3">待收货</mt-tab-item>
            <mt-tab-item id="4">已完成</mt-tab-item>
            <mt-tab-item id="5">已取消</mt-tab-item>  
        </mt-navbar>  
    
        <div>  
        <mt-cell class="page-part" title="当前选中">{{ selected }}</mt-cell>  
        </div>  
    
        <!-- tabcontainer -->  
        <mt-tab-container v-model="selected">  
            <mt-tab-container-item id="1">  
                <mt-cell v-for="n in 10" :key="n.id" :title="'全部内容 ' + n" />  
            </mt-tab-container-item>  
            <mt-tab-container-item id="2">  
                <mt-cell v-for="n in 4" :key="n.id" :title="'待付款 ' + n" />  
            </mt-tab-container-item>  
            <mt-tab-container-item id="3">  
                <mt-cell v-for="n in 6" :key="n.id" :title="'待收货' + n" />  
            </mt-tab-container-item>
            <mt-tab-container-item id="4">  
                <mt-cell v-for="n in 6" :key="n.id" :title="'已完成' + n" />  
            </mt-tab-container-item> 
            <mt-tab-container-item id="5">  
                <mt-cell v-for="n in 6" :key="n.id" :title="'已取消 ' + n" />  
            </mt-tab-container-item>   
        </mt-tab-container> 
   </div>
</template>
<script>  
export default {  
  name: 'page-navbar',  
  
  data() {  
    return {  
      selected: '1'  
    };  
  }  
};  
</script>  
<style lang="less" scoped>

</style>
