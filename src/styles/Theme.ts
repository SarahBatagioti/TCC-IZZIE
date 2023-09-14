import { extendTheme } from '@chakra-ui/react';

const customTheme = {
  styles: {
    global: {
      
      body: {
        bg: '#05ABFB',
      },
    },
  },
};

const theme = extendTheme(customTheme);

export default theme;