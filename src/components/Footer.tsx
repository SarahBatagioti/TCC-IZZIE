import {
    Box,
    chakra,
    Container,
    SimpleGrid,
    Stack,
    Text,
    Input,
    IconButton,
    Image,
  } from '@chakra-ui/react'
  import { ReactNode } from 'react'
  import { BiMailSend } from 'react-icons/bi'

  const Logo = (props: any) => {
    return (
      <Image src="/logo.svg" alt="Logo IZZIE" height={32} />
    )
  }

  const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    )
  }
  
  export default function LargeWithNewsletter() {
    return (
      <Box
        bg={'#BAE8FF'}
        color={'gray.700'}
        >
        <Container as={Stack} p={28} maxW={'100%'}>
          <SimpleGrid
            templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
            spacing={8}>
            <Stack spacing={6}>
              <Box>
                <Logo color={'gray.700'} />
              </Box>
              <Text fontSize={'sm'}>© 2023 Sarah Batagioti, Eduarda Brito, Isabela Ilídio</Text>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Páginas</ListHeader>
              <Box as="a" href={'#'}>
                Início
              </Box>
              <Box as="a" href={'#'}>
                Sobre
              </Box>
              <Box as="a" href={'#'}>
                Contato
              </Box>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Créditos</ListHeader>
              <Box>
                Site desenvolvido para o trabalho de conclusão de curso do técnico de Desenvolvimento de Sistemas da ETEC 195.
              </Box>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    )
  }