import {Typography} from '@mui/material'

export default async function PlaygroudPage() {
  return (
    <div className="p-4">
      <div>
        <Typography variant="h4" component="h2">
          Playground
        </Typography>
        <Typography variant="subtitle1">Playground page</Typography>
      </div>
      <div className="px-3 pt-3 text-lg">
        <div className="container mx-auto p-4"></div>
      </div>
    </div>
  )
}
