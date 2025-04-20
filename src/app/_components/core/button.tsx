import { Button as NextUiBtn } from '@heroui/button'
import { Icon as IconSax } from 'iconsax-react'
import Icon from '@/app/_components/core/icon'
import { ReactNode } from 'react'

type ButtonProps = Readonly<{
   icon?: IconSax,
   children?: ReactNode,
   className?: string,
   isIconOnly?: boolean
}>

function Button(props: ButtonProps) {
   return (
      <NextUiBtn className={`button ${props.className}`} isIconOnly={props.isIconOnly}>
         <>{props.icon && <Icon icon={props.icon}/>}</>
         <>{props.children}</>
      </NextUiBtn>
   )
}

export default Button