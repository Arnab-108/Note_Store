import { Box, Button, Center, Divider, HStack, Stack, Text } from '@chakra-ui/react'
import React from 'react'

export const Footer = () => {
    return (
        <>
            <Box width={"100%"} align={"center"} height={["10vh","10vh","9vh","8vh","8vh"]}>
                <Stack
                    flex={{ base: 1, md: 0 }}
                    pos={"relative"}
                    left={["8vw","8vw","0px","0px","0px"]}
                    align={"center"}
                    justify={'center'}
                    direction={'row'}
                    spacing={[3,3,7,10,10]}
                    >
                    <HStack
                        spacing={['5px','5px','24px','24px','24px']}
                    // pos={"relative"}
                    // right={"1vw"}

                    >
                        <Box w={['12vw','10vw','5vw','5vw','5vw']} cursor={"pointer"} color={"#2c3338"} _hover={{ color: "#8c8f94" }}>
                            <Text align={"center"} fontSize={['8px','8px','10px','14px',"14px"]}>
                                Contacts Us
                            </Text>
                        </Box>
                        <Box w={['8vw','10vw','5vw','5vw','5vw']} cursor={"pointer"} color={"#2c3338"} _hover={{ color: "#8c8f94" }}>
                            <Text align={"center"} fontSize={['8px','8px','10px','14px',"14px"]}>
                                Help
                            </Text>
                        </Box>
                        <Box w={['8vw','10vw','5vw','5vw','5vw']} cursor={"pointer"} color={"#2c3338"} _hover={{ color: "#8c8f94" }}>
                            <Text align={"center"} fontSize={['8px','8px','10px','14px',"14px"]}>
                                Blog
                            </Text>
                        </Box>
                        <Box w={['10vw','10vw','5vw','5vw','5vw']} cursor={"pointer"} color={"#2c3338"} _hover={{ color: "#8c8f94" }}>
                            <Text align={"center"} fontSize={['8px','8px','10px','14px',"14px"]}>
                                Developers
                            </Text>
                        </Box>
                        <Box w={['8vw','10vw','5vw','5vw','5vw']} cursor={"pointer"} color={"#2c3338"} _hover={{ color: "#8c8f94" }}>
                            <Text align={"center"} fontSize={['8px','8px','10px','14px',"14px"]}>
                                Teams
                            </Text>
                        </Box>
                        <Box w={['12vw','10vw','5vw','5vw','5vw']} cursor={"pointer"} color={"#2c3338"} _hover={{ color: "#8c8f94" }}>
                            <Text align={"center"} fontSize={['8px','8px','10px','14px',"14px"]}>
                                Terms & Conditions
                            </Text>
                        </Box>
                        <Box w={['9vw','10vw','5vw','5vw','5vw']} cursor={"pointer"} color={"#2c3338"} _hover={{ color: "#8c8f94" }}>
                            <Text align={"center"} fontSize={['8px','8px','10px','14px',"14px"]}>
                                Privecy
                            </Text>
                        </Box>
                        <Box w='14vw' cursor={"pointer"} color={"#2c3338"} _hover={{ color: "#8c8f94" }}>
                            <Text align={"center"} fontSize={['8px','8px','10px','14px',"14px"]}>
                            Privacy Notice for California Users
                            </Text>
                        </Box>
                    </HStack>

                    <Center height={"50px"}>
                        <Divider color={"black"} orientation='vertical' />
                    </Center>
                    <Box w={['9vw','9vw','6vw','6vw','6vw']} cursor={"pointer"} color={"#2c3338"} _hover={{ color: "#8c8f94" }}>
                        <Text align={"center"} fontSize={['8px','8px','10px','14px',"14px"]}>
                            © Automattic
                        </Text>
                    </Box>
                </Stack>
            </Box>
        </>
    )
}
