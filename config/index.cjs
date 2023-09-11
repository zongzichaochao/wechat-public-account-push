/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxa1ab780158b43419',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '821b5a0aebafde05ba6a970cd54df401',

  PROVINCE: '安徽',
  CITY: '六安',

  USERS: [
    {
      // 想要发送的人的名字
      name: '梦雅',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oRp2y6qIsjTVQNUgM3IkwBAi1eis',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '3UVfd5FcJfJO_YOlG2RHu5KkXfcEYL3AFknEekx6-CA',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-16',
      festivals: [
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '梦雅', year: '2004', date: '12-16',
        },
        {
          type: '节日', name: '相识纪念日', year: '2023', date: '09-01',
        },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '3UVfd5FcJfJO_YOlG2RHu5KkXfcEYL3AFknEekx6-CA',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oRp2y6qIsjTVQNUgM3IkwBAi1eis',
    }
  ],
  LITERARY_PREFERENCE: "",

  LOVE_DATE:"2023-09-01",
}

module.exports = USER_CONFIG

