const baseURLs = {
    MY_API: process.env.NODE_ENV === "development" ? process.env.LOCALHOST_API_URL : process.env.API_URL,
    VIRTUALBREST_URL: process.env.VIRTUALBREST_URL
}

export const apiRequests = {
    async getAuth() {
        const response = await fetch(`${baseURLs.MY_API}/auth`)

        return response.json()
    },
}