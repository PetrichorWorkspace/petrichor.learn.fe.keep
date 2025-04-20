import { Card, CardBody } from '@heroui/card'

type NotesProps = Readonly<{
   className?: string,
   body?: string
}>

function Note(props: NotesProps) {
   return (
      <Card>
         <CardBody>
            dunno who you are
         </CardBody>
      </Card>
   )
}

export default Note