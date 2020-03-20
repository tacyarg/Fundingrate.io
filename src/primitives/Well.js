import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Flex, Box, Button, Image } from './index'
import theme from "../styles/theme";

const Well = styled(Box)`
  box-shadow: inset 0px 0px 10px rgba(0,0,0,0.5);
  border: ${theme.colors.backingDark} ${theme.borders.normal};
  border-radius: ${theme.radii.rounded};
`

Well.defaultProps = {
  // as: 'code',
  // bg: "foregroundBacking",
  bg: 'darkBacking',
  p: 1,
}

export default Well
