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
} from '@chakra-ui/react'
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons'
import { Link, useNavigate } from 'react-router-dom'

export const NavInside = () => {
  const img = localStorage.getItem('avatar')
  const url = `http://localhost:8080/${img}`
  console.log(url)
  const navigate = useNavigate()
  const toast = useToast()
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
        <Flex pos={"relative"} left={"7vw"} flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
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
          right={"8vw"}
          align={"center"}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          <HStack
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
          </HStack>

          <Center height={"50px"}>
            <Divider color={"black"} orientation='vertical' />
          </Center>
          <Popover>
            <PopoverTrigger>
              <Avatar size='md' src={url} />
            </PopoverTrigger>
            <PopoverContent
              w="120px"
              boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
            >
              <PopoverBody
                h={"100%"}
                pl="6"
                fontSize="15px"
              >
                <Link to={'/userProfile'}>
                  <Box
                    color="#333368"
                    borderBottom={"1px solid black"}
                    width={"100%"}
                    height={"5vh"}
                    _hover={{ fontWeight: "bold" }}
                  >
                    Profile
                  </Box>
                </Link>
                <Box
                  height={"5vh"}
                  color="#333368"
                  pt={"1vh"}
                  _hover={{ fontWeight: "bold" }}
                  onClick={() => {
                    localStorage.removeItem("auth");
                    localStorage.removeItem("userData");
                    localStorage.removeItem("token");
                    toast({
                      title:"Logged out successfully!",
                      status:"success",
                      duration:2000,
                      isClosable:true,
                      position:"top-right"
                  })
                    setTimeout(() => {
                      navigate("/");
                    }, 1000);
                  }}
                >
                  Sign Out
                </Box>

              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Stack>
      </Flex>

      {/* <Collapse in={isOpen} animateOpacity>
      <MobileNav />
    </Collapse> */}
    </Box>
  )
}

