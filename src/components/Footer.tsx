'use client'

import {
  Box,
  Text,
  Flex,
  Image,
} from '@chakra-ui/react'
import { ReactNode } from 'react'

export default function LargeWithLogoCentered() {
  return (
    <Box
      bg={'#05ABFB'}
      color={'white'}
      pt={16}>
      <Box py={10}>
        <Flex
          align={'center'}
          _before={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: 'gray.200',
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: 'gray.200',
            flexGrow: 1,
            ml: 8,
          }}>
          <Image src="/logo.svg" alt="Logo IZZIE" height={70} />
        </Flex>
        <Text pt={6} fontSize={'sm'} textAlign={'center'}>
          © Sarah Batagioti, Eduarda Brito, Isabela Ilídio
        </Text>
      </Box>
    </Box>
  )
}