import { Box, Button, Center, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { Signup } from './Signup'

export const Header = () => {
    return (
        <>
        <Box height={"40vh"}>
            <Box>
                <Heading as='h2' size={['xl','xl','xl','2xl']} pos={"relative"} bottom={['1vh','1vh','1vh','0px']} left={['3vw','3vw','0vw','0vw','0vw']} noOfLines={2}>
                    The simplest way to
                </Heading>
                <Center pos={"relative"} top={['0px','0px','0px','0px',"1vh"]} bottom={['1vh','1vh','0px','0px','0px']}>
                    <Heading as={'h2'} size={['xl','xl','xl','2xl']} pos={"relative"} bottom={['1vh','1vh','1vh','0vh']} left={['4vw','4vw','0vw','0vw','0vw']}>
                        keep notes
                    </Heading>
                </Center>
            </Box>
            <Box pos={"relative"} top={["3vh","3vh","4vh","6vh",'5vh','6vh']} left={['4vw','4vw','0vw','0vw','0vw']}>
                <Center>
                    <Text fontSize={['md','md','md','lg',"lg"]}>All your notes, synced on all your devices. Get Simplenote now for iOS,</Text>
                </Center>
                <Center>
                    <Text fontSize={['md','md','md','lg',"lg"]}>Android, Mac, Windows, Linux, or in your browser.</Text>
                </Center>
            </Box>

            <Box pos={"relative"} top={["6vh","6vh","8vh","8vh","7vh","9vh"]}>
                <Center>
                    <Button
                        bg={'blue.500'}
                        _hover={{
                            bg: 'teal.400'
                        }}
                    >
                        <Signup />
                    </Button>
                </Center>
            </Box>

        </Box>

        </>
    )
}
