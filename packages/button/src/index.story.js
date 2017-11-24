import React from 'react'
import { storiesOf } from '@storybook/react'

import { Button } from './'


storiesOf('core/Button', module)
  .add('Without props', () => (
    <div>
      <Button>Simple button</Button>
    </div>
  ))
  .add('Disabled', () => (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Button disabled>Disabled button</Button>
      <Button>Original button</Button>
    </div>
  ))
  .add('Elegant', () => (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <Button elegant>Elegant button</Button>
      <Button>Original button</Button>
    </div>
  ))