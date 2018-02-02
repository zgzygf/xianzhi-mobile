<template>
   <div class="saomiao">
        <div class="page-cell">   
            <mt-cell-swipe v-for="n in 2" :key="n.id" is-link :right="rightButtons" to="/orderlist">
                <img slot="icon" src="static/img/logo.png" width="50" height="85">  
                <div slot="title" class="right">
                    <p>通贵手工精品豆腐500g</p> 
                    <b>￥6.8</b>
                    <p class="href">http://mint-ui.github.io/docs/#/en2/cell-swipe</p>
                    <p class="p">2018-02-23</p>
                </div> 
                
            </mt-cell-swipe>  
        </div>  
   </div>
</template>

<script>  
  export default {  
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
                           width: 206px;
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
                                padding:8px 0;
                                font-weight: normal;
                            }
                            p.href{
                                font-size: 12px;
                                color: #999;
                                white-space:nowrap; 
                                overflow: hidden;
                                text-overflow: ellipsis;
                            }
                            p.p{
                                position: relative;
                                text-align: right;
                                padding-top: 10px;
                                color: #999;
                            }
                       }
                      
                   }     
               }
           }
           .mint-cell-right{
               .mint-cell-swipe-button{
                   line-height: 90px;
               }
           }
       }
   }
</style>
