const APIV1 = '/api/v1'
const APIV2 = '/api/v2'
const preUrl = 'http://localhost:8080/jfinal-admin/pintuan/console'
import env from './envConfig'

module.exports = {
  title:'吾家优品',
  name: '吾家优品',
  prefix: 'antdAdmin',
  footerText: '深圳  © 2018 pintuan',
  logo: '/logo.png',
  headLogo:'/favicon3b8804.ico',
  iconFontCSS: '/iconfont.css',
  iconFontJS: '/iconfont.js',
  CORS: [],
  openPages: ['/login'],
  apiPrefix: '/api/v1',
  APIV1,
  APIV2,
  api: {
    queryUserList: `${env.preUrl}/userManager/queryUserList`,  // 查询用户列表列表
    queryUserDetail: `${env.preUrl}/userManager/queryUserDetail`,  // 查询用户详情
    uploadUserUrl: `${env.preUrl}/userManager/uploadUserUrl`,  // 上传用户头像
    updateUser: `${env.preUrl}/userManager/updateUser`,  // 更新用户
    createUser: `${env.preUrl}/userManager/createUser`,  // 创建新用户
    deleteUser: `${env.preUrl}/userManager/deleteUser`,  // 删除用户
    uploadUserList: `${env.preUrl}/userManager/uploadUserList`,  // 导入用户名单
    downloadUserList: `${env.preUrl}/userManager/downloadUserList`,  // 导入用户名单


    queryPoster:`${env.preUrl}/poster/queryPoster`,  //查询广告列表
    deletePoster:`${env.preUrl}/poster/deletePoster`,  //删除广告
    updatePoster:`${env.preUrl}/poster/updatePoster`,  //更新广告
    addPoster:`${env.preUrl}/poster/addPoster`,  //添加广告
    userLogin: `${env.preUrl}/login`,
    userLogout: `${env.preUrl}/logout`,
    activeUser:`${env.preUrl}/activeUser`,
    posterFileUpload: `${env.preUrl}/poster/uploadImg`,

    queryProduct:`${env.preUrl}/product/queryProduct`,    //查询商品列表
    deleteProduct:`${env.preUrl}/product/deleteProduct`,  //删除商品
    updateProduct:`${env.preUrl}/product/updateProduct`,  //更新商品
    addProduct:`${env.preUrl}/product/addProduct`,        //添加商品
    productDefFileUpload: `${env.preUrl}/product/uploadDefaultImage`,  ////上传商品默认圖片
    uploadImage: `${env.preUrl}/product/uploadImage`,  // 商品圖片
    deleteProductImage: `${env.preUrl}/product/deleteProductImage`,  // 刪除商品圖片
    queryProductImgList: `${env.preUrl}/product/queryProductImgList`,  // 查询商品图片列表

    queryOrderList: `${env.preUrl}/order/queryOrderList`,  // 查询订单列表列表
    queryOrderDetail: `${env.preUrl}/order/queryOrderDetail`,  // 查询订单详情
    deleteOrder: `${env.preUrl}/order/deleteOrder`,  // 删除订单
    updateOrder: `${env.preUrl}/order/updateOrder`,  // 更新订单  
    createOrder: `${env.preUrl}/order/createOrder`,  // 创建新订单
    updateOrderState: `${env.preUrl}/order/updateOrderState`,  // 更新订单状态

    deleteAllUser: `${env.preUrl}/order/deleteAllUser`,  // 删除用户  
    deleteAllOrder: `${env.preUrl}/order/deleteAllOrder`,  // 删除订单
    importUser: `${env.preUrl}/order/importUser`,  // 导入订单  
    importOrder: `${env.preUrl}/order/importOrder`,  // 导入订单

    
    queryDepositList:`${env.preUrl}/deposit/queryDepositList`,    //查询提现列表
    depositShenhe:`${env.preUrl}/deposit/depositShenhe`,  //提现审核

    queryInvoiceList: `${env.preUrl}/invoice/queryInvoiceList`,  // 查询发票列表列表
    updateInvoiceState: `${env.preUrl}/invoice/updateInvoiceState`,  // 查询发票详情

    uploadAPK: `${env.preUrl}/uploadAPK`,  // 上传APK
    queryVersion: `${env.preUrl}/queryVersion`,  
    updateVersion: `${env.preUrl}/updateVersion`, 
      
    userInfo: `${APIV1}/userInfo`,
    users: `${APIV1}/users`,
    posts: `${APIV1}/posts`,
    user: `${preUrl}/user/:id`,
    dashboard: `${env.preUrl}/dashboard`,
    menus: `${APIV1}/menus`,
    weather: `${APIV1}/weather`,
    v1test: `${APIV1}/test`,
    v2test: `${APIV2}/test`,
  },
}
