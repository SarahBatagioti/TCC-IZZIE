import { Box, Image, Text, HStack } from "@chakra-ui/react";
import Eduarda from "../assets/eduarda.png";
import Sarah from "../assets/sarah.png";
import Isabela from "../assets/isabela.png";

const Card = ({ imageSrc, title, text, titleColor }: { imageSrc: string; title: string; text: string; titleColor: string }) => (
    <Box maxW="sm" overflow="hidden" _hover={{
      transform: 'scale(1.1)', 
      transition: 'transform 0.3s ease-in-out',
    }}>
      <Image src={imageSrc} alt={title} borderRadius="full" w={320} />
      <Box p="6" w={320}>
        <Text
          fontWeight="bold"
          fontSize="2xl"
          mb="2"
          className="textoBranco"
          borderBottom={`2px solid ${titleColor}`}
          pb={1}
          color={titleColor}
        >
          {title}
        </Text>
        <Text fontSize="md" className="textoBranco">
          {text}
        </Text>
      </Box>
    </Box>
  );
  
  const Perfil = () => {
    return (
      <HStack spacing={16} justifyContent="center" alignItems="center">
        <Card
          imageSrc={Eduarda}
          title="Eduarda Brito"
          text="Analista de Informação na Performa Comunicação"
          titleColor="#FFCB6C"
        />
        <Card
          imageSrc={Sarah}
          title="Sarah Batagioti"
          text="Desenvolvedora Júnior na Symtropy Criação e Desenvolvimento"
          titleColor="#F95D7E"
        />
        <Card
          imageSrc={Isabela}
          title="Isabela Rodrigues"
          text="Técnica em Desenvolvimento de Sistemas"
          titleColor="#007AB5"
        />
      </HStack>
    );
  };
  
  export default Perfil;
  
