import { Avatar, Box, Button, Heading, Image, Input, Text, VStack, WrapItem } from '@chakra-ui/react'
import React from 'react'
import { useRef, useState } from 'react'
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
      <Box>
        <Heading>User Profile</Heading>
        <VStack width={"55vw"} margin={"auto"} height={"60vh"} borderRadius={"6px"} backgroundColor={"#fafbf9"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} pos={"relative"} top={"20vh"} left={"2vw"}>
          <Box borderRadius={"full"} border={"3px solid #005f69"} pos={"relative"}
              bottom={"15vh"}>
            <Image
              borderRadius='full'
              boxSize='210px'
              src='https://bit.ly/dan-abramov'
              alt='Dan Abramov'
              justifyContent={"center"}
            />
          </Box>
        </VStack>

      </Box>
    </>
  )
}
