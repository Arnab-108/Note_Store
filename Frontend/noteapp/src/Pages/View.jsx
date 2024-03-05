import { Grid, GridItem, Heading, Spinner } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFile } from '../Redux/FileReducer/action'
import { IndiFiles } from './IndiFiles'

export const View = () => {
    const dispatch = useDispatch()
    const {isLoading , file} = useSelector((store)=>{
      console.log(store);
      return{
        file:store.fileReducer.file,
        isLoading:store.fileReducer.isLoading
      }
    })

    useEffect(()=>{
      dispatch(getFile)
    },[])

    console.log(file,"file")
  return (
    <>
        <div>
          {
            isLoading ? <Spinner /> 
            :
            file.length===0 ?
            <Heading  display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"20px"} mt={"10vh"} color={"gray.400"}>Upload the files you wanna store!</Heading>
            :
              <Grid ml={"2vw"} mt={"5vh"} gap={5} gridTemplateColumns={"repeat(3,1fr)"}>
                {
                  file?.map((el)=>(
                    <GridItem>
                      <IndiFiles 
                        key={el._id}
                        {...el}
                      />
                    </GridItem>
                  ))
                }

              </Grid>
          }
        </div>
    </>
  )
}
