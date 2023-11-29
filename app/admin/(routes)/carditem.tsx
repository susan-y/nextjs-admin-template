import {Typography} from '@mui/material'
import {Card, CardBody} from '@nextui-org/react'
import {blueGrey} from '@mui/material/colors'

interface CardItemProps {
  title: String
  value: Number
  children: React.ReactNode
}
export default function CardItem({title, value, children}: CardItemProps) {
  const defaultColor = blueGrey[400]
  return (
    <Card className="flex-1 py-2">
      <CardBody className="flex flex-row gap-3 items-center">
        <div className="ml-4 mr-3">{children}</div>
        <div className="flex flex-col">
          <Typography variant="subtitle1" color={defaultColor}>
            {title}
          </Typography>
          <Typography variant="h3">{`${value}`}</Typography>
        </div>
      </CardBody>
    </Card>
  )
}
