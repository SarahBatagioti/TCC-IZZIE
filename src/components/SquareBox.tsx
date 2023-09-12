import { Box, Icon } from '@chakra-ui/react';
import { FaLightbulb, FaRunning, FaLink, FaShieldAlt } from 'react-icons/fa';
import { useBreakpointUi } from '../hooks/useBreakPointUi.tsx'

const icons = [FaLightbulb, FaRunning, FaLink, FaShieldAlt];
const labels = ['Inovação', 'Mobilidade', 'Independência', 'Segurança'];
const iconColors = ['#FFCB6C', '#007AB5', 'green', '#F95D7E']; 
const iconSizes = ['36px', '36px', '36px', '36px']; 

const SquareBox = ({ labelIndex }: { labelIndex: number }) => {
  const IconComponent = icons[labelIndex];
  const iconColor = iconColors[labelIndex];
  const iconSize = iconSizes[labelIndex];
  const { isMobile, isTablet, isNotebook, isDesktop } = useBreakpointUi()

  return (
    <Box
      w={isMobile ? 20 : isTablet ? 20 : isNotebook ? 150 : isDesktop ? 150 : 0}
      h={isMobile ? 20 : isTablet ? 20 : isNotebook ? 150 : isDesktop ? 150 : 0}
      bg="white"
      borderWidth="1px"
      borderColor="gray.200"
      borderRadius="lg"
      textAlign="center"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      _hover={{
        transform: 'scale(1.1)', 
        transition: 'transform 0.3s',
      }}
    >
      <Icon as={IconComponent} boxSize={iconSize} color={iconColor} /> 
      <br />
      <Box fontWeight="semibold">{labels[labelIndex]}</Box>
    </Box>
  );
};

export default SquareBox;
