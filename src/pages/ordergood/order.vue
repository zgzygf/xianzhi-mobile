<template>
    <div class="orderGood">
        <mt-navbar class="page-part" v-model="selected">  
            <mt-tab-item id="1">全部</mt-tab-item>  
            <mt-tab-item id="2">待付款</mt-tab-item>  
            <mt-tab-item id="3">待收货</mt-tab-item>
            <mt-tab-item id="4">已完成</mt-tab-item>
            <mt-tab-item id="5">已取消</mt-tab-item>  
        </mt-navbar>  
        <!-- tabcontainer -->  
        <mt-tab-container v-model="selected">  
            <mt-tab-container-item id="1">  
                <orderun></orderun>
                <mt-cell title="" class="cell-h5">  
                   <h5>￥388.8</h5>
                </mt-cell> 
                
            </mt-tab-container-item>  
            <mt-tab-container-item id="2">  
                <orderun></orderun> 
                <div class="cell-fk">  
                   <h5>￥388.8</h5>
                   <mt-button type="success">微信</mt-button>
                   <mt-button type="success">支付宝</mt-button>  
                </div> 
            </mt-tab-container-item>  
            <mt-tab-container-item id="3">  
                <mt-cell v-for="n in 6" :key="n.id" :title="'待收货' + n" />  
            </mt-tab-container-item>
            <mt-tab-container-item id="4">  
                <orderun></orderun>
            </mt-tab-container-item> 
            <mt-tab-container-item id="5">  
                <mt-cell v-for="n in 6" :key="n.id" :title="'已取消 ' + n" />  
            </mt-tab-container-item>   
        </mt-tab-container> 
        <footGuide></footGuide>
    </div>
</template>

<script>
import orderun from '../../components/order/orderun'
import footGuide from '../../components/footer/footGuide'
export default {
  name:'order',
  data:function(){
      return{
          selected: '1'  
      }
  },
  components:{
    orderun,footGuide
    },
}
</script>
<style lang="less">
    .orderGood{
        .mint-tab-container{
            margin-top: 10px;
            .shopList{
                background: #fff;
                padding: 10px 0;
                ul{
                    display: flex;
                    li{
                        width: 11%;
                        .list{
                            i{display: block;}
                            span{ color: #2ec748; font-size: 12px;}
                            span.color-gray{ color:#999;}
                        }
                        .ellipsis{
                            overflow: hidden;
                            text-overflow: ellipsis;
                            color: #2ec748;
                        }
                        .ellipsis.color-gray{ color: #999;}
                    }
                }
            }
            .mint-cell.cell{
                padding-bottom: 5px;
                .mint-cell-title{
                    position: relative;
                    span{
                        position: absolute;
                        left: 0px;
                        top: 0px;
                        line-height: 32px;
                        color: #999;
                    }
                    img{
                        margin-top: 30px;
                        margin-right: 8px;
                    }
                }
            }
            .mint-cell.cell-h5{
                min-height:30px;
            }
            .mint-cell-title{
                text-align: left;
                font-size: 14px;
            }
            .mint-cell-value{
                font-size: 14px;

            }
            .mint-cell img{float: left;}
            h5{
                color: orange;
                text-align: right;
                background: #fff;
                font-size: 14px;
                padding: 0 10px;
                margin-top: 2px;
            }
            .cell-fk{
                width: 100%;
                display: inline-block;
                background: #fff;
                padding: 8px 10px;
                border-top: 1px solid #ddd;
                box-sizing: border-box;
                h5{
                    float: left;
                    line-height: 32px;
                }
                .mint-button--success{
                    height: 32px;
                    background: #2ec748;
                    color: #fff;
                    float: right;
                    margin-left: 10px;
                    font-size: 14px;
                }
            }
        }
    }
</style>


