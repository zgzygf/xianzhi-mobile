<template>
    <div>
        <div class="index">
            <div class="swipe-wrapper">
                <mt-swipe :auto="3000" ref="swipeWrapper">
                    <mt-swipe-item>
                        <img src="static/img/banner3.jpg" alt="">
                    </mt-swipe-item>
                    <mt-swipe-item>
                        <img src="static/img/banner3.jpg" alt="">
                    </mt-swipe-item>
                    <mt-swipe-item>
                        <img src="static/img/banner3.jpg" alt="">
                    </mt-swipe-item>
                </mt-swipe>
                <div class="index-search">
                    <div class="saom">
                        <a href="/saomiao">
                            <i class="iconfont icon-wodedingdan"></i>
                        </a>
                    </div>
                    <div class="input">
                        <input type="text">
                    </div>
                    <div class="ico">
                        <a href="/indexsearch">
                            <i class="iconfont icon-search" style="font-size:19px;"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="banner">
                <div class="photo">
                    <img src="static/img/text.jpg" alt="">
                </div>
            </div>
            <div class="shopList">
                <ul>
                    <li v-for="data in datas">
                        <a href="">
                            <img :src="data.imgSrc" alt="">    
                        </a>  
                        <p>{{data.p}} </p>
                        <span>{{data.span}}</span>
                    </li>
                </ul>
            </div>
            <div class="bn">
                <img src="static/img/bn_02.jpg" alt="">
            </div>
            <div class="shopList">
                <ul>
                    <li v-for="data in datas">
                        <a href="">
                            <img :src="data.imgSrc" alt="">    
                        </a> 
                        <p>{{data.p}} </p>
                    </li>
                </ul>
            </div>
        </div>
        <footGuide></footGuide>
    </div>
</template>

<script>
import footGuide from '../../components/footer/footGuide'
export default {
  data:function(){
      return{
          datas:[
              {
                imgSrc:"static/img/load1.jpg",
                p:"新鲜蔬菜水果",
                span:"￥3.8"
              },
              {
                imgSrc:"static/img/load1.jpg",
                p:"进口香蕉",
                span:"￥8.8"
              },
              {
                imgSrc:"static/img/load2.png",
                p:"新鲜橙子",
                span:"￥6.8"
              }
             
          ]
      }
  },
   methods: {
      
    },
    components:{
        footGuide
    },
}
</script>
<style lang="less">
.index{
    overflow-y: scroll;
    position: fixed;
    bottom: 58px;
    top: 0;
    .swipe-wrapper{
        width: 100%;
        height: 300px;
        position: relative;
        .mint-swipe{
            .mint-swipe-items-wrap{
                img{
                    max-width: 100%;
                    height: 100%;
                }
            }
            .mint-swipe-indicators{
                .mint-swipe-indicator{
                    background-color: #fff;
                    opacity: 1;
                }
                .mint-swipe-indicator.is-active{
                    background-color: #16ea7f;
                } 
            }
        }
        .index-search{
            position: absolute;
            top: 20px;
            height: 30px;
            line-height: 30px;
            width: 100%;
            display: flex;
            .saom{
                width: 30px;
                margin-left: 20px;
                height: 30px;
                border-radius: 15px;
                background: #fed489;
                i{
                   font-size: 16px;
                   color: #fff;
                }
            }
            .input{
                width: 200px;
                height: 30px;
                border-radius: 20px;
                margin: 0 auto;
                line-height: 1px;
                input{
                    border: none;
                    height: 100%;
                    width: 100%;
                    border-radius: 20px;
                    background-color: #fed489;
                    color: #fff;
                    padding: 0 10px;
                    box-sizing: border-box;
                }
            }
            .ico{
                width: 30px;
                margin-right: 20px;
                height: 30px;
                border-radius: 15px;
                background-color: #fed489;
                i{
                    color: #fff;
                    font-size: 16px;
                }
            }
        }
    }
    .banner{
        width: 100%;
        background: #fff;
        padding: 8px;
        box-sizing: border-box;
        .photo{
            width:150px;
            height: 60px;
            margin: 0 auto;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
    .shopList{
        width: 100%;
        background: #fff;
        display: inline-block;
        ul{
            display: inline-block;
            width: 100%;

            li{
                width: 33.3%;
                box-sizing: border-box;
                padding: 8px;
                float: left;
                border-right: 1px solid #ddd;
                img{
                    width: 100%;
                    height: 60px;
                    margin: 10px auto;
                }
                p{
                    font-size: 12px;
                    color:#999;
                    text-align: left;
                }
                span{
                    display: block;
                    color: orange;
                    font-size: 16px;
                    margin: 10px 0;
                    text-align: left;
                }
            }
        }
    }
    .bn{
        width: 100%;
        height: 50px;
        img{
            max-width: 100%;
            height: 100%;
        }
    }
}
</style>


