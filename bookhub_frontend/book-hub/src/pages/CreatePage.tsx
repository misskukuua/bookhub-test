import React, { useState, useEffect } from 'react';
import { getBooks, createBook, updateBook, deleteBook } from '../api';
import { Container, TextField, Button, Typography, Grid, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import BookItem from '../components/BookItem';
import './CreatePage.css';

const BooksManager: React.FC = () => {
  const [books, setBooks] = useState<any[]>([]);
  const [newBookData, setNewBookData] = useState<any>({ title: '', author: '', genre: '', about: '', publicationDate: '' });
  const [selectedBook, setSelectedBook] = useState<any>(null);

   // Define state for filters
   const [filters, setFilters] = useState<{ publicationDate: string; genre: string; title: string; author: string }>({
    publicationDate: '',
    genre: '',
    title: '',
    author: '',
  });

  useEffect(() => {
    fetchAllBooks();
  }, []);

  const fetchAllBooks = async () => {
    try {
      const data = await getBooks(); // Fetch books from API
      setBooks(data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  
  const handleCreateBook = async () => {
    try {
      await createBook(newBookData); // Call API to create a new book
      fetchAllBooks(); // Refresh book list
      setNewBookData({ title: '', author: '', genre: '', about: '', publicationDate: '' }); // Clear input fields
    } catch (error) {
      console.error('Error creating book:', error);
    }
  };

  const handleUpdateBook = async () => {
    if (!selectedBook) return;

    try {
      await updateBook(selectedBook._id, selectedBook); // Call API to update selected book
      fetchAllBooks(); // Refresh book list
      setSelectedBook(null); // Clear selected book after update
    } catch (error) {
      console.error('Error updating book:', error);
    }
  };

  const handleDeleteBook = async (bookId: string) => {
    try {
        await deleteBook(bookId); // Call the deleteBook function
        fetchAllBooks(); // Refresh the book list after deletion
    } catch (error) {
        console.error('Error deleting book:', error);
    }
};

  const handleSelectBook = (book: any) => {
    setSelectedBook(book); // Set selected book for update
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewBookData({ ...newBookData, [name]: value });
  };

  const handleSelectedBookChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setSelectedBook({ ...selectedBook, [name]: value });
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, filterName: string) => {
    const { value } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };

  // Filter books based on current filters
const filteredBooks = books.filter(book => {
  return (
    (filters.publicationDate === '' || book.publicationDate?.includes(filters.publicationDate)) &&
    (filters.genre === '' || book.genre.toLowerCase().includes(filters.genre.toLowerCase())) &&
    (filters.title === '' || book.title.toLowerCase().includes(filters.title.toLowerCase())) &&
    (filters.author === '' || book.author.toLowerCase().includes(filters.author.toLowerCase()))
  );
});


const applyFilters = (_event: React.MouseEvent<HTMLButtonElement>) => {
  // Your filter logic goes here
  console.log('Applying filters...');
};


  return (
    <Container>
      <Typography variant="h2" gutterBottom color={"purple"} textAlign={"center"}>Books Manager</Typography>
      <Typography paragraph color={"black"} textAlign={"center"}>
        Welcome to the Books Manager application! <br></br>This application allows you to manage a collection of books. <br></br>You can
        create, update, and delete books using the form and buttons below. Enjoy exploring and managing your book collection!
      </Typography>

      <Typography variant="h5" gutterBottom color={"purple"}>Create a Book</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Title" name="title" value={newBookData.title} onChange={handleChange} sx={{ '& .MuiInputLabel-root': { color: 'purple' } }} />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Author" name="author" value={newBookData.author} onChange={handleChange} sx={{ '& .MuiInputLabel-root': { color: 'purple' } }} />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Genre" name="genre" value={newBookData.genre} onChange={handleChange} sx={{ '& .MuiInputLabel-root': { color: 'purple' } }} />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="About" name="about" value={newBookData.about} onChange={handleChange} sx={{ '& .MuiInputLabel-root': { color: 'purple' } }} />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Publication Date" name="publicationDate" value={newBookData.publicationDate} onChange={handleChange} sx={{ '& .MuiInputLabel-root': { color: 'purple' } }} />
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained" onClick={handleCreateBook} sx={{ bgcolor: 'purple', color: 'white', '&:hover': { bgcolor: 'Fuchsia' } }}>Create Book</Button>
        </Grid>
      </Grid>

      {/* update books */}
      {selectedBook && (
        <>
          <Typography variant="h5" gutterBottom color={"purple"} marginTop={"50px"}>Update a Book</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Title" name="title" value={selectedBook.title} onChange={handleSelectedBookChange} sx={{ '& .MuiInputLabel-root': { color: 'purple' } }} />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Author" name="author" value={selectedBook.author} onChange={handleSelectedBookChange} sx={{ '& .MuiInputLabel-root': { color: 'purple' } }} />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Genre" name="genre" value={selectedBook.genre} onChange={handleSelectedBookChange} sx={{ '& .MuiInputLabel-root': { color: 'purple' } }} />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="About" name="about" value={selectedBook.about} onChange={handleSelectedBookChange} sx={{ '& .MuiInputLabel-root': { color: 'purple' } }} />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Publication Date" name="publicationDate" value={selectedBook.publicationDate} onChange={handleSelectedBookChange} sx={{ '& .MuiInputLabel-root': { color: 'purple' } }} />
            </Grid>

            <Grid item xs={12}>
              <Button variant="contained" onClick={handleUpdateBook} sx={{ bgcolor: 'purple', color: 'white', '&:hover': { bgcolor: 'Fuchsia' } }}>Update Book</Button>
            </Grid>
          </Grid>
        </>
      )}

      {/* filter books */}
      <Typography variant="h5" gutterBottom color={"purple"} marginTop={"50px"}>Book Filter</Typography>
      <Grid container spacing={2}>
      <Grid item xs={12} sm={3}>
          <TextField fullWidth label="Title" value={filters.title} onChange={(e) => handleFilterChange(e, 'title')} sx={{ '& .MuiInputLabel-root': { color: 'purple' } }}/>
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField fullWidth label="Author" value={filters.author} onChange={(e) => handleFilterChange(e, 'author')} sx={{ '& .MuiInputLabel-root': { color: 'purple' } }}/>
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField fullWidth label="Genre" value={filters.genre} onChange={(e) => handleFilterChange(e, 'genre')} sx={{ '& .MuiInputLabel-root': { color: 'purple' } }}/>
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField fullWidth label="Publication Date" value={filters.publicationDate} onChange={(e) => handleFilterChange(e, 'publicationDate')} sx={{ '& .MuiInputLabel-root': { color: 'purple' } }}/>
        </Grid>
        <Grid item xs={12} sm={12} style={{ textAlign: 'right' }}>
    <Button variant="contained" onClick={applyFilters} sx={{ bgcolor: 'purple', color: 'white', '&:hover': { bgcolor: 'fuchsia' } }}>Apply Filters</Button>
  </Grid>
      </Grid>

      {/* List books */}
      <Typography variant="h5" gutterBottom color={"purple"} marginTop={"50px"}>Book List</Typography>
      <List>
        {books.map(book => (
          <ListItem key={book._id} divider>
            <ListItemText primary={`${book.title} - ${book.author} - ${book.genre} - ${book.about} - - ${book.publicationDate}`} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="edit" onClick={() => handleSelectBook(book)} sx={{ color: 'purple' }}>
                <Edit />
              </IconButton>
              <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteBook(book._id)} sx={{ color: 'purple' }}>
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List> 
       {/* Filtered book list */}
    <Typography variant="h5" gutterBottom color="purple" marginTop="50px">Filtered Book List</Typography>
    <div className="books-list">
      {filteredBooks.map(book => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
    </Container>
  );
};

export default BooksManager;
