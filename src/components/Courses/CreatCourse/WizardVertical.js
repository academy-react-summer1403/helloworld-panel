// ** React Imports
import { useRef, useState } from 'react'

// ** Custom Components
import Wizard from '../../common/wizard'

// ** Steps
import Address from './steps/Address'
import SocialLinks from './steps/SocialLinks'
import PersonalInfo from './steps/PersonalInfo'
import AccountDetails from './steps/AccountDetails'

const WizardVertical = () => {
  // ** Ref
  const ref = useRef(null)

  // ** State
  const [stepper, setStepper] = useState(null)

  const steps = [
    {
      id: 'account-details',
      title: 'مرحله اول',
      subtitle: 'اطلاعات را وارد کنید',
      content: <AccountDetails stepper={stepper} type='wizard-vertical' />
    },
    {
      id: 'personal-info',
      title: 'مرحله دوم',
      subtitle: 'اطلاعات را وارد کنید',
      content: <PersonalInfo stepper={stepper} type='wizard-vertical' />
    },
    {
      id: 'step-address',
      title: 'مرحله سوم',
      subtitle: 'اطلاعات را وارد کنید',
      content: <Address stepper={stepper} type='wizard-vertical' />
    },
    {
      id: 'social-links',
      title: 'مرحله چهارم',
      subtitle: 'اطلاعات را وارد کنید',
      content: <SocialLinks stepper={stepper} type='wizard-vertical' />
    }
  ]

  return (
    <div className='vertical-wizard'>
      <Wizard
        type='vertical'
        ref={ref}
        steps={steps}
        options={{
          linear: false
        }}
        instance={el => setStepper(el)}
      />
    </div>
  )
}

export default WizardVertical