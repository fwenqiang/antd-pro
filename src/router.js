import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, Redirect, routerRedux } from 'dva/router'
import dynamic from 'dva/dynamic'
import App from 'routes/app'
import { LocaleProvider } from 'antd'
import enUS from 'antd/lib/locale-provider/en_US'

const { ConnectedRouter } = routerRedux

const Routers = function ({ history, app }) {
  const error = dynamic({
    app,
    component: () => import('./routes/error'),
  })
  const routes = [
    {
      path: '/dashboard',
      models: () => [import('./models/dashboard')],
      component: () => import('./routes/dashboard/'),
    }, {
      path: '/user',
      models: () => [import('./models/user')],
      component: () => import('./routes/user/'),
    },
    {
      path: '/user/account',
      models: () => [import('./models/user')],
      component: () => import('./routes/user/account/'),
    },{
      path: '/user/detail',
      //models: () => [import('./models/user/detail')],
      component: () => import('./routes/user/detail/'),
    }, {
      path: '/login',
      models: () => [import('./models/login')],
      component: () => import('./routes/login/'),
    },
    {
      path: '/poster',
      models: () => [import('./models/poster')],
      component: () => import('./routes/poster/'),
    },
    {
      path: '/product',
      models: () => [import('./models/product')],
      component: () => import('./routes/product/'),
    },
    {
      path: '/order',
      models: () => [import('./models/order')],
      component: () => import('./routes/order/'),
    },
    {
      path: '/order/import',
      models: () => [import('./models/order')],
      component: () => import('./routes/order/import'),
    },
    {
      path: '/deposit',
      models: () => [import('./models/deposit')],
      component: () => import('./routes/deposit/'),
    },{
      path: '/deposit/history',
      models: () => [import('./models/deposit')],
      component: () => import('./routes/deposit/history/'),
    },{
      path: '/version',
      models: () => [import('./models/version')],
      component: () => import('./routes/version/'),
    },{
      path: '/invoice',
      models: () => [import('./models/invoice')],
      component: () => import('./routes/invoice/'),
    },
  ]

  return (
    <ConnectedRouter history={history}>
      <LocaleProvider locale={enUS}>
        <App>
          <Switch>
            <Route exact path="/" render={() => (<Redirect to="/dashboard" />)} />
            {
            routes.map(({ path, ...dynamics }, key) => (
              <Route key={key}
                exact
                path={path}
                component={dynamic({
                  app,
                  ...dynamics,
                })}
              />
            ))
          }
            <Route component={error} />
          </Switch>
        </App>
      </LocaleProvider>
    </ConnectedRouter>
  )
}

Routers.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object,
}

export default Routers
