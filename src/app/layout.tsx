import './globals.scss'
import type { Metadata } from 'next'
import { ReactNode } from 'react'
import Auth0Wrapper from '@/app/_components/wrappers/auth0-wrapper'
import ThemeWrapper from '@/app/_components/wrappers/theme-wrapper'

const metadata: Metadata = {
   title: 'keep',
   description: 'If I ruled the world'
}

type RootLayoutProps = Readonly<{
   children?: ReactNode
}>

function RootLayout(props: RootLayoutProps) {
   return (
      <html lang='en' suppressHydrationWarning>
         <body>
            <ThemeWrapper>
               <Auth0Wrapper>{props.children}</Auth0Wrapper>
            </ThemeWrapper>
         </body>
      </html>
   )
}

export default RootLayout
export { metadata }