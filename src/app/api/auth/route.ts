import { config } from "@/shared/constants"
import { google } from "googleapis"
// import { notFoundStatus } from "@/shared/api/custom-fetch"
import { NextResponse } from "next/server"

const oauth2Client = new google.auth.OAuth2(
    config.client_id,
    config.client_secret,
    config.redirect_uris[0]
)

// const drive = google.drive({ version: "v3", auth: oauth2Client })

export async function GET() {
    // const { searchParams } = new URL(req.url!)
    // const id = searchParams.get('id')


    oauth2Client.setCredentials({ refresh_token: "" })


        return NextResponse.json( { auth: true })
    // } else {
    //     return NextResponse.json(notFoundStatus)
    // }
}

// setPhotos: async (files: { name: string, type: string, body: string }[]) => {
//             try {
//                 for (const file of files) {
//                     const response = await drive.files.create({
//                         requestBody: {
//                             name: file.name,
//                             mimeType: file.type
//                         },
//                         media: {
//                             mimeType: file.type,
//                             body: file.body
//                         }
//                     })
//
//                     if (response.data) {
//
//                     }
//                 }
//
//                 await drive.permission.create({
//                     field
//                 })
//             } catch (error) {
//                 console.log(error)
//             }
//         },
//         getPhotos: async () => {
//             return []
//         }