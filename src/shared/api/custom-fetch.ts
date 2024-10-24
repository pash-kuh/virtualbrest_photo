import { NextResponse } from "next/server"
import { uploadOptions } from "@/shared/constants"
import path from "path"

type OptionsFetchType = {
    headers: {
        [key: string]: string
    }
    cache?: "force-cache" | string
    next?: {
        revalidate: number
    }
}
type CustomFetchType = {
    url: string
    options?: RequestInit & OptionsFetchType
}


const defaultOptions = {
    headers: { "Content-type": "application/json" }
}


export const fetchApi = async ({ url, options }: CustomFetchType) => {
    if (!options) {
        options = defaultOptions
    }

    const response = await fetch(url, options)

    if (!response) {
        return NextResponse.json(notFoundStatus)
    }

    const result = await response.json()

    return result
}

export const notFoundStatus = { statusCode: 400 }
export const badGatewayStatus = { statusCode: 502 }
export const correctStatus = (data: unknown) => ({ statusCode: 200, data })
export const ROOT_URL = process.env.PROD_ROOT_URL
export const getPathToImageFolder = () => {
    const { pathToImageFolder, rootFolderName } = uploadOptions

    const devPaths = path.join(process.cwd(), "../", rootFolderName)
    const prodPaths = path.join(process.cwd(), pathToImageFolder, rootFolderName)

    return process.env.NODE_ENV === "development" ? devPaths : prodPaths
}
