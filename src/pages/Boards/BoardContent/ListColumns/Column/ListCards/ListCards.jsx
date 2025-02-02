import Box from '@mui/material/Box'
import Card from './Card/Card'

function ListCards() {
  return (
    <Box sx={{
      p: 2,
      display: 'flex',
      flexDirection: 'column',
      gap: 1,
      overflowX: 'hidden',
      overflowY: 'auto',
      maxHeight: (theme) => `calc(
      ${theme.trello.boardContentHeight} - 
      ${theme.spacing(5)} - 
      ${theme.trello.columnHeaderHeight} - 
      ${theme.trello.columnFooterHeight}
    )`,
      '&::-webkit-scrollbar-thumb': { backgroundColor: '#ced0da' },
      '&:-webkit-scrollbar-thub:hover': { backgroundColor: '#bfc2cf' }
    }}>
      <Card></Card>
      <Card temporaryHideMedia></Card>
    </Box>
  )
}

export default ListCards