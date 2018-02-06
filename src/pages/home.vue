<template>
   <div class="ownindex">
       <div class="banner">
           <img src="static/img/mybner_01.jpg" alt="">
           <div class="title-tips">
               <div class="line">
                   <i class="iconfont icon-shezhi"></i>
                   <i class="iconfont icon-community"></i>
               </div>
           </div>
       </div>
       <div class="content">
           <div class="main">
               <div class="person">
                   <img src="static/img/logo.png" alt="">
               </div>
               <div class="container">
                   <p>  
                       <a href="#">王哈哈<span>企</span></a> 
                       <b>
                         <a href=""> 企业用户认证</a> 
                        </b>
                   </p>
                   <mt-progress :value="60">
                        <div slot="start">0%</div>
                        <div slot="end">100%</div>
                   </mt-progress>
                   <ul class="main-list">
                       <li>
                           <i class="iconfont icon-goodsfavor"></i>
                           <p>收藏商品</p>
                       </li>
                       <li>
                           <i class="iconfont icon-hongbao-xianxing"></i>
                           <p>退货/售后</p>
                       </li>
                       <li>
                           <i class="iconfont icon-wodedingdan"></i>
                           <p>待评价</p>
                       </li>
                   </ul>
               </div>
           </div>
           <div class="sidemain">
                <ul class="side-list">
                    <li>
                        <i class="iconfont icon-wodedingdan"></i>
                        <p>我的订单</p>
                    </li>
                    <li>
                        <i class="iconfont icon-bianji"></i>
                        <p>我的评价</p>
                    </li>
                    <li>
                        <i class="iconfont icon-wxbdingwei"></i>
                        <p>地址管理</p>
                    </li>
                    <li>
                        <i class="iconfont icon-service"></i>
                        <p>客户服务</p>
                    </li>
                    <li>
                        <i class="iconfont icon-help"></i>
                        <p>帮助中心</p>
                    </li>
                    <li>
                        <i class="iconfont icon-shujubiangeng"></i>
                        <p>意见反馈</p>
                    </li>
                    <li>
                        <i class="iconfont icon-goodsfavor"></i>
                        <p>账号安全</p>
                    </li>
                    <li>
                        <i class="iconfont icon-iconfontmingpian"></i>
                        <p>个人资料</p>
                    </li>
                </ul>
            </div>
       </div>
       <footGuide></footGuide>
   </div>
</template>

<script>
import footGuide from '../components/footer/footGuide'
export default {
  name:"home",
  data:function(){
     return {

     }

 },
 components:{
  footGuide
},
}
</script>

<style lang="less">
    .ownindex{
        .mint-search{
            height: auto;
        }
        .banner{
            width: 100%;
            height: 230px;
            position: relative;
            .title-tips{
                width: 100%;
                box-sizing: border-box;
                padding:0 10px;
                position: absolute;
                top: 20px;
                .line{
                    width: 100%;
                    i{
                        &:first-child{ float: left;}
                        float: right;
                        color: #fff;
                        font-size: 18px;
                    }
                }
            }
            img{
                max-width: 100%;
                height: 100%;
            }
        }
        .content{
            width: 100%;
            display: inline-block;
            .main{
                position: relative;
                top: -100px;
                background: #fff;
                margin:0 10px;
                .person{
                    text-align: center;
                    margin: 0 auto;
                    width: 100px;
                    height: 100px;
                    position: relative;
                    top: -50px;
                    background: #fff;
                    border-radius: 100%;
                    img{
                        width: 100%;
                        height: 100%;
                        border-radius: 100%;
                    }
                }
                .container{
                    width: 100%;
                    position: relative;
                    margin-top: -40px;
                    p{
                        text-align: center;
                        font-size: 16px;
                        a{
                            line-height: 34px;
                            color: #333;
                            span{
                            padding:5px;
                            background: #2ec748;
                            color: #fff;
                            border-radius: 100%;
                            font-size: 12px;
                            margin-left: 5px;
                            }
                        }
                        b{
                            position: absolute;
                            right: 0;
                            background: #ff9933;
                            color: #fff;
                            padding:0px 12px;
                            border-bottom-left-radius: 26px;
                            border-top-left-radius: 26px;
                            font-size: 14px;
                            a{
                                color: #fff;
                            }
                        }
                    }
                    .mt-progress{
                        margin-top: 10px;
                        padding:0 5px;
                        .mt-progress-content{
                            .mt-progress-progress{
                                background: #ff9933;
                            }
                        }
                    }
                    .main-list{
                        width: 100%;
                        display: inline-block;
                        margin-top: 10px;
                        li{
                            width:33.3%;
                            padding:8px 5px;
                            box-sizing: border-box;
                            text-align: center;
                            float: left;
                            i{
                                margin: 5px auto;
                            }
                            p{
                                font-size: 14px;
                                color: #333;
                            }
                        }
                    } 
                }
            }
            .sidemain{
                width: 100%;
                display: inline-block;
                box-sizing: border-box;
                padding:0 10px;
                .side-list{
                    width: 100%;
                    background: #fff;
                    position: relative;
                    margin-top: -90px;
                    display: inline-block;
                    li{
                        width: 25%;
                        padding:8px 5px;
                        box-sizing: border-box;
                        text-align: center;
                        float: left;
                        i{
                            margin: 5px auto;
                        }
                        p{
                            font-size: 14px;
                            color: #444;
                        }
                    }
                }
            }
        }
    }
</style>
