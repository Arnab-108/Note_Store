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
    Avatar,
    PopoverBody,
    useToast,
    Image,
} from '@chakra-ui/react'
import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
} from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import { EditModal } from './EditModal'
export const UserNav = () => {
    const { isOpen, onToggle } = useDisclosure()
    return (
        <Box margin={"auto"} width={"93vw"} height={"9vh"}>
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
                <Flex height={"100%"} pos={"relative"} left={"7vw"} flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                    <Link to={"/inside"}>
                    <Avatar border={"1px solid black"} size='md' name='Segun Adebayo' src='https://www.luisilustra.com/portfolio/file/file2012_logo.png' />
                    </Link>
                </Flex>

                <Stack
                    flex={{ base: 1, md: 0 }}
                    pos={"relative"}
                    right={"8vw"}
                    align={"center"}
                    justify={'flex-end'}
                    direction={'row'}
                    spacing={6}>
                    {/* <HStack
                        spacing='10px'
                    // pos={"relative"}
                    // right={"1vw"}

                    >
                        <Box w='4vw' cursor={"pointer"} color={"#2c3338"} _hover={{ color: "#8c8f94" }}>
                            <Text align={"center"} fontSize={"14px"}>
                                View
                            </Text>
                        </Box>
                        <Box w='4vw' cursor={"pointer"} color={"#2c3338"} _hover={{ color: "#8c8f94" }}>
                            <Text align={"center"} fontSize={"14px"}>
                                Upload
                            </Text>
                        </Box>
                    </HStack> */}

                    {/* <Center height={"50px"}>
                        <Divider color={"black"} orientation='vertical' />
                    </Center> */}
                    <Button color={"#2c3338"} w={"7vw"} fontSize={'sm'} fontWeight={400} variant={'outline'} cursor={"pointer"}>
                        <EditModal />
                    </Button>
                </Stack>
            </Flex>
        </Box>
    )
}
