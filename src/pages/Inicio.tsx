import { Button, Flex, Heading, Image, Text, Stack, Grid, HStack, Box, VStack } from "@chakra-ui/react";
import WithSubnavigation from "../components/Header"
import { useBreakpointUi } from '../hooks/useBreakPointUi.tsx'
import Substract from '../assets/Subtract.png'
import MeninaENuvem from '../assets/Menina&Nuvem.png'
import NuvemBG1 from '../assets/NuvensBG1.png'
import NuvemBG2 from '../assets/NuvensBG2.png'
import NuvemBG3 from '../assets/NuvensBG3.png'
import SquareBox from "../components/SquareBox.tsx"
import BegalaInicio from "../assets/BengalaInicio.png"
import ambientesFechados from '../assets/ambientesFechados.png'
import centrosComerciais from '../assets/centrosComerciais.png'
import escolas from '../assets/escolas.png'
import hospitais from '../assets/hospitais.png'
import WithSpeechBubbles from '../components/SpeechBubbles.tsx'
import LargeWithNewsletter from '../components/Footer.tsx'
import '../styles/styles.css'

export default function Inicio() {
    const { isMobile, isTablet, isNotebook, isDesktop } = useBreakpointUi()
    return (
        <>
            <WithSubnavigation />
            <Image
                objectFit={'cover'}
                src={MeninaENuvem}
                w={'full'}
            />

            <Flex align={'left'} justify={'left'} ml={isMobile ? 10 : isTablet ? 10 : isNotebook ? 24 : isDesktop ? 24 : 0} mt={isMobile ? -780 : isTablet ? -390 : isNotebook ? -610 : isDesktop ? -730 : 0}>
                <Stack spacing={6} w={'full'} maxW={'3xl'}>
                    <Stack spacing={6}>
                        <Image src={Substract} alt="Bandeira com nome IZZIE Bengala Inteligente" width={isMobile ? 250 : isTablet ? 250 : isNotebook ? 370 : isDesktop ? 370 : 0} />
                        <Text className="títuloBranco">
                            Pequenos exploradores, <br /> grandes aventuras.
                        </Text >{' '}
                    </Stack>
                    <Text className="textoBranco" width={isMobile ? 400 : isTablet ? 400 : isNotebook ? 520 : isDesktop ? 520 : 0}>
                        É a parceria perfeita para impulsionar o crescimento, a curiosidade e a liberdade das crianças cegas, enquanto desbravam novas aventuras.
                    </Text>
                    <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                        <Button
                            rounded={'full'}
                            bg={'blue.400'}
                            color={'white'}
                            _hover={{
                                bg: 'blue.500',
                            }}>
                            Saiba Mais
                        </Button>
                        <Button rounded={'full'}>Contatos</Button>
                    </Stack>
                </Stack>
            </Flex>

            <Image
                objectFit={'cover'}
                src={NuvemBG1}
                w={'full'}
                mt={isMobile ? -780 : isTablet ? -16 : isNotebook ? -10 : isDesktop ? 3 : 0}
            />

            <HStack mt={isMobile ? -500 : isTablet ? -500 : isNotebook ? -780 : isDesktop ? -900 : 0} alignItems={'left'}>
                <Image
                    alt={'Bengala Início'}
                    objectFit={'cover'}
                    src={BegalaInicio}
                    w={isMobile ? 70 : isTablet ? 250 : isNotebook ? 400 : isDesktop ? 450 : 0}
                    mt={-20}
                    ml={isMobile ? 5 : isTablet ? 5 : isNotebook ? 10 : isDesktop ? 32 : 0}
                />
                <VStack spacing={10}>
                    <Text className="títuloAzul">
                        IZZIE:
                        <br />
                        Bengala Inteligente
                    </Text>{' '}
                    <Text className="textoAzul" w={isMobile ? 100 : isTablet ? 400 : isNotebook ? 720 : isDesktop ? 720 : 0}>
                        A nossa bengala inteligente é um dispositivo revolucionário desenvolvido para proporcionar autonomia e segurança a crianças cegas em ambientes internos. Equipada com várias funcionalidades, a bengala abre um mundo de possibilidades, permitindo que as crianças explorem com confiança, aprendam e naveguem de maneira independente.
                    </Text>

                    <HStack spacing={10} w="100%">
                        <SquareBox labelIndex={0} />
                        <SquareBox labelIndex={1} />
                        <SquareBox labelIndex={2} />
                        <SquareBox labelIndex={3} />
                    </HStack>
                </VStack>
            </ HStack>

            <Image
                objectFit={'cover'}
                src={NuvemBG2}
                w={'full'}
                mt={-75}
            />

            <Flex mt={-750} align="center" justify="space-between" h="100vh" p="20px" mx={20}>
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="left"
                    justifyContent="left"
                    borderRadius="8px"
                    width="calc(50% - 10px)"
                >
                    <Text className="títuloAzul">
                        Missão
                    </Text>{' '}
                    <Text fontSize={{ base: 'md', lg: 'lg' }} w={{ base: 'md', lg: 'lg' }} className="textoAzul">
                        Buscamos empoderar crianças com deficiencia visual, permitindo que elas descubram o mundo ao seu redor de maneira autônoma e segura, desenvolvendo habilidades e vivendo experiências enriquecedoras, se tornando independente.
                    </Text>
                    <br />
                    <br />
                    <Text className="títuloAzul">
                        Público alvo
                    </Text>{' '}
                    <Text className="textoAzul" fontWeight={'bold'}>
                        5-12 anos
                    </Text>{' '}
                </Box>

                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="flex-end"
                    justifyContent="center"
                    borderRadius="8px"
                    width="calc(50% - 10px)"
                >
                    <Text className="títuloAzul" textAlign={'end'}> 
                        Utilização
                    </Text>{' '}

                    <HStack my={5}>
                        <VStack>
                            <Image src={ambientesFechados} alt="Residencias" w="200px" />
                            <Text className="textoAzul" fontSize="16px">Residências</Text>
                        </VStack>
                        <VStack>
                            <Image src={escolas} alt="Escolas" w="200px" />
                            <Text className="textoAzul" fontSize="16px">Escolas</Text>
                        </VStack>
                    </HStack>
                    <HStack>
                        <VStack>
                            <Image src={hospitais} alt="Hospitais" w="200px" />
                            <Text className="textoAzul" fontSize="16px">Hospitais</Text>
                        </VStack>
                        <VStack>
                            <Image src={centrosComerciais} alt="Centros comerciais" w="200px" />
                            <Text className="textoAzul" fontSize="16px">Centros comerciais</Text>
                        </VStack>
                    </HStack>
                </Box>
            </Flex>

            <Image
                objectFit={'cover'}
                src={NuvemBG3}
                w={'full'}
                mt={-150}
            />

            <Box mt={-700}>
                <WithSpeechBubbles/>
            </Box>

            <LargeWithNewsletter/>

        </>
    );
}