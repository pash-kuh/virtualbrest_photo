import { NextResponse } from "next/server"

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

export const notFoundStatus = { statusCode: 404 }