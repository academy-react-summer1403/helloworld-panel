// ** React Imports
import { Fragment } from 'react'

// ** Reactstrap Imports
import { Row, Col } from 'reactstrap'

// ** Demo Components
import WizardVertical from './WizardVertical'

// ** Custom Components
import BreadCrumbs from '../../common/breadcrumbs'

const Wizard = () => {
  return (
    <Fragment>
      <BreadCrumbs title='افزودن دوره' data={[{ title: 'دوره ها' }, { title: 'افزودن دوره' }]} />
      <Row>
        <Col sm='12'>
          <WizardVertical />
        </Col>
      </Row>
    </Fragment>
  )
}
export default Wizard
