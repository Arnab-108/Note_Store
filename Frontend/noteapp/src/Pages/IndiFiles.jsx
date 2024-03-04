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
} from '@chakra-ui/react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { FiShoppingCart } from "react-icons/fi";
import { useState } from 'react';
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";

import { BsHeartFill, BsHeart } from "react-icons/bs"
import { NavLink } from 'react-router-dom';
export const IndiFiles = ({ file, name, description, user_name }) => {
  const [liked, setLiked] = useState(false)
  console.log(liked)
  console.log("indi:-" , name)
  return (
    <Flex cursor={"pointer"}  gap={10} w="full" alignItems="center" justifyContent="center">

      <Box
        bg={useColorModeValue('white', 'gray.800')}
        maxW="sm"
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
        <Box p="6">
          <Box pos={"relative"} right={"8vw"} >
            <Badge ml={"14vw"} p={"6px"} textAlign={"center"} rounded="full" px="2" h={"4vh"}fontSize="12px" fontWeight={"700"} bgColor={"#eeeef5"}>
              {user_name}
              <Icon as={AiFillStar} h={3} w={3} color={"#329c92"} alignSelf={'center'} />
              <span style={{ color: "#66668e", fontWeight: "lighter" }}>245</span>
            </Badge>
          </Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="md"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated>
              {name}
            </Box>
            <Tooltip
              label="Whishlist"
              bg="white"
              placement={'top'}
              color={'gray.800'}
              fontSize={'1.2em'}>
              <Box display={'flex'} onClick={() => { setLiked(!liked) }}>
                {
                  liked ?
                    <Icon as={BsHeartFill} fill={"red"} h={7} w={7} alignSelf={'center'} />
                    :
                    <Icon as={BsHeart} h={7} w={7} alignSelf={'center'} />
                }

              </Box>
            </Tooltip>
          </Flex>

          <Flex direction={"column"} align={"start"}>
            <Box fontSize="sm" color={useColorModeValue('gray.800', 'white')}>
              <Box as="span" color={'gray.600'} fontSize="sm">
                Description
              </Box>
              {description}
            </Box>
            {/* <Box fontSize="sm" color={useColorModeValue('gray.800', 'white')}>
              <Box as="span" color={'gray.600'} fontSize="sm">
                Color:
              </Box>
              {color}
            </Box> */}
            <Box align={"center"} border={"1px solid black"} fontSize="md" fontWeight={"semibold"} color={useColorModeValue('gray.800', 'white')}>
              <HStack  gap={"5vh"}>
                <Button>View</Button>
                <Button>Edit</Button>
              </HStack>
            </Box>
          </Flex>
        </Box>
      </Box>

    </Flex>
  );
}
