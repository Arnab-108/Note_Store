import React from 'react'
import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    HStack,
    Center,
    Divider,
} from '@chakra-ui/react'
import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
} from '@chakra-ui/icons'
import { Signup } from './Signup'
import { Login } from './Login'

export const Navbar = () => {
    const { isOpen, onToggle } = useDisclosure()
    return (
        <Box>
            <Flex
                bg={useColorModeValue('white', 'gray.800')}
                color={useColorModeValue('gray.600', 'white')}
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}>
                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}>
                    <IconButton
                        onClick={onToggle}
                        icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>
                <Flex pos={"relative"} left={"4vw"} flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                    <Text
                        textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                        fontFamily={'heading'}
                        color={useColorModeValue('gray.800', 'white')}>
                        Logo
                    </Text>

                    <HStack>

                    </HStack>
                </Flex>

                <Stack
                    flex={{ base: 1, md: 0 }}
                    pos={"relative"}
                    right={"7vw"}
                    align={"center"}
                    justify={'flex-end'}
                    direction={'row'}
                    spacing={8}>
                    <HStack
                        spacing='24px'
                        // pos={"relative"}
                        // right={"1vw"}

                    >
                        <Box w='4vw' cursor={"pointer"} color={"#2c3338"} _hover={{color:"#8c8f94"}}>
                            <Text align={"center"} fontSize={"14px"}>
                                Contacts
                            </Text>
                        </Box>
                        <Box w='4vw' cursor={"pointer"} color={"#2c3338"} _hover={{color:"#8c8f94"}}>
                            <Text align={"center"} fontSize={"14px"}>
                                Help
                            </Text>
                        </Box>
                        <Box w='4vw' cursor={"pointer"} color={"#2c3338"} _hover={{color:"#8c8f94"}}>
                            <Text align={"center"} fontSize={"14px"}>
                                Blog
                            </Text>
                        </Box>
                    </HStack>

                    <Center height={"50px"}>
                        <Divider color={"black"} orientation='vertical' />
                    </Center>
                    <Button color={"#2c3338"} as={'a'} fontSize={'sm'} fontWeight={400} variant={'link'} cursor={"pointer"}>
                        <Login />
                    </Button>
                    <Button 
                    bg={'blue.500'}
                    _hover={{
                            bg:'teal.400'
                        }}
                    >
                        <Signup />
                    </Button>
                </Stack>
            </Flex>

            {/* <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse> */}
        </Box>
    )
}
