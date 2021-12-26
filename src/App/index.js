import { Route, Routes } from 'react-router-dom'
import { Typography } from '@material-ui/core'

import BookListContainer from '../BookList/BookListContainer'
import BookDetailContainer from '../BookDetail/BookDetailContainer'

const App = () => {
  return (
    <div className="App">
      <Typography variant="h2" component="h2" data-test="heading">
        Bookish
      </Typography>
      <Routes>
        <Route exact path="/" element={<BookListContainer />} />
        <Route path="/books/:id" element={<BookDetailContainer />} />
      </Routes>
    </div>
  )
}

export default App
