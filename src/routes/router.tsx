import type { JSX } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import ProtectedRoute from './protectedRoute'
import { routes } from './routes'
import type { PageRoute } from './types'

const renderRoutes = (routeList: PageRoute[]): JSX.Element[] =>
  routeList.map((route) => {
    let element

    if (route.isWrapper || !route.component) {
      element = undefined
    } else if (route.protected) {
      element = <ProtectedRoute>{<route.component />}</ProtectedRoute>
    } else {
      element = <route.component />
    }

    return (
      <Route key={route.name} path={route.path} element={element}>
        {route.children && (
          <>
            {renderRoutes(route.children)}
            {route.isWrapper && (
              <Route
                index
                element={
                  <Navigate
                    to={
                      route.redirectTo ? route.redirectTo : route.children?.[0]?.path ? route.children[0].path : '/home'
                    }
                    replace
                  />
                }
              />
            )}
          </>
        )}
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
