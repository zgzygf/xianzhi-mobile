<template>
   <div style="min-height:100%;">
       <classSearch></classSearch>
       <headTop></headTop>
       <footGuide></footGuide>
   </div>
</template>
<script>
import classSearch from '../components/common/classSearch'
import headTop from '../components/header/head'
import footGuide from '../components/footer/footGuide'
export default {
 name:"test",
 data:function(){
     return {

     }

 },
 components:{
  classSearch,headTop,footGuide
},

}
</script>
<style lang="less" scoped>

</style>
