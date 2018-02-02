<template>
    <div class="orderGood">
        <mt-cell title="2017-07-14  16:35:42" value="订单号：125453575585548"></mt-cell> 
            <mt-cell title="2017-07-14  16:35:42" value="订单号：125453575585548"></mt-cell> 
            <mt-cell title="共三件商品" is-link class="cell" to="orderlist">  
                <img slot="icon" src="static/img/load2.png" width="60" height="60">  
                <img slot="icon" src="static/img/load1.jpg" width="60" height="60">
                <img slot="icon" src="static/img/load1.jpg" width="60" height="60">
            </mt-cell> 
            <div class="shopList">
                <ul>
                    <li>
                        <div class="list">
                            <i class="iconfont icon-youhuijuan icon-green"></i>
                            <span>待支付</span>
                        </div>
                    </li>
                    <li>
                        <div class="ellipsis">......</div>
                    </li>
                    <li>
                        <div class="list">
                            <i class="iconfont icon-youhuijuan icon-green"></i>
                            <span>已支付</span>
                        </div>
                    </li>
                    <li>
                        <div class="ellipsis color-gray">......</div>
                    </li>
                    <li>
                        <div class="list">
                            <i class="iconfont icon-roundcheck"></i>
                            <span class="color-gray">拣货中</span>
                        </div>
                    </li>
                    <li>
                        <div class="ellipsis color-gray">......</div>
                    </li>
                    <li>
                        <div class="list">
                            <i class="iconfont icon-yunshuzhongwuliu-xianxing"></i>
                            <span class="color-gray">配送中</span>
                        </div>
                    </li>
                    <li>
                        <div class="ellipsis color-gray">......</div>
                    </li>
                    <li>
                        <div class="list">
                            <i class="iconfont icon-yunshuzhongwuliu-xianxing"></i>
                            <span class="color-gray">已送达</span>
                        </div>
                    </li>
                </ul>
            </div>
    </div>
</template>
<script>
export default {
  name:'orderun',
  data:function(){
      return{
        selected: '1'
      }
  }
}
</script>
<style lang="less" scoped>
     .orderGood{
        .mint-tab-container{
            margin-top: 10px;
            .shopList{
                background: #fff;
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
        }
    }
</style>
