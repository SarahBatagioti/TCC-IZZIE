import { Button, Flex, Image, Text, Stack, Box, VStack } from "@chakra-ui/react";
import WithSubnavigation from "../components/Header"
import { useBreakpointUi } from '../hooks/useBreakPointUi.tsx'
import MeninoENuvem from '../assets/Menino&Nuvem.png'
import NuvensBG1Sobre from '../assets/NuvensBG1Sobre.png'
import NuvemBG2Sobre from '../assets/NuvensBG2Sobre.png'
import NuvemBG3Sobre from '../assets/NuvensBG3Sobre.png'
import ColumnsGrid from "../components/ColumnsGrid.tsx"
import LargeWithNewsletter from '../components/Footer.tsx'
import '../styles/styles.css'
import { useRef } from 'react';
import Perfil from "../components/Perfil.tsx";

export default function Sobre() {
    const { isMobile, isTablet, isNotebook, isDesktop } = useBreakpointUi()

    const izzieSectionRef = useRef<HTMLDivElement | null>(null);
    const scrollToIzzieSection = () => {
        if (izzieSectionRef.current) {
            izzieSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <WithSubnavigation />
            <Image
                objectFit={'cover'}
                src={MeninoENuvem}
                w={'full'}
                mt={isMobile ? -5 : isTablet ? -5 : isNotebook ? -5 : isDesktop ? -5 : 0}
            />

            <Flex align={'left'} justify={'left'} ml={isMobile ? 10 : isTablet ? 10 : isNotebook ? 24 : isDesktop ? 24 : 0} mt={isMobile ? -780 : isTablet ? -390 : isNotebook ? -610 : isDesktop ? -650 : 0}>
                <Stack spacing={6} w={'full'} maxW={'3xl'}>
                    <Stack spacing={6}>
                        <Text className="títuloBranco">
                            A liberdade está a um <br /> passo de distância
                        </Text >{' '}
                    </Stack>
                    <Text className="textoBranco" width={isMobile ? 400 : isTablet ? 400 : isNotebook ? 520 : isDesktop ? 520 : 0}>
                        Desperte a Independência com a Bengala Inteligente IZZIE: Empoderando Crianças Cegas a Darem o Próximo Passo Rumo à Liberdade                    </Text>
                    <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                        <Button
                            rounded={'full'}
                            bg={'white'}
                            color={'#05ABFB'}
                            _hover={{
                                bg: 'blue.100',
                            }}
                            onClick={scrollToIzzieSection}
                            >
                            Saiba Mais
                        </Button>
                    </Stack>
                </Stack>
            </Flex>

            <Image
                objectFit={'cover'}
                src={NuvensBG1Sobre}
                w={'full'}
                mt={isMobile ? -780 : isTablet ? -16 : isNotebook ? -10 : isDesktop ? 12 : 0}
            />

            <Box ref={izzieSectionRef} mt={isMobile ? -500 : isTablet ? -500 : isNotebook ? -780 : isDesktop ? -700 : 0}>
                <Stack spacing={0} align={'center'} textAlign={'center'} mb={10}>
                    <Text className="títuloAzul">
                        Quais as funções da Izzie?
                    </Text>
                </Stack>

                <Flex align={'center'} justify={'center'}>
                    <ColumnsGrid />
                </Flex>
            </ Box>

            <Image
                objectFit={'cover'}
                src={NuvemBG2Sobre}
                w={'full'}
                mt={-2}
            />

            <Box mt={isMobile ? -500 : isTablet ? -500 : isNotebook ? -780 : isDesktop ? -894 : 0}>
                <VStack spacing={10} align={'center'} textAlign={'center'} mb={10}>
                    <Text className="títuloAzul">
                        Vídeo demonstrativo!
                    </Text>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/lv1bFz5K7Q4?si=KwUYh0hhvLILd6nd"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>
                    <Text color="#05ABFB" fontSize="30px" fontWeight="bold">
                        Descubra um mundo de possibilidades com a IZZIE <br /> Junte-se a nós!
                    </Text>
                </VStack>
            </ Box>

            <Image
                objectFit={'cover'}
                src={NuvemBG3Sobre}
                w={'full'}
                mt={-30}
            />

            <Box mt={isMobile ? -500 : isTablet ? -500 : isNotebook ? -780 : isDesktop ? -650 : 0}>
            <VStack spacing={10} align={'center'} textAlign={'center'} mb={10}>
                    <Text className="títuloBranco">
                        Desenvolvedoras
                    </Text>
                    <Perfil/>
                </VStack>
            </ Box>

            <LargeWithNewsletter />

        </>
    );
}