<template>
   <div class="swipe-gun">
       <mt-cell-swipe class="main" :right="rightButtons"> 
            <label slot="icon" class="mint-checklist-label">
                <span class="mint-checkbox">
                    <input type="checkbox" class="mint-checkbox-input" value="">
                    <span class="mint-checkbox-core"></span>
                </span>
            </label> 
            <img src="static/img/load1.jpg" alt="" width="50" height="50" style="float:left;">
            <div class="content">
                <p> <mt-badge type="warning">促销</mt-badge> 苹果</p>
                <a>纯手工，无公害</a>
                <b>
                    ￥5.50
                    <div>
                        <a class="btn">+</a>
                        <b>3</b>
                        <a class="btn">-</a>
                    </div>
                </b>
            </div>   
        </mt-cell-swipe>  
   </div>
</template>
<script>
export default {
  created() {
    this.rightButtons = [
      {
        content: "加入收藏夹",
        style: { background: "lightgray", color: "#fff" }
      },
      {
        content: "删除",
        style: { background: "#ff9933", color: "#fff" },
        handler: () => this.$messagebox("确定删除？")
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
<style lang="less">
.swipe-gun {
  .mint-cell-swipe.main {
    margin-top: 10px;
    .mint-cell-wrapper {
      .mint-cell-title {
        flex: 0;
        .checkbox {
          background: #fff;
          width: 20px;
          height: 20px;
        }
        .mint-checklist-label {
          .mint-checkbox-input:checked + .mint-checkbox-core {
            background-color: #ff9934;
            border-color: #ff9934;
          }
        }
      }
      .mint-cell-value {
        img {
          margin: 0 5px;
        }
        .content {
          padding: 8px 0;
          text-align: left;
          p {
            font-size: 14px;
            color: #444;
            padding-bottom: 8px;
            span {
              width: auto;
              padding: 3px 10px;
              border-radius: 8px;
              background: #ff9934;
              color: #fff;
              font-size: 12px;
              margin-right: 8px;
            }
          }
          a {
            font-size: 12px;
            color: #999;
            display: block;
          }
          b {
            margin-top: 15px;
            color: #ff9934;
            display: block;
            font-weight: normal;
            div {
              position: absolute;
              right: 10px;
              bottom: 6px;
              display: flex;
              .btn {
                display: inline-block;
                padding: 6px 6px;
                border-radius: 50%;
                border: 0;
                background: #fff;
                color: #999;
                border: 2px solid #ccc;
                text-align: center;
                &:hover {
                  background: #eee;
                  border: 1px solid #eee;
                }
              }
              b {
                line-height: 26px;
                margin: 0 8px;
              }
            }
          }
        }
      }
    }
    .mint-cell-right {
      .mint-cell-swipe-button {
        line-height: 80px;
      }
    }
  }
}
</style>

