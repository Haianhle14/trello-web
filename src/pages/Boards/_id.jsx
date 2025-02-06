import Container from '@mui/material/Container'
import AppBar from '~/components/AppBar/AppBar'
import BoarBar from './BoardBar/BoardBar'
import BoarContent from './BoardContent/BoardContent'
import { mockData } from '~/apis/mock-data'

function Board() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <AppBar></AppBar>
      <BoarBar board={ mockData?.board }></BoarBar>
      <BoarContent board={ mockData?.board }></BoarContent>
    </Container>
  )
}

export default Board
