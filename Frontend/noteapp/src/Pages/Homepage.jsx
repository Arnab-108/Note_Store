import React, { useEffect } from 'react'
import { Navbar } from '../Component/Navbar'
import { Header } from '../Component/Heading'
import { Box } from '@chakra-ui/react'
import { Body } from '../Component/Body'
import { Body1 } from '../Component/Body1'
import { Footer } from '../Component/Footer'
import axios from 'axios'

export const Homepage = () => {
  const time = Date.now()
  const currentDate = new Date(time);
  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
  const day = currentDate.getDate().toString().padStart(2, '0');
  const hours = currentDate.getHours().toString().padStart(2, '0');
  const minutes = currentDate.getMinutes().toString().padStart(2, '0');
  const seconds = currentDate.getSeconds().toString().padStart(2, '0');
  const readableForm = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
  useEffect(() => {
    axios.get("https://render-store.onrender.com/").then((res) => {
      localStorage.setItem("time", readableForm)
      console.log(readableForm)

    })
  }, [])
  return (
    <>
      <Box>
        <Navbar />
      </Box>
      <Box pos={"relative"} top={"5vh"}>
        <Header />
      </Box>
      <Box pos={"relative"} top={"9vh"}>
        <Body />
      </Box>
      <Box pos={'relative'} top={'15vh'}>
        <Body1 />
      </Box>
      <Box pos={"relative"} top={['100vh','79vh','72vh','55vh','50vh','15vh','25vh']}>
        <Footer />
      </Box>

    </>
  )
}
