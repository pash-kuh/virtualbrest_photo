"use server"

import { NextResponse } from "next/server"
import { readdir } from "fs/promises"
import { badGatewayStatus, correctStatus, getPathToImageFolder, ROOT_URL } from "@/shared/api/custom-fetch"
import { uploadOptions } from "@/shared/constants"

export async function GET() {
    try {
        const directoryPath = getPathToImageFolder()
        const files = await readdir(directoryPath)

        const jsonObjects = files.map(file => ({
            imageURL: `${ROOT_URL}/${uploadOptions.rootFolderName}/${file}`
        }))

        return NextResponse.json(correctStatus(jsonObjects))
    } catch (error) {
        console.log(error)
        return NextResponse.json(badGatewayStatus)
    }
}