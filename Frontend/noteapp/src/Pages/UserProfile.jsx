import { Avatar, Box, Button, HStack, Heading, Image, Input, Text, VStack, WrapItem } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useRef, useState } from 'react'
import { UserNav } from '../MainComponents/UserNav'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../Redux/UserRedux/action'
export const UserProfile = () => {
  const id = localStorage.getItem("userId")
  const [data,setData] = useState("")
  const dispatch = useDispatch()
  const {user} = useSelector((store)=>{
    console.log(store,"userStore")
    return {
      user: store.userReducer.user
    }
  })
  console.log(id)
  useEffect(()=>{
    const data = user?.find((el)=> el._id === id)
    setData(data)
    console.log(data,"datauseeffect")
  },[user,id])
  useEffect(()=>{
    dispatch(getUser)
    
  },[dispatch])
  // console.log(user[0].avatar)
  console.log(data,'data1')
  const img = `http://localhost:8080/${data?.avatar}`
  console.log(data?.avatar)
  return (
    <>
      <UserNav />
      <Box bgColor={"#e5eaea"} height={"91.30vh"} width={"100%"}>
        <VStack width={"55vw"} margin={"auto"} height={"60vh"} borderRadius={"6px"} backgroundColor={"#fafbf9"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} pos={"relative"} top={"20vh"} left={"2vw"}>
          <Box borderRadius={"full"} border={"3px solid #053c46"} pos={"relative"}
              bottom={"15vh"}>
            <Image
              borderRadius='full'
              boxSize='210px'
              src={img}
              alt={data?.name}
              justifyContent={"center"}
            />
          </Box>
          <Text fontSize={"5xl"} fontWeight={"medium"} color={"#053c46"} pos={"relative"} bottom={"14vh"} >{data?.name}</Text>
          <Text fontSize={"xl"} fontWeight={"medium"} color={"#6b6d6d"} pos={"relative"} bottom={"15vh"}>@{data?.email}</Text>
          <HStack gap={"30vw"} pos={"relative"} bottom={"7vh"}>
            <VStack gap={"10px"}>
              <Text fontSize={"md"} color={"#6b6d6d"}>Phone</Text>
              <Text pos={"relative"} bottom={"1vh"} fontSize={"lg"} fontWeight={"medium"} color={"#053c46"}>{data?.phone ? data?.phone:"N/A"}</Text>
            </VStack>
            <VStack gap={"10px"}>
              <Text fontSize={"md"} color={"#6b6d6d"}>Age</Text>
              <Text pos={"relative"} bottom={"1vh"} fontSize={"lg"} fontWeight={"medium"} color={"#053c46"}>{data?.age ? data?.age:"N/A"}</Text>
            </VStack>
          </HStack>
        </VStack>
      </Box>
    </>
  )
}
