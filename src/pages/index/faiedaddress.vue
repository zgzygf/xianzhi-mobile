<template>
    <div>
       <searchTop></searchTop>
       <div class="inaddress"> 
           <div class="list">
               <strong>当前定位：</strong>
               <span>定位失败，点击重试</span>
           </div>
           <div class="list">
               <strong>历史定位：</strong>
               <span>银川金凤</span>
               <span>北京朝阳</span>
           </div>
       </div>
    </div>
</template>

<script>
import searchTop from '../../components/common/searchTop'
export default {
  name:'inaddress',
  data:function(){
    return{
       
    }
  },
  components:{
    searchTop
    }
}
</script>
<style lang="less">
    .mint-search{
        height: auto;
    }
    .inaddress{
        width: 100%;
        margin-top: 10px;
        background: #fff;
        min-height: 100%;
        .list{
            height: 38px;
            line-height: 34px;
            text-align: left;
            padding:3px 10px;
            border-bottom: 1px solid #ddd;
            strong{
                font-size: 14px;
                color: #444;
            }
            span{
                width: auto;
                height: 32px;
                line-height: 32px;
                background: #e6e6e6;
                font-size: 12px;
                border-radius: 16px;
                padding:5px 10px;
            }
        }
    }
</style>

