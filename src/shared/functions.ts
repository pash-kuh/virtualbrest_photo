export const getBase64 = (file: any): Promise<string> => new Promise((resolve, reject) => {
    const reader = new FileReader()
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    reader.readAsDataURL(file as Blob)
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = error => reject(error)
})

export const getUrl = (file: any) => (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    URL.createObjectURL(file as Blob)
)

export const b64toBlob = (base64Data: string) => {
    const parts = base64Data.split(","),
          type = parts[0].split("")[0].split(":")[1],
          sliceSize = 512

    const byteCharacters = atob(parts[1])
    const byteArrays = []

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        const slice = byteCharacters.slice(offset, offset + sliceSize)

        const byteNumbers = new Array(slice.length)
        for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i)
        }

        const byteArray = new Uint8Array(byteNumbers)

        byteArrays.push(byteArray)
    }

    return new Blob(byteArrays, { type })
}

export const getDate = () => {
    const today = new Date()
    const dd = String(today.getDate()).padStart(2, '0')
    const mm = String(today.getMonth() + 1).padStart(2, '0')
    const yyyy = today.getFullYear()

    return `${dd}.${mm}.${yyyy}`
}
