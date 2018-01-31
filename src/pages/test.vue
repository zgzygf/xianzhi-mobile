<template>
   <div>
       <headTop></headTop>
       <footGuide></footGuide>
   </div>
</template>
<script>
import headTop from '../components/header/head'
import footGuide from '../components/footer/footGuide'
export default {
 name:"test",
 data:function(){
     return {

     }

 },
 components:{
  headTop,footGuide
},

}
</script>
<style lang="less" scoped>

</style>
