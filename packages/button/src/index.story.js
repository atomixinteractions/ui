import React from 'react'
import { storiesOf } from '@storybook/react'

import { Button } from './'


storiesOf('core/Button', module)
  .add('Without props', () => (
    <div>
      <Button>Simple button</Button>
    </div>
  ))
