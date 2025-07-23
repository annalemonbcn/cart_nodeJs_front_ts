import type { JSX } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import ProtectedRoute from './protectedRoute'
import type { PageRoute } from './types'
import { routes } from './allRoutes'

const renderRoutes = (routeList: PageRoute[], basePath = ''): JSX.Element[] =>
  routeList.flatMap((route) => {
    const fullPath = basePath + route.path

    const element = route.component ? <route.component /> : <div>Not Found</div>
    const wrappedElement = route.protected ? <ProtectedRoute>{element}</ProtectedRoute> : element

    const children = route.children ? renderRoutes(route.children, fullPath + '/') : null

    return (
      <Route key={fullPath} path={fullPath} element={wrappedElement}>
        {children}
        {route.children && <Route index element={<Navigate to={route.children[0].path} replace />} />}
      </Route>
    )
  })

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/shop" replace />} />
    {renderRoutes(routes)}
  </Routes>
)

export default AppRouter
