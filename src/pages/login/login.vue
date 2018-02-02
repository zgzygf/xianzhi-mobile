<template>
   <div class="Login">
       <!--logo开始-->
        <div class="logo">
            <img src="static/img/logo1.png" alt="">
        </div>
       <!--logo结束-->
       <!--search结束-->
        <form class="form"> 
            <i class="iconfont icon-people"></i>
            <input class="search_in" type="text" placeholder="请输入手机账号" />
        </form>
        <form class="form"> 
            <i class="iconfont icon-people"></i>
            <input class="search_in" type="password" placeholder="请输入密码" />
        </form>
        <p class="p_tip">忘记密码?</p>
        <mt-button type="warning">登录</mt-button>
        <p class="bottom-cz">
            <a href="">验证码快速登录</a>
            <button type="default">
                <a href="zclogin">立即注册</a>
            </button>
        </p>
        <div class="bottom-posi">
            <p class="third">
                第三方登录
            </p>
            <div class="ewm">
                <a href="">
                    <img src="static/img/weixin.png" alt="">
                </a>
            </div>
        </div>      
       <!--search结束-->
   </div>
</template>
<script>
export default {
  name:"login",
}
</script>
<style lang="less" scoped>
    .Login{
        width: 100%;
        box-sizing: border-box;
        padding: 10px;
        .logo{
            max-width: 100%;
            margin: 70px auto 0;
            img{
                margin: 0 auto;
            }
        }
        .form{
            width: 100%;
            background-color: #fff;
            border: solid 1px #ddd;
            border-radius: 20px;
            height: 40px;
            line-height: 40px;
            display: flex;
            margin-top: 30px;
            i{ margin-left:10px; }
            input{
                border: none;
                padding: 0 10px;
                width: 70%;
            }
        }
        .p_tip{
            font-size: 14px;
            color: orange;
            text-align: right;
            margin-top: 5px;
        }
        .mint-button--warning{
            background-color: rgb(255,153,52);
            color: #fff;
            width: 100%;
            margin-top: 30px;
        }
        .bottom-cz{
             margin-top: 10px;
            a{
                float: left;
                color: #333;
                font-size: 14px;
            }
            .mint-button--default{
                float: right;
                height: 22px;
                line-height: 22px;
                font-size: 14px;
                background-color:rgb(204, 204, 204);
                color: #fff;
            }
            button{
                float: right;
                border: none;
                padding:3px 10px;
            }
        } 
        .bottom-posi{ 
            right: 0;
            bottom: 0;
            left: 0;
            position: absolute;
            text-align: center;
            .third{
                display: inline-block;
                font-size: 14px;
                color: #333;
            }
            .ewm{
                margin: 0 auto;
                max-width: 60px;
                height: 60px;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
</style>


