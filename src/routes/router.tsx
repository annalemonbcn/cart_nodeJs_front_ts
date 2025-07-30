import type { JSX } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import ProtectedRoute from './protectedRoute'
import type { PageRoute } from './types'
import { routes } from './routes'

const renderRoutes = (routeList: PageRoute[]): JSX.Element[] =>
  routeList.map((route) => {
    const element =
      route.isWrapper || !route.component ? undefined : route.protected ? (
        <ProtectedRoute>{<route.component />}</ProtectedRoute>
      ) : (
        <route.component />
      )

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
