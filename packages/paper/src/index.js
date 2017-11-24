import styled from 'styled-components'
import PropTypes from 'prop-types'

import { palette } from '@atomix-ui/theming'

import { shadows, shadowTransition } from '@atomix-ui/shadow'


export const Paper = styled.div`
  display: inline-block;
  background-color: ${palette('paper')};
  box-shadow: ${p => shadows[p.z]};
  color: inherit;
  will-change: box-shadow;
  transition: ${shadowTransition};
`

Paper.propTypes = {
  z: PropTypes.oneOf(Object.keys(shadows)),
}

Paper.defaultProps = {
  z: '1',
  theme: {
    palette: {
      paper: ['white'],
    },
  },
}
