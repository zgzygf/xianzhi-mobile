<template>
   <div>
        <!--顶部搜索开始-->
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
        <!--顶部搜索结束-->
   </div>
</template>
<script>
export default {
  
}
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
</style>
