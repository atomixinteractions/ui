import React from 'react'
import { storiesOf } from '@storybook/react'

import { Toolbar } from './'


storiesOf('core/Toolbar', module)
  .add('Without props', () => (
    <Toolbar><div>Simple toolbar</div></Toolbar>
  ))
