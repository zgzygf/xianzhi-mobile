<template>
   <div>
        <mt-field label="收获人" placeholder="收货人姓名"></mt-field>
        <mt-field label="性别" placeholder="" type=""></mt-field>
        <!-- <a class="mint-cell mint-field">  
          <div class="mint-cell-left"></div>  
          <div class="mint-cell-wrapper">  
            <div class="mint-cell-title">  
              <span class="mint-cell-text">性别</span>  
            </div>  
            <div class="mint-cell-value">  
              <div class="mint-cell-value is-link" @click="sexVisible = true">  
                <input placeholder="请选择性别" type="text" class="mint-field-core text-right" readonly="readonly" v-model="data.sexText">  
                <div class="mint-field-clear" style="display: none;"><i class="mintui mintui-field-error"></i></div>  
              </div>  
            </div>  
            <i class="mint-cell-allow-right"></i>  
            <mt-actionsheet :actions="sexs" v-model="sexVisible" cancel-text="取消"></mt-actionsheet>  
          </div>  
        </a>   -->
        <mt-field label="手机号码" placeholder="配送员联系您的电话" type="number"></mt-field> 
        <mt-field label="所在城市" placeholder="请选择城市" type="city"></mt-field> 
        <mt-field label="所在城市" placeholder="请选择城市" type="city"></mt-field> 
        <mt-field label="详细地址" placeholder="请输入楼门号等详细地址信息" type="city"></mt-field> 
         <div class="footer-bottom">
            <button class="button--success"> <a href=""> 删除当前地址</a></button>
        </div>
   </div>
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>
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
</style>
