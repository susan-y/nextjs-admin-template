import {Typography} from '@mui/material'

import CardList from './cardlist'
import DashboardTable from './table'

export default async function Dashboard() {
  return (
    <div className="p-4">
      <div>
        <Typography variant="h4" component="h2">
          Dashboard
        </Typography>
        <Typography variant="subtitle1">Preview of data</Typography>
      </div>
      <div className="px-2 pt-5 container mx-auto">
        <div>
          {/* Cards */}
          <CardList />
        </div>
        <div className="mt-3">
          <DashboardTable />
        </div>
      </div>
    </div>
  )
}
