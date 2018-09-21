
let database = [
  {
    id: '1',
    icon: 'home',
    name: '首页',
    route: '/dashboard',
  },
  {
    id: '2',
    //bpid: '1',
    name: '用户管理',
    icon: 'user',
    route: '/user',
  },
  {
    id: '21',
    mpid: '-1',
    bpid: '2',
    name: '用户详情',
    route: '/user/detail',
  },
   {
    id: '3',
    //bpid: '1',
    name: '广告管理',
    icon: 'api',
    route: '/poster',
  },
  {
    id: '4',
    //bpid: '1',
    name: '商品管理',
    icon: 'code-o',
    route: '/product',
  },
  {
    id: '5',
    //bpid: '1',
    name: '订单管理',
    icon: 'shopping-cart',
  },
  {
    id: '5-1',
    bpid: '5',
    mpid: '5',
    name: '订单列表',
    route: '/order',
  },
  {
    id: '5-2',
    bpid: '5',
    mpid: '5',
    name: '订单导入',
    route: '/order/import',
  },
  {
    id: '6',
    name: '提现管理',
    icon: 'bars',
  },
  {
    id: '6-1',
    bpid: '6',
    mpid: '6',
    name: '提现审核',
    route: '/deposit',
  },
  {
    id: '6-2',
    bpid: '6',
    mpid: '6',
    name: '历史提现',
    route: '/deposit/history',
  },
  {
    id: '7',
    name: '版本管理',
    route: '/version',
    icon: 'tool',
  },
  {
    id: '8',
    name: '发票管理',
    route: '/invoice',
    icon: 'file-text',
  },
  
  
  /*{
    id: '3',
    bpid: '1',
    name: '请求',
    icon: 'api',
    route: '/request',
  },*/
  /*{
    id: '4',
    bpid: '1',
    name: 'UI 资源',
    icon: 'camera-o',
  },
  {
    id: '41',
    bpid: '4',
    mpid: '4',
    name: '图标',
    icon: 'heart-o',
    route: '/UIElement/iconfont',
  },*/
  // {
  //   id: '42',
  //   bpid: '4',
  //   mpid: '4',
  //   name: 'DataTable',
  //   icon: 'database',
  //   route: '/UIElement/dataTable',
  // },
  /*{
    id: '43',
    bpid: '4',
    mpid: '4',
    name: '下拉',
    icon: 'bars',
    route: '/UIElement/dropOption',
  },*/
  /*{
    id: '44',
    bpid: '4',
    mpid: '4',
    name: 'Search',
    icon: 'search',
    route: '/UIElement/search',
  },*/
  // {
  //   id: '45',
  //   bpid: '4',
  //   mpid: '4',
  //   name: '56pxor',
  //   icon: 'edit',
  //   route: '/UIElement/editor',
  // },
  // {
  //   id: '46',
  //   bpid: '4',
  //   mpid: '4',
  //   name: 'layer (Function)',
  //   icon: 'credit-card',
  //   route: '/UIElement/layer',
  // },
  /*{
    id: '5',
    bpid: '1',
    name: '图形资源',
    icon: 'code-o',
  },
  {
    id: '51',
    bpid: '5',
    mpid: '5',
    name: 'ECharts',
    icon: 'line-chart',
    route: '/chart/ECharts',
  },
  {
    id: '52',
    bpid: '5',
    mpid: '5',
    name: 'highCharts',
    icon: 'bar-chart',
    route: '/chart/highCharts',
  },
  {
    id: '53',
    bpid: '5',
    mpid: '5',
    name: 'Rechartst',
    icon: 'area-chart',
    route: '/chart/Recharts',
  },*/
  /*{
    id: '7',
    bpid: '1',
    name: '清单',
    icon: 'shopping-cart',
    route: '/post',
  },
  {
    id: '8',
    bpid: '1',
    name: '订单管理',
    icon: 'database',
    route: '/order',
  },*/

  /*{
    id: '6',
    bpid: '1',
    name: 'Test Navigation',
    icon: 'setting',
  },
  {
    id: '61',
    bpid: '6',
    mpid: '6',
    name: 'Test Navigation1',
    route: '/navigation/navigation1',
  },
  {
    id: '62',
    bpid: '6',
    mpid: '6',
    name: 'Test Navigation2',
    route: '/navigation/navigation2',
  },
  {
    id: '621',
    bpid: '62',
    mpid: '62',
    name: 'Test Navigation21',
    route: '/navigation/navigation2/navigation1',
  },
  {
    id: '622',
    bpid: '62',
    mpid: '62',
    name: 'Test Navigation22',
    route: '/navigation/navigation2/navigation2',
  },*/
]


module.exports = {
    list : database
}