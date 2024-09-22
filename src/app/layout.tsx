import React, { ReactNode } from "react"
import type { Metadata } from "next"
import { metadata as baseMetadata } from "@/shared/matadata"
import { Providers } from "@/shared/providers"

import "./globals.css"

export const metadata: Metadata = baseMetadata

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
      <Providers>
        <html lang="en">
          <body>
            {children}
          </body>
        </html>
      </Providers>
  )
}
