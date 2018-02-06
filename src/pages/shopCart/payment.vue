<template>
    <div class="payment">
        <div class="classify">
            <p><i class="iconfont icon-youhuijuan"></i>支付方式</p>
            <ul class="list">
                <li>
                    <a href="">支付方式</a>
                </li>
                <li>
                    <a href="">货到付款</a>
                </li>
                <li>
                    <a href="">公司转账</a>
                </li>
            </ul>
        </div>
        <div class="classify" style="margin-top:10px;">
            <p><i class="iconfont icon-deliver"></i>配送方式</p>
            <ul class="list">
                <li>
                    <a href="">平台配送</a>
                </li>
                <li>
                    <a href="">营业点自取</a>
                </li> 
            </ul>
            <mt-cell title="送货时间" label="7月25日（周五）09-19:00" is-link>
                <span>修改时间</span>
            </mt-cell>
        </div>
        <div class="footer-bottom">
            <button class="button--warning"> <a href="/paysuccess">确定</a></button>
        </div>
    </div>
</template>
<script>
export default {
  
}
</script>
<style lang="less">
    .payment{
        width: 100%;
        .classify{
            width: 100%;
            padding:10px 0;
            background: #fff;
            padding:10px;
            box-sizing:border-box;
            p{
                color: #444;
                font-size: 14px;
                text-align: left;
                i{
                    color: #dfdfdf;
                    font-size: 16px;
                    margin-right: 5px;
                }
            }
            .list{
                display: inline-block;
                width: 100%;
                margin-top: 10px;
                li{
                    float: left;
                    margin: 5px;
                    a{
                        display: block;
                        padding:6px 15px;
                        color: #aaa;
                        background-color: #e6e6e6;
                        font-size: 12px;
                        border-radius: 20px;
                    }
                }
            } 
            .mint-cell{
                &:last-child{
                    background-image: none;//去掉下边线
                }
                .mint-cell-wrapper{
                    background-image: none;//去掉上边线
                    .mint-cell-title{
                        text-align: left;
                        .mint-cell-text{
                            font-size: 15px;
                        }
                    }
                    .mint-cell-value{
                        span{
                            font-size: 14px;
                        }
                    }
                }
            }
        }
        .footer-bottom{
            position: absolute;
            display: flex;
            margin: 0 auto;
            width: 100%;
            padding:0 10px;
            box-sizing: border-box;
            bottom:10px;
            left: 0;
            .button--warning{
                width: 100%;
                background-color:#ff9933;
                color: #fff;
                display: inline-block;
                padding: 0 12px;
                border: 0;
                box-sizing: border-box;
                color: inherit;
                font-size: 18px;
                height: 41px;
                outline: 0;
                overflow: hidden;
                position: relative;
                text-align: center;
                border-radius: 20px;
                a{
                    color: #fff;
                }
            }
        }
    }
</style>
