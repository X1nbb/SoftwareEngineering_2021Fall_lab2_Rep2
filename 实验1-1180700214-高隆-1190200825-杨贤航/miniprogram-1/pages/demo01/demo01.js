// pages/demo01/demo01.js

/**
 * import eval5
 */
import { Interpreter } from "eval5";
const ctx = {};
const interpreter = new Interpreter(ctx, {
    rootContext: window,
	timeout: 1000,
});

/**
 * 一些常量的定义
 */
var PI = 3.14159265358979323846;
var E = 2.7182818284590452354;



Page({

  /**
   * 页面的初始数据
   */
  data: {
      string : ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }, 


  /**
   * 用户点击数字和运算符
   */
  confirmNum:function(e){
    this.setData({
        string: this.data.string + e.currentTarget.dataset.id
      });
  },


  /**
   * 用户点击退格键
   */
  back:function(e){
    this.setData({
        string: this.data.string.substring(0, this.data.string.length - 1)
      });
  },

  /**
   * 重置
   */
  reset:function(e){
    this.setData({
        string: ""
      });
  },

  /**
   * 运算
   */
  equals:function(e){
    if(this.data.string === "")
    return;
    this.setData({
        string: cal(this.data.string)
      });
  },

  /**
   * 计算sin值
   */
  sin:function(){
    if(this.data.string === "")
    return;
    this.setData({
        string: calSin(cal(this.data.string))
      });
  },

  /**
   * 计算cos值
   */
  cos:function(){
    if(this.data.string === "")
    return;
    this.setData({
        string: calCos(cal(this.data.string))
      });
  },

  /**
   * 计算tan值
   */
  tan:function(){
    if(this.data.string === "")
    return;
    this.setData({
        string: calTan(cal(this.data.string))
      });
  },

  /**
   * 转换为弧度值
   */
  toRadians:function(){
    if(this.data.string === "")
    return;
    this.setData({
        string: toRadians(cal(this.data.string))
      });
  },

  /**
   * 转换为角度值
   */
  toDegree:function(){
    if(this.data.string === "")
    return;
    this.setData({
        string: toDegrees(cal(this.data.string))
      });
  }
  
})

function cal(str1){
  let result;
  try {
    result = interpreter.evaluate(str1);
  } catch (error) {
    return str1;
  }
  return result;
}

function calSin(str1){
  let result;
  try {
    result = interpreter.evaluate(Math.sin(str1));
  } catch (error) {
    return str1;
  }
  return result;
}

function calCos(str1){
  let result;
  try {
    result = interpreter.evaluate(Math.cos(str1));
  } catch (error) {
    return str1;
  }
  return result;
}

function calTan(str1){
  let result;
  try {
    result = interpreter.evaluate(Math.tan(str1));
  } catch (error) {
    return str1;
  }
  return result;
}

function toRadians(str1){
  let result;
  try {
    result = interpreter.evaluate(str1 / 180.0 * PI);
  } catch (error) {
    return str1;
  }
  return result;
}

function toDegrees(str1){
  let result;
  try {
    result = interpreter.evaluate(str1 * 180.0 / PI);
  } catch (error) {
    return str1;
  }
  return result;
}