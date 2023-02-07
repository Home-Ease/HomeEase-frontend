import React from 'react'
import { Search } from 'grommet-icons';
import { Grommet, Box, TextInput } from 'grommet';
const Searchbox = () => {
    const theme = {
        global: {
            font: {
                family: "Roboto",
                size: "18px",
                height: "20px",
            },
        },
    };
    return (
        <Grommet theme={theme}>
            <Box fill align="center" justify="start" pad="large">
                <Box width="medium" gap="medium">
                    <TextInput icon={<Search />} reverse placeholder="search ..." />
                </Box>
            </Box>
        </Grommet>
    )
}

export default Searchbox