/***********************************************
 *
 * MIT License
 *
 * Copyright (c) 2016 珠峰课堂,Ramroll
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */

var { verifyAlipaySign } = require("../util/alipay_signer")
var qs = require('qs')
var Order = require('../model').Order;
var {assert} = require('chai')

describe('alipay', function() {
  it('should notify sign verified', function () {
    const sample = { total_amount: '0.01',
      buyer_id: '2088102017182972',
      trade_no: '2017012121001004970266746517',
      body: '描述',
      notify_time: '2017-01-21 17:30:44',
      subject: 'nodejs实战',
      sign_type: 'RSA',
      buyer_logon_id: 'ram***@gmail.com',
      auth_app_id: '2016101002076612',
      charset: 'utf-8',
      notify_type: 'trade_status_sync',
      invoice_amount: '0.01',
      out_trade_no: '14849910336269548',
      trade_status: 'TRADE_SUCCESS',
      gmt_payment: '2017-01-21 17:30:44',
      version: '1.0',
      point_amount: '0.00',
      sign: 'Plk792sKMypBAViKW2QzAwEJKBJmQixx4eWyW777NDBsojEXLBQ56krkXJ8DfwXCjo6fX9Op3ZgLUGH8sIRmi6uOyp+l6Md8mYRaoO+edWY0gXTm7cH05fXFjystzN1ljMvuPqJ99lAlLvqmSenyXlhZ5zAmfoHtj00lDeYbtnE=',
      gmt_create: '2017-01-21 17:30:43',
      buyer_pay_amount: '0.01',
      receipt_amount: '0.01',
      fund_bill_list: '[{"amount":"0.01","fundChannel":"ALIPAYACCOUNT"}]',
      app_id: '2016101002076612',
      seller_id: '2088221872110871',
      notify_id: 'c1757296faa70e7a943bb6105d5f705nhi',
      seller_email: '1144709265@qq.com' };
    // var params = qs.parse("total_amount=2.00&buyer_id=2088102116773037&body=大乐透2.1&trade_no=2016071921001003030200089909&refund_fee=0.00&notify_time=2016-07-19 14:10:49&subject=大乐透2.1&sign_type=RSA2&charset=utf-8&notify_type=trade_status_sync&out_trade_no=0719141034-6418&gmt_close=2016-07-19 14:10:46&gmt_payment=2016-07-19 14:10:47&trade_status=TRADE_SUCCESS&version=1.0&sign=kPbQIjX+xQc8F0/A6/AocELIjhhZnGbcBN6G4MM/HmfWL4ZiHM6fWl5NQhzXJusaklZ1LFuMo+lHQUELAYeugH8LYFvxnNajOvZhuxNFbN2LhF0l/KL8ANtj8oyPM4NN7Qft2kWJTDJUpQOzCzNnV9hDxh5AaT9FPqRS6ZKxnzM=&gmt_create=2016-07-19 14:10:44&app_id=2015102700040153&seller_id=2088102119685838&notify_id=4a91b7a78a503640467525113fb7d8bg8e")
    assert.equal(true, verifyAlipaySign(sample))
  })

  it('should update order', function (done) {

    const promise = Order.findById("588104cffb829056066e8f69")
    promise.then(order => {
      console.log(order)
      Order.update({ _id: order._id }, { $set: { flowno: 'noxxxxx' }}, function(err, n){
        console.log(err)
        console.log(n)
        done()
      })
       
    })
  })
})