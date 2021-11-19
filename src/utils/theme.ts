
import { extendTheme } from '@chakra-ui/react';

import { MultiSelectTheme } from 'chakra-multiselect';

const config = {
    useSystemColorMode: true,
};

const theme = extendTheme({
    components: {
        MultiSelect: MultiSelectTheme,
    },
    config,
});

export default theme;
