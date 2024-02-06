import React from 'react'
import { Navbar } from '../Component/Navbar'
import { Header} from '../Component/Heading'
import { Box } from '@chakra-ui/react'
import { Body } from '../Component/Body'

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
    </>
  )
}
