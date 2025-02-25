export type RequestType = 'get' | 'post' | 'put' | 'patch' | 'delete'
export interface ServiceType {
    path: string,
    name: string,
    id: string,
    requestTypeName?: string,
    responseTypeName?: string,
    requestType: RequestType,
}