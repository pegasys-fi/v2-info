import styled from 'styled-components'
import '../theme/backgroundStars.css'

export const PageWrapper = styled.div`
  width: 90%;
`

export const ThemedBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  pointer-events: none;
  max-width: 100vw !important;
  height: 200vh;
  mix-blend-mode: color;
  transform: translateY(-176vh);
`

export const ThemedBackgroundGlobal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  pointer-events: none;
  max-width: 100vw !important;
  height: 200vh;
  mix-blend-mode: color;
  transform: translateY(-150vh);
`
