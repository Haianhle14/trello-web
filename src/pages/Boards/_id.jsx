import { useState, useEffect } from 'react'
import Container from '@mui/material/Container'
import AppBar from '~/components/AppBar/AppBar'
import BoarBar from './BoardBar/BoardBar'
import BoarContent from './BoardContent/BoardContent'
import { fetchBoardDetailsAPI } from '~/apis'
import { mockData } from '~/apis/mock-data'
function Board() {
  const [board, setBoard] = useState(null)
  useEffect(() => {
    const boardId = '67b2fa75c030d8786f19f01b'
    fetchBoardDetailsAPI(boardId).then(board => {
      setBoard(board)
    })
  }, [])

  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <AppBar></AppBar>
      <BoarBar board={ mockData?.board }></BoarBar>
      <BoarContent board={ mockData?.board }></BoarContent>
    </Container>
  )
}
export default Board