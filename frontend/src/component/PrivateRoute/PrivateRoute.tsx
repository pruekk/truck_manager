import React, { useContext, useEffect } from "react";
import { Route, Redirect, useHistory } from 'react-router-dom'
import {message} from "antd";
import * as jwt from 'jsonwebtoken'

import { AccessTokenDecoded, PrivateRouteProps } from '../../types/components/PrivateRoute'
import UserContext from "../../contexts/UserContext";
import { getCurrentTimestamp } from '../../utils/date'
import { requestRefreshToken } from '../../hooks/auth'

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
    const history = useHistory()

    const accessTokenExpire = getExpireFromToken(accessToken)
    const currentTimestamp = getCurrentTimestamp()
    const toRefreshToken = async () => {
        try {
            const data = await requestRefreshToken(accessToken)
            setAccessToken(data.accessToken)
            setIsLoggedIn(true)
            setUser(data)
        } catch (error) {
            setAccessToken('')
            setUser({})
            setIsLoggedIn(false)
            message.error('Unauthorized')
            return history.push('/login')
        }
    }

    useEffect(() => {
        if( currentTimestamp > accessTokenExpire) {
            setAccessToken('')
            setUser({})
            setIsLoggedIn(false)
            message.error('Session has expired')
            return
        }

        const needToRefresh = ((accessTokenExpire - currentTimestamp) < 60)
        if( needToRefresh ){
            toRefreshToken()
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
