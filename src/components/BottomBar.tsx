import React from 'react';
import { Box, Center, Flex, Icon } from '@chakra-ui/react';
import { HiCalendar, HiHome, HiMiniRectangleStack, HiShoppingCart } from 'react-icons/hi2';

const BottomBar: React.FC = () => {
    return(
        <>
            <Box w={"100%"} pos={"absolute"} bottom={"0"}>
                <Center w={"100%"}>
                    <Flex w={"100%"} justify={"space-between"} padding={"40px"} paddingBottom={"20px"}>
                        <Icon fontSize={"40px"}>
                            <HiHome />
                        </Icon>
                        <Icon fontSize={"40px"}>
                            <HiMiniRectangleStack />
                        </Icon>
                        <Icon fontSize={"40px"}>
                            <HiShoppingCart />
                        </Icon>
                        <Icon fontSize={"40px"}>
                            <HiCalendar />
                        </Icon>
                    </Flex>
                </Center>
            </Box>
        </>
    );
};

export default BottomBar;