import Button from '@/app/_components/core/button'
import { Add } from 'iconsax-react'
import Note from '@/app/_components/note'

function HomePage() {
   return (
      <div>
         <Button icon={Add} isIconOnly={true}/>
         <Note/>
         <Note/>
         <Note/>
         <Note/>
      </div>
   )
}

export default HomePage