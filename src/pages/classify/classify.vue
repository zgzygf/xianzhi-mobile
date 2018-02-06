<template>
    <div>
        <!--顶部搜索开始-->
        <classSearch></classSearch>
        <!--顶部搜索结束-->
        <classmore></classmore>
        <footGuide></footGuide>
</div>
   
</template>
<script>  
import classSearch from '../../components/common/classSearch'
import classmore from '../../components/common/classmore'
import footGuide from "../../components/footer/footGuide"
export default {   
 data:function(){
     return{}
 },
  components:{classSearch,classmore, footGuide} 
};  
</script>  
<style lang="less" scoped>
      
</style>
