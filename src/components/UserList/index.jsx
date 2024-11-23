// ** User List Component
import Table from "./Table"
// ** Reactstrap Imports
import { Row, Col } from 'reactstrap'

// ** Custom Components
import StatsHorizontal from '@components/common/widgets/stats/StatsHorizontal'

// ** Icons Imports
import { User, UserPlus, UserCheck, UserX } from 'react-feather'

// ** Styles
import '@styles/react/apps/app-users.scss'

const Columns = () => {
  return (
    <div className='app-user-list'>
      <Row>
        <Col lg='3' sm='6'>
          <StatsHorizontal
            color='primary'
            statTitle='کاربران '
            icon={<User size={20} />}
            renderStats={<h3 className='fw-bolder mb-75'>364</h3>}
          />
        </Col>
        <Col lg='3' sm='6'>
          <StatsHorizontal
            color='danger'
            statTitle='اساتید'
            icon={<UserPlus size={20} />}
            renderStats={<h3 className='fw-bolder mb-75'>22</h3>}
          />
        </Col>
        <Col lg='3' sm='6'>
          <StatsHorizontal
            color='success'
            statTitle='دانشجویان'
            icon={<UserCheck size={20} />}
            renderStats={<h3 className='fw-bolder mb-75'>89</h3>}
          />
        </Col>
        <Col lg='3' sm='6'>
          <StatsHorizontal
            color='warning'
            statTitle='ادمین'
            icon={<UserX size={20} />}
            renderStats={<h3 className='fw-bolder mb-75'>54</h3>}
          />
        </Col>
      </Row>
      <Table/>
    </div>
  )
}

export default Columns
