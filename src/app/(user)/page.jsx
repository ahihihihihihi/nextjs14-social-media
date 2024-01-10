'use client'

import Stories from '@/components/stories/Stories'
import Posts from '@/components/posts/Posts'
import './home.scss'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { AuthContext } from '@/context/authContext'
import { DarkModeContext } from '@/context/darkModeContext'

export default function Home() {

  // const router = useRouter()

  const { currentUser } = useContext(AuthContext);

  const { darkMode } = useContext(DarkModeContext)

  // console.log(">>>check darkMode: ", darkMode) 


  // if (!currentUser) {
  //   router.push("/login")
  // }

  return (
    <div className="home">
      <Stories />
      <Posts />
    </div>
  )
}
