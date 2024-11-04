// ** React Imports
import { Fragment, useEffect } from 'react'

// ** Reactstrap Imports
import { Row, Col } from 'reactstrap'

// ** Third Party Components
import prism from 'prismjs'

// ** Demo Components
import TableBasic from './TableBasic'


// ** Custom Components
import Card from '../../../common/card-snippet'
import Breadcrumbs from '../../../common/breadcrumbs'

// ** API

// import getAllCourses  from "../../../../core/services/api/Coueses/getAllCoursesAdmin"

// ** Source Code
import {
  tableBasic,

} from './TableSourceCode'

const Tables = () => {
  useEffect(() => {
    prism.highlightAll()
  })

  return (
    <Fragment>
      <Breadcrumbs title='Reactstrap Tables' data={[{ title: 'Forms & Tables' }, { title: 'Tables' }]} />
      <Row>
        <Col sm='12'>
          <Card title='دوره ها' code={tableBasic} noBody>
            <TableBasic />
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}

export default Tables
