import { Icon as IconSax } from 'iconsax-react'

type IconProps = Readonly<{
   icon: IconSax,
   variant?: 'Linear' | 'Outline' | 'Broken' | 'Bold' | 'Bulk' | 'TwoTone'
}>

function Icon(props: IconProps) {
   return <props.icon className='icon' variant={props.variant} color='currentColor'/>
}

export default Icon