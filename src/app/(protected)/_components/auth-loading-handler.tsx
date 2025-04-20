'use client'
import { useAuth0 } from '@auth0/auth0-react'
import { ReactNode } from 'react'

type AuthLoadingHandlerProps = Readonly<{
   children: ReactNode
}>

function AuthLoadingHandler(props: AuthLoadingHandlerProps) {

   const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0()

   if (isLoading)
      return <div>loading...</div>

   if (!isAuthenticated) {
      loginWithRedirect().then()
      return <div>xxx...</div> // TODO
   }

   return <div>{props.children}</div>
}

export default AuthLoadingHandler
