"use client"

import React, { useEffect, useState } from "react"
import { Header } from "@/components/header/header"
import { Content } from "@/components/content/content"
import { Footer } from "@/components/footer/footer"
import { apiRequests } from "@/shared/api"

import s from "./page.module.css"

export default function Home() {
  const [photos, setPhotos] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(true)

  const fetchDataFunc = async () => {
    const data = await apiRequests.getAuth()

    if (data) { setPhotos([]) }

    setLoading(false)
  }

  useEffect(() => { fetchDataFunc() }, [])

  return (
      <div className={s.main_block}>
        <Header />

        <Content
            photos={photos}
            setPhotos={setPhotos}
            setLoading={setLoading}
            loading={loading}
        />

        <Footer />
      </div>
  )
}