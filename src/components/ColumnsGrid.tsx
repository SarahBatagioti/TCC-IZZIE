'use client'

import { ReactElement } from 'react'
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react'
import { HiOutlineSignal } from "react-icons/hi2"
import { PiCompassLight } from "react-icons/pi"
import { TfiHandOpen } from "react-icons/tfi"
import { PiVibrateLight } from "react-icons/pi"
import { BsSoundwave } from "react-icons/bs";

interface FeatureProps {
  title: string
  text: string
  icon: ReactElement
  bgColor: string
}

const Feature = ({ title, text, icon, bgColor }: FeatureProps) => {
  return (
    <Stack
      align={'center'}
      _hover={{
        transform: 'scale(1.1)', // Increase the scale on hover
        transition: 'transform 0.3s ease-in-out', // Add a smooth transition
      }}
    >
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={bgColor}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600} color={bgColor} align={'center'} borderBottom={`2px solid ${bgColor}`} pb={1} mb={1}>
        {title}
      </Text>
      <Text color={'gray.600'} maxW="150px" align={'center'}>
        {text}
      </Text>
    </Stack>
  );
};

export default function ColumnsGrid() {
  return (
    <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 5 }} spacing={10}>
        <Feature
          icon={<Icon as={HiOutlineSignal} w={10} h={10} />}
          title={'Sensor de obstáculo'}
          text={'Mapeia ambientes internos e identifica empecilhos '}
          bgColor={'#05ABFB'}  // Cor para o primeiro item
        />
        <Feature
          icon={<Icon as={PiCompassLight} w={10} h={10} />}
          title={'Roda para direcionamento'}
          text={'Desvia automaticamente de obstáculos por meio de circuito motorizado'}
          bgColor={'#FFCB6C'}  // Cor para o segundo item
        />
        <Feature
          icon={<Icon as={TfiHandOpen} w={10} h={10} />}
          title={'Sensor de toque'}
          text={'Identifica o contato do usuário a bengala com o objetivo de alertar em caso de acidentes ou perdas'}
          bgColor={'#F95D7E'}  // Cor para o terceiro item
        />
        <Feature
          icon={<Icon as={PiVibrateLight} w={10} h={10} />}
          title={'Dispositivo vibratório'}
          text={'Sinaliza o redirecionamento da roda'}
          bgColor={'#43E2FA'}  // Cor para o quarto item
        />
        <Feature
          icon={<Icon as={BsSoundwave} w={10} h={10} />}
          title={'Mecanismo sonoro'}
          text={'Comunica o utilizador em caso de perda da bengala permitindo-o localiza-la através do som'}
          bgColor={'#007AB5'}  // Cor para o quinto item
        />
      </SimpleGrid>
    </Box>
  )
}