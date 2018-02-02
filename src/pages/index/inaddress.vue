<template>
    <div>
       <searchTop></searchTop>
       <div class="inaddress"> 
           <div class="list">
               <strong>当前定位：</strong>
               <span>银川金凤区新昌东路</span>
           </div>
           <div class="list">
               <strong>历史定位：</strong>
               <span>银川金凤</span>
               <span>北京朝阳</span>
           </div>
           <div class="city">
               <h5>热门城市：</h5>
               <ul>
                   <li v-for="li in citys">
                       <span>{{li.city}}</span>
                   </li> 
               </ul>
           </div>
           <mt-index-list>
               <h5>全部城市：</h5>
                <mt-index-section index="A">
                    <mt-cell title="阿拉善"></mt-cell>
                    <mt-cell title="安阳"></mt-cell>
                    <mt-cell title="安庆"></mt-cell>
                </mt-index-section>
                <mt-index-section index="B">
                    <mt-cell title="北京"></mt-cell>
                </mt-index-section>
                <mt-index-section index="Z">
                    <mt-cell title="中宁"></mt-cell>
                    <mt-cell title="中卫"></mt-cell>
                </mt-index-section>
            </mt-index-list>
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
                    width: 33.3%;
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
                        padding:8px 30px;
                    }
                }
            }
        }
        .mint-indexlist{ 
            h5{
                font-size: 14px;
                color: #444;
                text-align: left;
                padding:5px 0 5px 10px;
            }
            .mint-indexlist-content{
                 height: auto!important;
                .mint-indexsection{
                    text-align: left;
                }
            }
        }
    }
</style>

