import { Avatar, Box, Button, Heading, Image, Input, Text, WrapItem } from '@chakra-ui/react'
import React from 'react'
import { useRef,useState } from 'react'
export const UserProfile = () => {
  const [file,setFile] = useState("")
  const inputRef = useRef()
  const handleFileChange=(e)=>{
    const file = e.target.files[0]
    setFile(file)
  }
  const handleImageClick=()=>{
    const obj={
      avatar:file
    }
    inputRef.current.click()

    console.log(obj)
  }


  return (
    <>
      <Heading>User Profile</Heading>
      <Box height={"75vh"} width={"85vw"} borderRadius={"10px"} border={"1px solid lightgrey"} margin={"8vh auto"}>
        <Box height={"10vh"} borderBottom={"1px solid lightgrey"}>
          <Text fontSize={"2xl"} fontWeight={'normal'} align={"left"} pos={"relative"} top={"2vh"} left={"2vw"}>Basic Info</Text>
        </Box>

          <Box width={"25vw"} borderRadius={"50%"} pos={"relative"} top={"3vh"} left={"2vw"}>
              <Image
                borderRadius='full'
                boxSize='400px'
                src='https://bit.ly/dan-abramov'
                alt='Dan Abramov'
                
              />
              <input type='file'  ref={inputRef} onChange={handleFileChange} style={{display:'none'}} />
              <Button onClick={handleImageClick}>Update</Button>
          </Box>
      </Box>
    </>
  )
}
