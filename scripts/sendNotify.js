const got = require('got')

const SCKEY = process.env.SCKEY

const sendNotify = (title, message) => {
  console.log(`title1: ${title1}\n`)
  console.log(`message: ${message}\n`)
  if (SCKEY) {
    got(`https://sctapi.ftqq.com/SCT165783T9plspdMOhHPuYXpj8lEG6pmm.send`, {
      searchParams: {
        title: title,
        desp: message,
      },
      responseType: 'json',
    })
      .then(({ body }) => {
        if (body.errno === 0) {
          console.log('server酱发送通知消息成功\n')
        } else if (body.errno === 1024) {
          console.log(`server酱发送通知消息异常: ${body.errmsg}\n`)
        } else {
          console.log(`server酱发送通知消息异常\n${JSON.stringify(body)}`)
        }
      })
      .catch((err) => {
        console.log('发送通知调用API失败！！\n')
        console.log(err)
      })
  } else {
    console.log('您未提供server酱的SCKEY，取消微信推送消息通知\n')
  }
}

module.exports = sendNotify
