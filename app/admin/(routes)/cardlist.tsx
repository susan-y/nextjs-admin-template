import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone'
import InputTwoToneIcon from '@mui/icons-material/InputTwoTone'
import FileUploadIcon from '@mui/icons-material/FileUpload'
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import CardItem from './carditem'

export default function CardList() {
  return (
    <div className="flex flex-row gap-2">
      <CardItem title="Total user" value={256}>
        <PeopleAltTwoToneIcon fontSize="large" color="primary" />
      </CardItem>
      <CardItem title="Logged in" value={1430}>
        <InputTwoToneIcon fontSize="large" color="secondary" />
      </CardItem>
      <CardItem title="File upload" value={2498}>
        <FileUploadIcon fontSize="large" color="success" />
      </CardItem>
      <CardItem title="File download" value={3107}>
        <FileDownloadIcon fontSize="large" color="warning" />
      </CardItem>
    </div>
  )
}
