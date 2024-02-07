import React from 'react'
import { Navbar } from '../Component/Navbar'
import { Header} from '../Component/Heading'
import { Box} from '@chakra-ui/react'
import { Body } from '../Component/Body'
import { Body1 } from '../Component/Body1'
import { Footer } from '../Component/Footer'

export const Homepage = () => {
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
        <Box pos={"relative"} top={'25vh'}>
          <Footer />
        </Box>
        
    </>
  )
}
