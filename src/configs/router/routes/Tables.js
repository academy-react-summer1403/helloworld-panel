import { lazy } from 'react'

const Reactstrap = lazy(() => import('../../../components/Courses/tables/reactstrap/index'))

const TablesRoutes = [
  {
    path: '/tables/reactstrap',
    element: <Reactstrap />
  },
]

export default TablesRoutes
