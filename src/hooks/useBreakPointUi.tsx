import { useMediaQuery } from '@chakra-ui/react'

export const useBreakpointUi = () => {
  const [isMobile, isTablet, isNotebook, isDesktop] = useMediaQuery([
    `(max-width: ${breakpoints.sm})`,
    `(min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md})`,
    `(min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg})`,
    `(min-width: ${breakpoints.xl})`,
  ])

  return { isMobile, isTablet, isNotebook, isDesktop }
}

  const breakpoints = {
    sm: '790px',
    md: '900px',
    lg: '1280px',
    xl: '1366px',
  }