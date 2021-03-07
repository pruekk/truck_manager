export interface AccessTokenDecoded {
    audience: string
    expires: number
    issuesAt: number
}

export interface PrivateRouteProps {
    component: any
    exact: any
    path: string
}
