type typedFetchFunction = <TResponse>(url: string, config?: RequestInit) => Promise<TResponse>

const doFetch: typedFetchFunction = async <TResponse>(url: string, config: RequestInit = {}): Promise<TResponse> => {
    try {
        const response = await fetch(url, config)
        const data: TResponse = await response.json()
        return data as TResponse
    } catch (error) {
        return Promise.reject(error)
    }
}

export {
    doFetch
}
