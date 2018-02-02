<template>
    <div>
       <searchTop></searchTop>
       <div class="indexsearch"> 
           <div class="city">
               <h5>大家都在搜</h5>
               <ul>
                   <li v-for="li in citys">
                       <span>{{li.city}}</span>
                   </li> 
               </ul>
           </div>
           <div class="city">
               <h5>搜索历史</h5>
               <ul class="ul-list">
                   <li v-for="li in citys">
                      {{li.city}}
                   </li> 
               </ul>
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
        citys:[
            {city:"银川"},
            {city:"杭州"},
            {city:"西安"},
            {city:"丽水"},
            {city:"石嘴山"},
            {city:"上海"},
            {city:"台州"},
            {city:"泰安"},
            {city:"兰州"}
        ]
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
    .indexsearch{
        width: 100%;
        background: #fff;
        min-height: 100%;
       .city{
            padding:5px 10px;
            min-height:100px;
            border-bottom: 1px solid #ddd;
            h5{
                font-size: 14px;
                color: #444;
                text-align: left;
                padding:5px 0;
            }
            ul{
                display: inline-block;
                width: 100%;
                li{
                    width:auto;
                    box-sizing: border-box;
                    padding:4px 7px;
                    float: left;
                    span{
                        width: 100%;
                        height: 18px;
                        line-height: 25px;
                        background: #e6e6e6;
                        font-size: 12px;
                        border-radius: 16px;
                        padding:6px 15px;
                    }
                }
            }
            .ul-list{
               display: inline-block;
                width: 100%;
                li{
                    box-sizing: border-box;
                    padding:8px 0px; 
                    width: 100%;
                    border-bottom: 1px solid #ddd;
                    font-size: 14px;
                    text-align: left;
                    color: #999;
                } 
            }
        }
    }
</style>

