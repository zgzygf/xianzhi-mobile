<template>
    <div>
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
        <div class="classify">
        <mt-navbar class="page-part" v-model="selected">  
            <mt-tab-item id="1">常用采购</mt-tab-item>  
            <mt-tab-item id="2">精品蔬菜</mt-tab-item>  
            <mt-tab-item id="3">精选肉类</mt-tab-item>
            <mt-tab-item id="4">即烹美食</mt-tab-item>
            <mt-tab-item id="5">海鲜水产</mt-tab-item>
            <mt-tab-item id="6">粮油杂货</mt-tab-item>
            <mt-tab-item id="7">方便素食</mt-tab-item>
            <mt-tab-item id="8">精品水果</mt-tab-item>    
        </mt-navbar>   
    
        <!-- tabcontainer -->  
        <mt-tab-container v-model="selected">  
            <mt-tab-container-item id="1">  
               常用采购
            </mt-tab-container-item>  
            <mt-tab-container-item id="2">  
                <div class="content" v-for="n in datas">
                    <h5>{{n.h5}}</h5>
                    <ul class="list">
                        <li>
                            <img :src="n.imgSrco" alt="蔬菜">
                            <p>{{n.cm}}</p>
                        </li>
                        <li>
                            <img :src="n.imgSrct" alt="蔬菜">
                            <p>{{n.cz}}</p>
                        </li>
                        <li>
                            <img :src="n.imgSrctr" alt="蔬菜">
                            <p>{{n.apple}}</p>
                        </li>
                         <li>
                            <img :src="n.imgSrctr" alt="蔬菜">
                            <p>{{n.cm}}</p>
                        </li>
                    </ul>
                </div> 
            </mt-tab-container-item>  
            <mt-tab-container-item id="3">  
                <div class="content" v-for="n in datas">
                    <h5>{{n.h5}}</h5>
                    <ul class="list">
                        <li>
                            <img :src="n.imgSrco" alt="蔬菜">
                            <p>{{n.cm}}</p>
                        </li>
                        <li>
                            <img :src="n.imgSrct" alt="蔬菜">
                            <p>{{n.cz}}</p>
                        </li>
                        <li>
                            <img :src="n.imgSrctr" alt="蔬菜">
                            <p>{{n.apple}}</p>
                        </li>
                         <li>
                            <img :src="n.imgSrctr" alt="蔬菜">
                            <p>{{n.cm}}</p>
                        </li>
                    </ul>
                </div>  
            </mt-tab-container-item>
            <mt-tab-container-item id="4">  
                <div class="content" v-for="n in datas">
                    <h5>{{n.h5}}</h5>
                    <ul class="list">
                        <li>
                            <img :src="n.imgSrco" alt="蔬菜">
                            <p>{{n.cm}}</p>
                        </li>
                        <li>
                            <img :src="n.imgSrct" alt="蔬菜">
                            <p>{{n.cz}}</p>
                        </li>
                        <li>
                            <img :src="n.imgSrctr" alt="蔬菜">
                            <p>{{n.apple}}</p>
                        </li>
                         <li>
                            <img :src="n.imgSrctr" alt="蔬菜">
                            <p>{{n.cm}}</p>
                        </li>
                    </ul>
                </div>   
            </mt-tab-container-item> 
            <mt-tab-container-item id="5">  
                <div class="content" v-for="n in datas">
                    <h5>{{n.h5}}</h5>
                    <ul class="list">
                        <li>
                            <img :src="n.imgSrco" alt="蔬菜">
                            <p>{{n.cm}}</p>
                        </li>
                        <li>
                            <img :src="n.imgSrct" alt="蔬菜">
                            <p>{{n.cz}}</p>
                        </li>
                        <li>
                            <img :src="n.imgSrctr" alt="蔬菜">
                            <p>{{n.apple}}</p>
                        </li>
                         <li>
                            <img :src="n.imgSrctr" alt="蔬菜">
                            <p>{{n.cm}}</p>
                        </li>
                    </ul>
                </div>   
            </mt-tab-container-item>  
             <mt-tab-container-item id="6">  
                <div class="content" v-for="n in datas">
                    <h5>{{n.h5}}</h5>
                    <ul class="list">
                        <li>
                            <img :src="n.imgSrco" alt="蔬菜">
                            <p>{{n.cm}}</p>
                        </li>
                        <li>
                            <img :src="n.imgSrct" alt="蔬菜">
                            <p>{{n.cz}}</p>
                        </li>
                        <li>
                            <img :src="n.imgSrctr" alt="蔬菜">
                            <p>{{n.apple}}</p>
                        </li>
                         <li>
                            <img :src="n.imgSrctr" alt="蔬菜">
                            <p>{{n.cm}}</p>
                        </li>
                    </ul>
                </div>   
            </mt-tab-container-item> 
            <mt-tab-container-item id="7">  
                方便素食
            </mt-tab-container-item>
            <mt-tab-container-item id="8">  
                精品水果
            </mt-tab-container-item>        
        </mt-tab-container> 
   </div>
   <footGuide></footGuide>
</div>
   
</template>
<script>  
import footGuide from "../../components/footer/footGuide"
export default {  
  name: 'page-navbar',  
  
  data() {  
    return {  
      selected: '2' ,
      datas:[
          {
            h5:"叶菜类",
            imgSrco:"static/img/yxc.jpg",
            imgSrct:"static/img/yxc.jpg",
            imgSrctr:"static/img/load1.jpg",
            imgSrct:"static/img/load2.png",
            cm:"油曼菜",
            cz:"橙子",
            apple:"苹果"
          },
          {
            h5:"水果",
            imgSrco:"static/img/yxc.jpg",
            imgSrct:"static/img/yxc.jpg",
            imgSrctr:"static/img/load2.png",
            imgSrct:"static/img/load1.jpg",
            cm:"空心菜",
            cz:"橙子",
            apple:"苹果"
          },
      ] 
    };  
  },
  components:{ footGuide} 
};  
</script>  
<style lang="less" scoped>
      .index-search{
            background:#2ec748;
            padding:10px 0;
            height: 30px;
            line-height: 30px;
            width: 100%;
            display: flex;
            .saom{
                width: 30px;
                margin-left: 20px;
                height: 30px;
                border-radius: 15px;
                background: #fff;
                i{
                   font-size: 16px;
                   color: #333;
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
                    background-color: #fff;
                    color: #333;
                    padding: 0 10px;
                    box-sizing: border-box;
                }
            }
            .ico{
                width: 30px;
                margin-right: 20px;
                height: 30px;
                border-radius: 15px;
                background-color: #fff;
                i{
                    color: #333;
                    font-size: 16px;
                }
            }
        }
    .classify{
        width: 100%;
        display: flex;
        position: absolute;
        height: 100%;      
        .mint-navbar{
            display: block;
            width: 100px;
            float: left;
            height: 100%;
            .mint-tab-item.is-selected{
                border-bottom: 0!important;
                border-left: 3px solid #2ec748;
                background: #f5f5f5;
            }
        }
        .mint-tab-container{
            width: 100%;
            margin-left: 10px;
            .mint-tab-container-item{
                .content{
                    width: 100%;
                    display: block;

                    h5{
                        margin:15px 0;
                        border-left: 2px solid #2ec748;
                        text-align: left;
                        font-size: 14px;
                        padding:0 5px;
                    }
                    .list{
                        display: inline-block;
                        width: 100%;
                        background:#fff;
                        li{  
                            float: left;
                            display: inline-block;
                            padding:0 4px;
                            img{
                                max-width: 65px;
                                height: 50px;
                                margin: 5px auto;
                            }
                            p{
                                color: #999;
                                font-size: 14px;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
