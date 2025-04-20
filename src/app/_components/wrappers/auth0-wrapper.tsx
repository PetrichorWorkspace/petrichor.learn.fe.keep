'use client'
import { Auth0Provider } from '@auth0/auth0-react'
import Auth0Config from '@/services/auth0/auth0-config'
import { ReactNode } from 'react'

type Auth0ProviderClientLayoutProps = Readonly<{
   children: ReactNode;
}>

function Auth0Wrapper(props: Auth0ProviderClientLayoutProps) {
   return (
      <Auth0Provider {...Auth0Config}>
         {props.children}
      </Auth0Provider>
   )
}

export default Auth0Wrapper