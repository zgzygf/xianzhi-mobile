<template>
   <div class="saomiao">
       <mt-navbar class="page-part" v-model="selected">  
            <mt-tab-item id="1">综合</mt-tab-item>  
            <mt-tab-item id="2">销量</mt-tab-item>  
            <mt-tab-item id="3">价格</mt-tab-item>   
        </mt-navbar>     
        <!-- tabcontainer -->  
        <mt-tab-container v-model="selected" style="margin-top:10px;">  
            <mt-tab-container-item id="1">  
                <div class="page-cell">   
                    <mt-cell-swipe v-for="n in datas" :key="n.id" :right="rightButtons">
                        <img slot="icon" :src="n.imgSrc" width="50" height="65">  
                        <div slot="title" class="right">
                            <p>{{n.name}}</p> 
                            <p class="href">{{n.jsd}}</p>
                            <b>{{n.shp}}
                                <div>
                                    <a class="btn">+</a>
                                    <b>3</b>
                                    <a class="btn">-</a>
                                </div>
                            </b>
                        </div>     
                    </mt-cell-swipe>  
                </div>  
            </mt-tab-container-item>  
            <mt-tab-container-item id="2">  
               2
            </mt-tab-container-item>  
            <mt-tab-container-item id="3">  
               3
            </mt-tab-container-item>
        </mt-tab-container> 
        
   </div>
</template>

<script>  
  export default {  
    data:function(){
        return{
            datas:[
                {
                    imgSrc:"static/img/yxc.jpg",
                    name:"新鲜汉堡球生菜新鲜蔬菜圆生菜500g",
                    jsd:"绿色健康，无公害",
                    shp:"￥6.8"
                },
                {
                    imgSrc:"static/img/load2.png",
                    name:"新鲜橙子500g",
                    jsd:"绿色健康，无公害",
                    shp:"￥8.8"
                }
            ],
             selected: '1'  
        }
    },
    created() {  
      this.rightButtons = [  
        {  
          content: '取消',  
          style: { background: 'lightgray', color: '#fff' }  
        },  
        {  
          content: '删除',  
          style: { background: '#ff9933', color: '#fff' },  
          handler: () => this.$messagebox('确定删除？')  
        }  
      ]; 
    },  
    methods: {  
      leftButtonHandler(evt) {  
        console.log(123);  
      }  
    }  
  };  
</script>  
<style lang="less" >
   .saomiao{
       .page-cell{
           .mint-cell-wrapper{
               .mint-cell-title{ 
                   span{
                       display: block;
                       float: left;
                       padding:5px;
                       text-align: left;  
                       img{
                           float: left;
                          
                       }
                       .right{
                            width: 100%;
                            overflow: hidden;
                                text-overflow: ellipsis;
                                width: 100%;
                            p{
                                font-size: 14px;
                                color: #333;
                                white-space:nowrap; 
                                overflow: hidden;
                                text-overflow: ellipsis;
                                width: 100%;
                            }
                            b{
                                display: block;
                                color: orange; 
                                font-weight: normal;
                                div{
                                    position: absolute;
                                    right: 10px;
                                    bottom: 6px;
                                    display: flex;
                                    .btn{
                                        display: inline-block;
                                        padding:5px 8px;
                                        border-radius: 50%;
                                        border: 0;
                                        background: #fff;
                                        color: #999;
                                        border: 1px solid #ccc;
                                        text-align: center;
                                        &:hover{
                                            background:#eee;
                                            border: 1px solid #eee;
                                        }
                                    }
                                    b{
                                      line-height: 26px;
                                      margin: 0 8px;  
                                    }
                                }
                            }
                            p.href{
                                font-size: 12px;
                                color: #999;
                                padding:8px 0;
                                white-space:nowrap; 
                                overflow: hidden;
                                text-overflow: ellipsis;
                            }  
                       }
                      
                   }     
               }
           }
           .mint-cell-right{
               .mint-cell-swipe-button{
                   line-height: 76px;
               }
           }
       }
   }
</style>
