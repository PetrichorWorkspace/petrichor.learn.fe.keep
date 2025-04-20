'use client'
import { ThemeProvider } from 'next-themes'
import { ReactNode } from 'react'
import { HeroUIProvider } from "@heroui/system"

type ThemeProviderProps = Readonly<{
   children?: ReactNode
}>

function ThemeWrapper(props: ThemeProviderProps) {
   return (
      <HeroUIProvider>
         <ThemeProvider defaultTheme='dark'>
            {props.children}
         </ThemeProvider>
      </HeroUIProvider>
   )
}

export default ThemeWrapper