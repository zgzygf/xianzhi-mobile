<template>
    <div class="receipt">
        <div class="tips">
          <i class="iconfont icon-tishishuoming" style="font-size:13px; color:orange;"></i> 
          开企业抬头发票，请准确填写对应的“纳税人识别号”，以免影响您的发票报销。
        </div>
        <div class="classify">
            <h5>发票类型</h5>
            <ul class="list">
                <li>
                    <a href="">电子发票</a>
                </li>
                <li>
                    <a href="" class="active">纸质发票</a>
                </li> 
            </ul>
            <p>电子发票和纸质发票具备同等的法律效应，可支持报销入账</p>
        </div>
        <div class="classify">
            <h5>发票抬头</h5>
            <ul class="list">
                <li>
                    <a href="">个人</a>
                </li>
                <li>
                    <a href="" class="active">单位</a>
                </li> 
            </ul>
            <mt-field label="" value="请填写个人抬头" type="text"></mt-field>
        </div>
        <div class="classify">
            <h5>收票人信息</h5>
            <mt-field label="收票人手机" value="" type="tel"></mt-field>
            <mt-field label="收票人邮箱" value="用来接收电子发票邮件，可选填" type="email"></mt-field>
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
    .receipt{
        .tips{
            text-align: center;
            font-size: 12px;
            color: #999;
            padding: 5px 10px;
            background: #eee;
            border-bottom: 1px solid #ddd;
        }
        .classify{
            width: 100%;
            padding:10px 0;
            background: #fff;
            padding:10px;
            box-sizing:border-box;
            margin-top:10px;
            h5{
                color: #444;
                font-size: 16px;
                text-align: left;
                font-weight: normal; 
            }
            p{
                color: #666;
                font-size: 12px;
                text-align: left;
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
                    a.active{
                        background-color: #47b34f;
                        color: #fff;
                    }
                    
                }
            } 
            .mint-cell.mint-field{
                .mint-cell-wrapper{
                    padding:0;
                    background-image: none;
                    .mint-cell-value{
                        background:#f1f0f0;
                        padding-right: 5px;
                        border-radius: 5px;
                        font-size: 14px;
                        .mint-field-core{
                            padding:6px 12px;
                            background:#f1f0f0;
                            color: #d1d1d1;
                            
                        }   
                    }
                    .mint-cell-title{
                        .mint-cell-text{
                            color:#959595; 
                        }
                    }
                }
            }
            .mint-cell:last-child{
                background-image: none;
            }
        }
         .footer-bottom{
            position: absolute;
            display: flex;
            margin: 0 auto;
            width: 100%;
            padding:0 10px;
            box-sizing: border-box;
            bottom:  10px;
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
