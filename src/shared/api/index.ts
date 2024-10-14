import { FileObjectType } from "@/shared/types"

const CURRENT_URL = process.env.NODE_ENV === "development"
    ? process.env.LOCALHOST_API_URL
    : process.env.PROD_API_URL

export const baseURLs = {
    VIRTUALBREST_URL: process.env.VBREST_URL,
    UPLOAD_PHOTO_URL: `${CURRENT_URL}/photos/save-photo`
}

export const apiRequests = {
    async getPhotos() {
        const response = await fetch(`${CURRENT_URL}/get-photo`)

        return response.json()
    },
    async savePhotos({ files }: { files: FileObjectType[] }) {
        const response = await fetch(
            `${CURRENT_URL}/save-photo`,
                getParams(files)
            )

        return response.json()
    },
}

function getParams(files: unknown) {
    return {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(files)
    }
}