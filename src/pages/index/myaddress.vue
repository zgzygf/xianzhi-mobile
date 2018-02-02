<template>
   <div>
       <searchTop></searchTop>
       <div class="myaddress"> 
           <div class="list">
               <strong>当前定位：</strong>
               <span> <a href="">定位失败点击重试</a> </span>
           </div>
           <div class="list">
               <strong>我的地址：</strong>
           </div>
           <div class="pencil">
               <div class="left">
                   <div class="div">
                       <strong>王二小</strong>
                       <span>183xxxx2584</span>
                   </div>
                    <p>宁夏银川市金凤区新昌东路5号宇晨广告文化产业园4009室</p>
               </div>
               <div class="right">
                   <mt-button type="default">
                       <i class="iconfont icon-wodedingdan"></i>
                   </mt-button>
               </div>
           </div>
           <div class="pencil">
               <div class="left">
                   <div class="div">
                       <strong>王二小</strong>
                       <span>183xxxx2584</span>
                   </div>
                    <p>宁夏银川市金凤区新昌东路5号宇晨广告文化产业园4009室</p>
               </div>
               <div class="right">
                   <mt-button type="default">
                       <i class="iconfont icon-wodedingdan"></i>
                   </mt-button>
               </div>
           </div>
            <div class="footer-bottom">
                <button class="button--success"> <a href="/moreaddress"><i class="iconfont icon-wodedingdan"></i> 新增地址</a></button>
            </div>
       </div>
       
   </div>
</template>
<script>
import searchTop from '../../components/common/searchTop'
export default {
  name:'myaddress',
  data:function(){
      return{

      }
  },
   components:{
    searchTop
    },
}
</script>
<style lang="less" >
    .mint-search{
        height: auto;
    }
     .myaddress{
        width: 100%;
        margin-top: 10px;
        background: #fff;
        .list{
            height: 38px;
            line-height: 34px;
            text-align: left;
            padding:3px 10px;
            border-bottom: 1px solid #ddd;
            strong{
                font-size: 14px;
                color: #999;
            }
            span{
                width: auto;
                height: 32px;
                line-height: 32px;
                background: #e6e6e6;
                font-size: 12px;
                border-radius: 16px;
                padding:5px 10px;
                a{
                    color: #999;
                }
            }
        }
        .pencil{
            width: 100%;
            padding:8px 0;
            border-left: 0px solid #ff9933;
            display: inline-block;
            &:hover{
              border-left: 2px solid #ff9933;  
            }
            .left{
                width: 84%;
                float: left;
                border-right: 1px solid #ddd;
                text-align: left;
                padding:0 8px;
                box-sizing: border-box;
                .div{
                    strong{
                        font-size: 14px;
                        color: #999;
                    }
                    span{
                        font-size: 14px;
                        color: #999;
                        margin-left: 20px;
                    }
                }
                p{
                    font-size: 12px;
                    color: #ccc;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    width: 100%;
                    white-space:nowrap;
                }
            }
            .right{
                width: 14%;
                float: left;
                padding:0 5px;
                box-sizing: border-box;
                .mint-button--default{
                    background: #fff;
                    border: 0;
                    box-shadow:none;
                }
            }
        }
        .footer-bottom{
            position: absolute;
            display: flex;
            margin: 0 auto;
            width: 100%;
            bottom:  0px;
            left: 0;
            .button--success{
                width: 100%;
                background-color: #2ec748;
                color: #fff;
                border-radius: 0;
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
                a{
                    color: #fff;
                }
            }
        }
    }
</style>


