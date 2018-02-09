import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { Button } from './'


const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;

  & > * + * {
    margin-left: 2rem;
  }
`

storiesOf('core/Button', module)
  .add('Default', () => (
    <Wrapper>
      <Button onClick={action('default')}>Simple button</Button>
      <Button onClick={action('default')} disabled>Disabled button</Button>
    </Wrapper>
  ))
  .add('Primary', () => (
    <Wrapper>
      <Button.Primary onClick={action('primary')}>Simple button</Button.Primary>
      <Button.Primary onClick={action('primary')} disabled>Disabled button</Button.Primary>
    </Wrapper>
  ))
  .add('Danger', () => (
    <Wrapper>
      <Button.Danger onClick={action('danger')}>Simple button</Button.Danger>
      <Button.Danger onClick={action('danger')} disabled>Disabled button</Button.Danger>
    </Wrapper>
  ))
  .add('Warning', () => (
    <Wrapper>
      <Button.Warning onClick={action('warning')}>Simple button</Button.Warning>
      <Button.Warning onClick={action('warning')} disabled>Disabled button</Button.Warning>
    </Wrapper>
  ))
  .add('(compare)', () => (
    <Wrapper>
      <Button onClick={action('default')}>Button</Button>
      <Button.Primary onClick={action('primary')}>Button.Primary</Button.Primary>
      <Button.Danger onClick={action('danger')}>Button.Danger</Button.Danger>
      <Button.Warning onClick={action('warning')}>Button.Warning</Button.Warning>
      <Button onClick={action('disabled')} disabled>Button disabled</Button>
    </Wrapper>
  ))
