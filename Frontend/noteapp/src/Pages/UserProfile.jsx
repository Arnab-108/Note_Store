import { Avatar, Box, Button, HStack, Heading, Image, Input, Text, VStack, WrapItem } from '@chakra-ui/react'
import React from 'react'
import { useRef, useState } from 'react'
import { UserNav } from '../MainComponents/UserNav'
export const UserProfile = () => {
  const [avatar, setFile] = useState("")
  const inputRef = useRef()
  const handleFileChange = (e) => {
    const file = e.target.files[0]
    setFile(file)
  }
  const handleImageClick = () => {
    inputRef.current.click()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const obj = {
      avatar
    }

    console.log(obj)
  }

  return (
    <>
      <Box height={"90vh"} width={"100%"}>
        <UserNav />
        <VStack width={"55vw"} margin={"auto"} height={"60vh"} borderRadius={"6px"} backgroundColor={"#fafbf9"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} pos={"relative"} top={"20vh"} left={"2vw"}>
          <Box borderRadius={"full"} border={"3px solid #053c46"} pos={"relative"}
              bottom={"15vh"}>
            <Image
              borderRadius='full'
              boxSize='210px'
              src='https://bit.ly/dan-abramov'
              alt='Dan Abramov'
              justifyContent={"center"}
            />
          </Box>
          <Text fontSize={"5xl"} fontWeight={"medium"} color={"#053c46"} pos={"relative"} bottom={"14vh"} >Arnab Adhikary</Text>
          <Text fontSize={"xl"} fontWeight={"medium"} color={"#6b6d6d"} pos={"relative"} bottom={"15vh"}>@arnabadhikary007@gmail.com</Text>
          <HStack gap={"30vw"} pos={"relative"} bottom={"7vh"}>
            <VStack gap={"10px"}>
              <Text fontSize={"md"} color={"#6b6d6d"}>Phone</Text>
              <Text pos={"relative"} bottom={"1vh"} fontSize={"lg"} fontWeight={"medium"} color={"#053c46"}>9088069205</Text>
            </VStack>
            <VStack gap={"10px"}>
              <Text fontSize={"md"} color={"#6b6d6d"}>Age</Text>
              <Text pos={"relative"} bottom={"1vh"} fontSize={"lg"} fontWeight={"medium"} color={"#053c46"}>22</Text>
            </VStack>
          </HStack>
        </VStack>

      </Box>
    </>
  )
}
