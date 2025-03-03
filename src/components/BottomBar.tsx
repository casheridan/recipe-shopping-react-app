import React from 'react';
import { Box, Center, Flex, Icon } from '@chakra-ui/react';
import { HiCalendar, HiHome, HiMiniRectangleStack, HiShoppingCart } from 'react-icons/hi2';
import { setUser } from '../reducers/slices/authSlice';
import { signOut } from '../lib/auth';

const BottomBar: React.FC = () => {

    const handleLogout = async () => {
        try {
            await signOut();
            dispatch(setUser(null));
        } catch (error) {
            console.error(error);
        }
    };

    return(
        <>
            <Box w={"100%"} pos={"absolute"} bottom={"0"}>
                <Center w={"100%"}>
                    <Flex w={"100%"} justify={"space-between"} padding={"40px"} paddingBottom={"20px"}>
                        <Icon fontSize={"40px"}>
                            <HiHome onClick={handleLogout} />
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

function dispatch(arg0: any) {
    throw new Error('Function not implemented.');
}
