<template>
    <div class="paysuccess">
        <div class="tips">
            <i class="iconfont icon-roundcheck"></i>
            <span>下单成功&nbsp!</span>
        </div>
        <p>您的订单号：201707220756</p>
        <p>订单将于[2017-07-22 16:00-20:00]安排配送</p>
        <p>请保持电话畅通</p>
        <div class="btn-group">
            <button class="button--warning">
                <a href="/order">查看订单</a>  
            </button>
            <button class="button--warning" style="margin-left:10px;">
                <a href="/shopindex">继续购物</a>    
            </button>
        </div>
    </div>
</template>
<script>
export default {
  
}
</script>
<style lang="less" scoped>
    .paysuccess{
        width: 100%;
        .tips{
            margin: 100px auto 30px;
            i{
                font-size: 60px;
                color: #ff9933;
                display: block;
            }
            span{
                display: block;
                color: #ff9933;
                padding:8px 0;
            }   
        }
        p{
            color: #999;
            font-size: 12px;
        }
        .btn-group{
            width: 100%;
            text-align: center;
            margin-top: 40px;
            .button--warning{
                background-color: #ff9933;
                color: #fff;
                display: inline-block;
                padding: 6px 20px;
                border: 0;
                box-sizing: border-box;
                color: inherit;
                font-size: 18px;
              
                outline: 0;
                overflow: hidden;
                position: relative;
                text-align: center;
                border-radius: 20px;
                a{
                    color: #fff;
                    font-size: 14px;
                }
            }
        }
    }
</style>
