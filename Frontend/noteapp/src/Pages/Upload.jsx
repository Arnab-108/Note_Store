import React, { useEffect, useState } from 'react'
import {
  Center,
  Heading,
  HStack,
  InputGroup,
  InputLeftAddon,
  useDisclosure,
  Image,
  Box,
  Input,
  Checkbox,
  InputRightElement,
  Text,
  Link,
  Button,
  useToast,
} from "@chakra-ui/react";
import { NavInside } from '../MainComponents/NavInside';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../Redux/UserRedux/action';
import { postFile } from '../Redux/FileReducer/action';
export const Upload = () => {
  const toast = useToast()
  const [data, setData] = useState({})
  const [name,setName] = useState("")
  const [description , setDescription] = useState("")
  const [file,setFile] = useState("")
  const dispatch = useDispatch()
  const id = localStorage.getItem("userId")
  console.log(id)
  const { user } = useSelector((store) => {
    console.log(store, "inside")
    return {
      user: store.userReducer.user
    }
  })
  useEffect(() => {
    dispatch(getUser)
  }, [dispatch])

  useEffect(() => {
    const data = user?.find((el) => el._id === id)
    setData(data)
    console.log(data, "useInside")
  }, [user, id])


  console.log(data)
  console.log(data?.avatar)
  const img = `https://render-store.onrender.com/${data?.avatar}`
  console.log(img, "img")


  const handleSubmit=()=>{
    const obj = {
      name,
      description,
      file
    }

    console.log(obj)
    dispatch(postFile(obj)).then(()=>{
      toast({
        title:"File Successfully added!",
        status:"success",
        duration:2000,
        isClosable:true,
        position:"top-right"
    })
    })
  }
  return (
    <>
      <Box>
        <NavInside img={img} />
      </Box>
      <Box m={"34px 45px 50px 45px"}>
        <Heading
          fontFamily={" Times, serif"}
          fontWeight="100"
          fontSize={"28px"}
          mb="24px"
          color={"#333368"}
        >
          Upload
        </Heading>
        <Box mt={"6vh"}>

          <InputGroup mt={"2vh"} mb={"2vh"}>
            <InputLeftAddon height={"7.25vh"}>
              Name
            </InputLeftAddon>
            <Input
              name="name"
              placeholder="Name"
              value={name}
              h={"50px"}
              fontSize="16px"
              focusBorderColor="rgb(206, 206, 223)"
              borderColor={"rgb(206, 206, 223)"}
              rounded="2xl"
              mb={"5px"}
              onChange={(e)=>{setName(e.target.value)}}
            />
          </InputGroup>


          <InputGroup mt={"2vh"} mb={"2vh"}>
            <InputLeftAddon height={"7.25vh"}>
              Description
            </InputLeftAddon>
            <Input
              name="description"
              placeholder="Description"
              value={description}
              type="textarea"
              h={"50px"}
              fontSize="16px"
              focusBorderColor="rgb(206, 206, 223)"
              borderColor={"rgb(206, 206, 223)"}
              rounded="2xl"
              mb={"5px"}
              onChange={(e)=>{setDescription(e.target.value)}}
            />
          </InputGroup>
          <InputGroup mt={"2vh"} mb={"2vh"}>
            <InputLeftAddon height={"7.25vh"}>
              File
            </InputLeftAddon>
            <Input
              name="file"
              type='file'
              placeholder='Upload Image'
              height={"3vh"}
              h={"50px"}
              fontSize="16px"
              focusBorderColor="rgb(206, 206, 223)"
              borderColor={"rgb(206, 206, 223)"}
              rounded="2xl"
              mb={"5px"}
              paddingTop={"10px"}
              onChange={(e)=>{setFile(e.target.files[0])}}
              required
            />
          </InputGroup>
        </Box>
        <Button
          //isLoading={loading}
          onClick={handleSubmit}
          bgColor={"blue.500"}
          width="100%"
          color={"white"}
          borderRadius={"35px/35px"}
          h="50px"
          fontSize="18px"
          _hover={{ backgroundColor: "blue.500" }}
          pos={"relative"}
          top={"4vh"}
        >
          Upload
          {/* <ToastContainer /> */}
        </Button>
      </Box>
    </>
  )
}
