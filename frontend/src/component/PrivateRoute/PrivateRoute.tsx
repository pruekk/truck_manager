import React, { useContext, useEffect } from "react";
import { Route, Redirect } from 'react-router-dom'
import {message} from "antd";
import * as jwt from 'jsonwebtoken'

import { AccessTokenDecoded, PrivateRouteProps } from '../../types/components/PrivateRoute'
import UserContext from "../../contexts/UserContext";
import { getCurrentTimestamp } from '../../utils/date'

const getExpireFromToken = (token: string): number => {
    const { expires }:AccessTokenDecoded = Object(jwt.decode(token))

    return expires
}

const PrivateRoute = ({ component: Component, ...rest }:PrivateRouteProps  ) => {
    const {
        isLoggedIn,
        accessToken,
        setIsLoggedIn,
        setAccessToken,
        setUser
    } = useContext(UserContext)

    const accessTokenExpire = getExpireFromToken(accessToken)
    const currentTimestamp = getCurrentTimestamp()

    useEffect(() => {
        if( currentTimestamp > accessTokenExpire) {
            setAccessToken('')
            setUser({})
            setIsLoggedIn(false)
            message.error('Session has expired')
            return
        }
    })

    return (
        <Route {...rest} render={
            (props) => (
                isLoggedIn ? <Component {...props} /> : <Redirect to="/Login" />
            )
        } />
    )
}

export default PrivateRoute
