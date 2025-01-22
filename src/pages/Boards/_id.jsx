import Container from '@mui/material/Container'
import AppBar from '~/components/AppBar/AppBar'
import BoarBar from './BoardBar/BoardBar'
import BoarContent from './BoardContent/BoardContent'


function Board() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <AppBar></AppBar>
      <BoarBar></BoarBar>
      <BoarContent></BoarContent>
    </Container>
  )
}

export default Board
