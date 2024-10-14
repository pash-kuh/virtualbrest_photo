"use client"

import React from "react"
import { Header } from "@/components/header/header"
import { Content } from "@/components/content/content"
import { Footer } from "@/components/footer/footer"

import s from "./page.module.css"

export default function Home() {
  return (
      <div className={s.main_block}>
        <Header />

        <Content />

        <Footer />
      </div>
  )
}