export type FileObjectType = {
    imageURL: string
}

export type OneItemPhoto = FileObjectType & {
    key: string
}

export type ToolbarKeysType = "contact" | "mobileApp" | "webApp"

export type TypeOfView = "standard" | "quilt" | "folder"

export type NotificationMessagesType = {
    archive : {
        title: string
        description: string | JSX.Element
        id: number
        utils?: {
            link: string
            email: string
        }
    }[],
    current : {
        id: number
        title: string
        description: string | JSX.Element
        utils?: {
            link: string
            email: string
        }
    }[],
}