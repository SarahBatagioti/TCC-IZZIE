import {
    Box,
    Flex,
    Heading,
    Text,
    Stack,
    Container,
    Avatar,
  } from '@chakra-ui/react'
  
  interface Props {
    children: React.ReactNode
  }
  
  const Testimonial = (props: Props) => {
    const { children } = props
  
    return <Box>{children}</Box>
  }
  
  const TestimonialContent = (props: Props) => {
    const { children } = props
  
    return (
      <Stack
        bg={'white'}
        boxShadow={'lg'}
        p={8}
        rounded={'xl'}
        align={'center'}
        pos={'relative'}
        _after={{
          content: `""`,
          w: 0,
          h: 0,
          borderLeft: 'solid transparent',
          borderLeftWidth: 16,
          borderRight: 'solid transparent',
          borderRightWidth: 16,
          borderTop: 'solid',
          borderTopWidth: 16,
          borderTopColor: 'white',
          pos: 'absolute',
          bottom: '-16px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}>
        {children}
      </Stack>
    )
  }
  
  const TestimonialHeading = (props: Props) => {
    const { children } = props
  
    return (
      <Heading as={'h3'} fontSize={'xl'}>
        {children}
      </Heading>
    )
  }
  
  const TestimonialText = (props: Props) => {
    const { children } = props
  
    return (
      <Text
        textAlign={'center'}
        color={'gray.600'}
        fontSize={'sm'}>
        {children}
      </Text>
    )
  }
  
  const TestimonialAvatar = ({
    src,
    name,
    title,
  }: {
    src: string
    name: string
    title: string
  }) => {
    return (
      <Flex align={'center'} mt={8} direction={'column'}>
        <Avatar src={src} mb={2} />
        <Stack spacing={-1} align={'center'}>
          <Text fontWeight={600}>{name}</Text>
          <Text fontSize={'sm'} color={'white'}>
            {title}
          </Text>
        </Stack>
      </Flex>
    )
  }
  
  export default function WithSpeechBubbles() {
    return (
      <Box >
        <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
          <Stack spacing={0} align={'center'} textAlign={'center'}>
            <Text className='títuloBranco'>Ouvindo o público alvo</Text>
            <Text className='textoBranco' w={800}>Foi feita uma pesquisa de campo para consultae a opinião de pessoas com deficiencia visual e acompanhantes dos mesmos, para saber mais sobre as melhorias e utilidades na prática.</Text>
          </Stack>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={{ base: 10, md: 4, lg: 10 }}>
            <Testimonial>
              <TestimonialContent>
                <TestimonialHeading> Sair da acomodação </TestimonialHeading>
                <TestimonialText>
                  Muitos cegos optam pela comodidade, e a bengala no desenvolvimento da criança ajudaria demais a mudar. Seria muito útil, principalmente na escola, ajudando também na questão da timidez.
                </TestimonialText>
              </TestimonialContent>
              <TestimonialAvatar
                src={
                  'https://www.teammidwest.com/webres/Image/blog/Nick.png'
                }
                name={'Alamn'}
                title={'Indivíduo com Cegueira Tota'}
              />
            </Testimonial>
            <Testimonial>
              <TestimonialContent>
                <TestimonialHeading> Atinge a todos </TestimonialHeading>
                <TestimonialText>
                  Acredito que a bengala inteligente pode contribuir para a independência e a confiança da pessoa cega, e não só beneficiaria a pessoa com deficiência visual que a utiliza, mas também poderia impactar positivamente a vida das pessoas que convivem com o mesmo.
                </TestimonialText>
              </TestimonialContent>
              <TestimonialAvatar
                src={
                  'https://www.b-supp.co.jp/dcms_media/image/recruit04.png'
                }
                name={'Rutilene Sousa'}
                title={'Gerente da Educação'}
              />
            </Testimonial>
            <Testimonial>
              <TestimonialContent>
                <TestimonialHeading> Ideia factível </TestimonialHeading>
                <TestimonialText>
                  Bem viável, principalmente para crianças dentro de casa, trará autonomia sob diversos aspectos. Será muito satisfatório para o nosso “mundo cegal” 
                </TestimonialText>
              </TestimonialContent>
              <TestimonialAvatar
                src={
                  'https://www.oozora-sakuranoki.com/wp-content/uploads/2023/07/%E5%90%8D%E7%A7%B0%E6%9C%AA%E8%A8%AD%E5%AE%9A%E3%81%AE%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3-2023-07-06T125821.358-768x768.png'
                }
                name={'Diego'}
                title={'Indivíduo com Cegueira Tota'}
              />
            </Testimonial>
          </Stack>
        </Container>
      </Box>
    )
  }