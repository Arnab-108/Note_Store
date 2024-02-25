import React, { useEffect, useState } from 'react'
import { NavInside } from '../MainComponents/NavInside'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../Redux/UserRedux/action'

export const InsidePage = () => {
  const [data,setData] = useState({})
  const dispatch = useDispatch()
  const id = localStorage.getItem("userId")
  console.log(id)
  const {user} = useSelector((store)=>{
    console.log(store,"inside")
    return {
      user: store.userReducer.user
    }
  })
  useEffect(()=>{
    dispatch(getUser)
  },[dispatch])

  useEffect(()=>{
    const data = user?.find((el)=>el._id===id)
    setData(data)
    console.log(data,"useInside")
  },[user,id])

  
  console.log(data)
  console.log(data?.avatar)
  const img = `http://localhost:8080/${data?.avatar}`
  console.log(img,"img")
  return (
    <>
        <NavInside img={img} />
    </>
  )
}
