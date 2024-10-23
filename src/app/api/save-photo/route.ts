"use server"

import { writeFile } from "fs/promises"
import path from "path"
import {
    correctStatus, badGatewayStatus, notFoundStatus
} from "@/shared/api/custom-fetch"
import { NextResponse } from "next/server"
import { uploadOptions } from "@/shared/constants"


export async function POST(request: Request) {
    const { pathToImageFolder, rootFolderName } = uploadOptions

    try {
        const files = await request.json()

        if (!files || files.length === 0) { return NextResponse.json(notFoundStatus) }

        const directoryPath = path.join(process.cwd(), pathToImageFolder, rootFolderName)

        for (const file of files) {
            const arrayBuffer = await file.arrayBuffer()
            const buffer = Buffer.from(arrayBuffer)
            const filePath = path.join(directoryPath, file.imageURL)

            await writeFile(filePath, buffer)
        }

        return NextResponse.json(correctStatus("success"))
    } catch (error) {
        console.log(error)
        return NextResponse.json(badGatewayStatus)
    }
}