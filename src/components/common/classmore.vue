<template>
   <div>
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
   </div>
</template>
<script>
export default {   
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
};  
</script>
<style lang="less" scoped>
     .classify{
        width: 100%;
        display: flex;
        position:fixed;
        top: 50px;
        bottom: 55px;
        overflow-y: scroll;     
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
                            width: 25%;
                            box-sizing: border-box;

                            img{
                                width: 100%;
                                margin: 5px auto;
                                height:60px;
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


