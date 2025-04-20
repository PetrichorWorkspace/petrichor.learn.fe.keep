import { ReactNode } from 'react'
import AuthLoadingHandler from '@/app/(protected)/_components/auth-loading-handler'

type ProtectedLayoutProps = Readonly<{
   children: ReactNode;
}>

function ProtectedLayout(props: ProtectedLayoutProps) {
   return (
      <AuthLoadingHandler>
         {props.children}
      </AuthLoadingHandler>
   )
}

export default ProtectedLayout