import { Box, Image } from '@chakra-ui/react'
import React from 'react'

export const Body = () => {
  return (
    <>
        <Box height={"80vh"} width={"100%"} >
            <Image 
                boxSize={"100%"}
                objectFit={"cover"}
                src='https://simplenoteblog.files.wordpress.com/2020/07/img_simplenote_hero.png'
            />
        </Box>
    </>
  )
}
