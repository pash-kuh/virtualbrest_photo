export type OneItemPhoto = {
    img: string
    title: string
    key: string
}

export type ResponseYandexSavedType = {
    operation_id: string,
    href: string,
    method: "PUT" | "PATCH" | "DELETE"
    templated: boolean
    message?: string
}
export type ResponseYandexGetType = {
    message?: string
    error?: string
    comment_ids: object
    created: string
    exif: object
    modified: string
    name: string
    path: string
    resource_id: string
    revision: number
    type: string
    _embedded: ResponseYandexDataType
}

export type ResponseYandexDataType = {
    items: any[]
    limit: number
    offset: number
    path: string
    sort: string
    total: number
}