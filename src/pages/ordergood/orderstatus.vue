<template>
    <div class="orderstatus">
        <dl v-for="data in datas">
            <dt>
                <img :src="data.imgSrc" alt="">
            </dt>
            <dd>
                <span>{{data.span}}</span>
                <b>{{data.b}} <strong>{{data.stro}}</strong></b>
                <p>{{data.p}} <span>{{data.ps}}</span></p>
            </dd>
        </dl>
        <div class="footer-bottom">
            <mt-button type="default">取消订单</mt-button>
        </div>
    </div>
</template>
<script>
export default {
  data:function(){
      return{
          datas:[
              {
                  imgSrc:'static/img/logo.png',
                  span:"已支付",
                  b:"订单支付成功",
                  stro:"",
                  p:"2017-04-25",
                  ps:"15:12:36"
              },
              {
                  imgSrc:'static/img/logo.png',
                  span:"待支付",
                  b:"订单已提交",
                  stro:"订单号：2555522",
                  p:"2017-07-15",
                  ps:"15:12:36"
              }
          ]
      }
  }
}
</script>
<style lang="less" scoped>
    .orderstatus{
        width: 100%;
        display: block;
        dl{
            display: block;
            width: 100%;
            box-sizing: border-box;
            padding: 8px 10px;
            background: #fff;
            border-bottom: 1px solid #ddd;
            dt{
                max-width: 50px;
                height: 50px;
                float: left;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            dd{
                padding-left: 60px;
                text-align: left;
                height: auto;
                span{
                    display: block;
                    font-size: 16px;
                    color: #333;
                }
                b{
                    color: #6e6e6e;
                    font-size: 12px;
                    display: block;
                    font-weight: normal;
                    strong{
                        color: #6e6e6e;
                        font-weight: normal;
                        margin-left: 10px;
                    }
                }
                p{
                    font-size: 12px;
                    color: #999;
                    span{
                        display: inline;
                        font-size: 12px;
                        color: #999;
                        margin-left: 10px;
                    }
                }
            }
        }
        .footer-bottom{
            position: absolute;
            display: flex;
            margin: 0 auto;
            width: 100%;
            bottom: 20px;
            left: 0;
            .mint-button--default{
                width: 90%;
                margin: 0 auto;
                background-color: #e6e6e6;
                color: #fff;
            }
        }
    }
</style>

