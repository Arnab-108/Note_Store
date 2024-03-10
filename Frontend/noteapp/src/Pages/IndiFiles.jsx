import React from 'react'
import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  Text,
  VStack,
  Button,
  HStack,
  useToast,
} from '@chakra-ui/react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { FiShoppingCart } from "react-icons/fi";
import { useState } from 'react';
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { BsHeartFill, BsHeart } from "react-icons/bs"
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteFile } from '../Redux/FileReducer/action';
import { FileEdit } from '../MainComponents/FileEdit';
import { readableForm } from './date';
export const IndiFiles = ({ file, name, description, user_name,_id,createdAt  }) => {
  const [liked, setLiked] = useState(false)
  const toast = useToast()
  const dispatch = useDispatch()
  console.log(liked)
  console.log("indi:-" , name)
  console.log(file,_id)

  const showFile=(file)=>{
    window.open(`https://render-store.onrender.com/${file}` , "_black","noreferrer")
  }

  const DeleteFile=()=>{
    dispatch(deleteFile(_id)).then(()=>{
      toast({
        title:"Delete Successfull!",
        status:"error",
        duration:2000,
        isClosable:true,
        position:"top-right"
    })
    })
  }
  return (
    <Flex cursor={"pointer"}  gap={10} w="full" alignItems="center" justifyContent="center">

      <Box
        bg={useColorModeValue('white', 'gray.800')}
        maxW="md"
        h={"75vh"}
        width={"25vw"}
        borderWidth="1px"
        rounded="lg"
        position="relative">
          <Image
            src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQU9kB8x44frE9_wwR7WU8QUxbGIrREYnoUw&usqp=CAU"}
            alt={`Picture of ${name}`}
            roundedTop="lg"
            ml={"5vw"}
          />
        <Box p="6" mt={"4vh"}>
          <Box pos={"relative"} right={"8vw"}  >
            <Badge ml={"10vw"} p={"6px"} textAlign={"center"} rounded="full" px="2" h={"4vh"}fontSize="12px" fontWeight={"700"} bgColor={"#eeeef5"}>
              {user_name}
              <Icon as={AiFillStar} h={3} w={3} ml={"5px"} color={"#329c92"} alignSelf={'center'} />
              <span  style={{ color: "#66668e", fontWeight: "lighter" }}>{createdAt} UTC</span>
            </Badge>
          </Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="md"
              fontWeight="semibold"
              as="h4"
              m={"2vh auto"}
              lineHeight="tight"
              
              isTruncated>
              {name}
            </Box>
            <Tooltip
              label="Delete"
              bg="white"
              placement={'top'}
              color={'gray.800'}
              fontSize={'1.2em'}>
              <Box onClick={DeleteFile} display={'flex'} position={"absolute"} bottom={"55vh"} left={"22vw"}>
                    <Icon as={MdDelete} fill={"red"} h={7} w={7} alignSelf={'center'} />
              </Box>
            </Tooltip>
          </Flex>

          <Flex mb={"1vh"} direction={"column"} align={"start"}>
            <Box alignSelf={"center"} fontSize="sm" width={"80%"} color={useColorModeValue('gray.800', 'white')}>
              <HStack align={"center"} height={"5vh"} >
                {/* <Box as="span" color={'gray.600'} fontSize="sm">
                  
                </Box> */}
                <Text textAlign={"center"} fontWeight={"bold"} ml={"0.5vw"}>
                  {description}
                </Text>
              </HStack>
            </Box>
            <Box ml={"2vw"} mt={"5vh"} fontSize="md" fontWeight={"semibold"} color={useColorModeValue('gray.800', 'white')}>
              <HStack  gap={"8vw"}>
                <Button onClick={()=>{showFile(file)}}>View</Button>
                <Button>
                  <FileEdit id={_id} />
                </Button>
              </HStack>
            </Box>
          </Flex>
        </Box>
      </Box>

    </Flex>
  );
}
