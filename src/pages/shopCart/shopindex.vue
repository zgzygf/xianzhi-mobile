<template>
    <div class="shopindex">
        <div class="tips">
          <i class="iconfont icon-tishishuoming" style="font-size:13px; color:orange;"></i> 请确认您的位置处于当前区域商城内，否则无法配送
        </div>
        <mt-cell-swipe is-link class="cell-swipe">
            <i slot="icon" class="iconfont icon-wxbdingwei"></i>  
            <div class="content">
                <p>王哈哈 <span>15009580452</span> </p>
                <p>宁夏回族自治区银川市金凤区新昌东路5号</p>
            </div>   
        </mt-cell-swipe> 
        <swipe></swipe>
        <div class="allcheck">
            <label class="mint-checklist-label">
                <span class="mint-checkbox">
                    <input type="checkbox" class="mint-checkbox-input" value="">
                    <span class="mint-checkbox-core"></span>
                    <span class="mint-checkbox-label">全选</span>
                </span>
            </label>
            <div class="price">
                共计：
                <span>￥688.98</span>
            </div>
            <button class="button-success">
              <a href="/payment">选好了</a>  
            </button>
        </div>
        <footGuide></footGuide>
    </div>
</template>
<script>
import swipe from '../../components/common/swipe'
import footGuide from '../../components/footer/footGuide'
export default {
  name:'shopindex',
     data () {  
    return {  
        //存放所选选项  
            value:[],  
            //checklist设置  
            options : [ 
            {  
            label: '选项C',  
            value: 'C'  
            }
         ]  
    }  
  },  
    components:{
      swipe,footGuide
    } 
}
</script>

<style lang="less">
    .shopindex{
        .tips{
            text-align: center;
            font-size: 12px;
            color: #999;
            padding: 5px 0;
            background: #eee;
            border-bottom: 1px solid #ddd;
        }
        .cell-swipe{
            margin-top: 10px;
            border-bottom: 2px solid #ff9934;
            .content{
                margin-left: 10px;
                padding:10px 0;
                p{
                    font-size: 14px;
                    color: #333;
                    text-align: left;
                    padding: 8px 0 4px 0;
                    span{
                        float: right;
                    }
                }
            }
            .mint-cell-title{
              flex: 0;      
            }
        }
        .allcheck{
            width: 100%;
            position: fixed;
            bottom: 55px;
            background: #fff;
            .mint-checklist-label{
                float: left;
                line-height: 41px;
                .mint-checkbox-input:checked + .mint-checkbox-core {
                    background-color: #ff9934;
                    border-color:#ff9934;
                }
            }
            .price{
                display: inline-block;
                margin-left: 10px;
                line-height: 41px;
                float: left;
                span{
                    color: #ff9934;
                }
            }
            .button-success{
                float: right;
                border-radius: 0;
                background: #2ec748;
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
                a{
                    color: #fff;
                }
            }
        }
    }
</style>


