<template>
  <div class="msite">
    <div class="tab">
      <ul>
        <li>
          <img
            src="https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg"
            alt=""
          />
          <span>甜品饮品</span>
        </li>
        <li>
          <img
            src="https://fuss10.elemecdn.com/0/da/f42235e6929a5cb0e7013115ce78djpeg.jpeg"
            alt=""
          />
          <span>商超便利</span>
        </li>
        <li>
          <img
            src="https://fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg"
            alt=""
          />
          <span>美食</span>
        </li>
        <li>
          <img
            src="https://fuss10.elemecdn.com/d/38/7bddb07503aea4b711236348e2632jpeg.jpeg"
            alt=""
          />
          <span>简餐</span>
        </li>
        <li>
          <img
            src="https://fuss10.elemecdn.com/a/fa/d41b04d520d445dc5de42dae9a384jpeg.jpeg"
            alt=""
          />
          <span>新店特惠</span>
        </li>
        <li>
          <img
            src="https://fuss10.elemecdn.com/3/84/8e031bf7b3c036b4ec19edff16e46jpeg.jpeg"
            alt=""
          />
          <span>准时达</span>
        </li>
        <li>
          <img
            src="https://fuss10.elemecdn.com/d/49/7757ff22e8ab28e7dfa5f7e2c2692jpeg.jpeg"
            alt=""
          />
          <span>预订早餐</span>
        </li>
        <li>
          <img
            src="https://fuss10.elemecdn.com/e/7e/02b72b5e63c127d5bfae57b8e4ab1jpeg.jpeg"
            alt=""
          />
          <span>土豪推荐</span>
        </li>
      </ul>
    </div>
    <div class="near-business">
      <h5>附近商家</h5>
      <ul>
        <li>
          <div class="left">
            <img src="http://elm.cangdu.org/img/164ad0b6a3917599.jpg" alt="" />
          </div>
          <div class="right">
            <div class="title">
              <span class="brand">品牌</span>
              <span class="store-name">张咸蛋包饭</span>
            </div>
            <div class="two">
              <div class="evaluate">
                <span class="star">⭐⭐⭐⭐⭐<span>4.7</span></span>
                <span class="sales-volume">月售100单</span>
              </div>
              <div class="lab">
                <span>蜂鸟专送</span>
                <span>准时达</span>
              </div>
            </div>
            <div class="three">
              <div class="condition">
                <span>￥20起售</span> /
                <span>配送费￥2</span>
              </div>
              <div class="delivery-time">
                <span>130公里</span> /
                <span>1小时20分钟</span>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="left">
            <img src="http://elm.cangdu.org/img/164ad0b6a3917599.jpg" alt="" />
          </div>
          <div class="right">
            <div class="title">
              <span class="brand">品牌</span>
              <span class="store-name">张咸蛋包饭</span>
            </div>
            <div class="two">
              <div class="evaluate">
                <span class="star">⭐⭐⭐⭐⭐<span>4.7</span></span>
                <span class="sales-volume">月售100单</span>
              </div>
              <div class="lab">
                <span>蜂鸟专送</span>
                <span>准时达</span>
              </div>
            </div>
            <div class="three">
              <div class="condition">
                <span>￥20起售</span> /
                <span>配送费￥2</span>
              </div>
              <div class="delivery-time">
                <span>130公里</span> /
                <span>1小时20分钟</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MSite'
}
</script>

<style>
span {
  margin-right: 5px;
}
.msite {
  background-color: #f6f6f6;
}
.tab ul {
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 20px;
  margin-bottom: 15px;
  background-color: #fff;
}
.tab ul img {
  width: 50px;
  height: 50px;
  margin-bottom: 8px;
}
.tab ul li {
  width: calc(25vw);
  height: 100px;
  font-size: 13px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.near-business {
  width: 100vw;
  background-color: #fff;
}

.near-business h5 {
  font-weight: normal;
  color: #999;
  font-size: 13px;
  padding: 10px 10px 0 10px;
}
.near-business .right div,
.near-business .right span {
  transform: scale(0.9);
  color: #666;
}
.near-business ul {
  margin-top: 20px;
}
.near-business ul li {
  display: flex;
  align-items: center;
  font-size: 12px;
  height: 100px;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}
.near-business ul li img {
  width: 60px;
  height: 60px;
}
.near-business .right {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 100%;
}
.near-business .right .title .brand {
  font-size: 14px;
  background-color: #ffdd00;
  border-radius: 5px;
  margin-right: 5px;
  color: #000;
}

.near-business .title .store-name {
  font-size: 16px;
  color: #000;
  font-weight: 700;
}

.near-business .two,
.near-business .three {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.near-business .lab span:first-of-type {
  background-color: rgb(0, 98, 255);
  border-radius: 5px;
  color: #fff;
  padding: 0 2px;
}
.near-business .lab span:last-of-type {
  color: rgb(0, 98, 255);
  border-radius: 5px;
  border: 1px solid rgb(0, 98, 255);
  padding: 0 2px;
}

.near-business .star span {
  font-size: 15px;
  color: #ffa200;
}
</style>
