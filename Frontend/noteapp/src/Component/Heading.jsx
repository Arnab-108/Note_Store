import { Box, Button, Center, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { Signup } from './Signup'

export const Header = () => {
    return (
        <>
        <Box height={"40vh"}>
            <Box>
                <Heading as='h2' size='2xl' noOfLines={2}>
                    The simplest way to
                </Heading>
                <Center pos={"relative"} top={"1vh"}>
                    <Heading as='h2' size='2xl'>
                        keep notes
                    </Heading>
                </Center>
            </Box>
            <Box pos={"relative"} top={"6vh"}>
                <Center>
                    <Text fontSize={"lg"}>All your notes, synced on all your devices. Get Simplenote now for iOS,</Text>
                </Center>
                <Center>
                    <Text fontSize={"lg"}>Android, Mac, Windows, Linux, or in your browser.</Text>
                </Center>
            </Box>

            <Box pos={"relative"} top={"9vh"}>
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
