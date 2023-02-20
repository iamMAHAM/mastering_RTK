import { Box, Container, Stack } from '@mui/material';
import PostsList from './features/posts/PostsList';
import AddPostForm from './features/posts/AddPostForm';

type Props = {};

const App = (props: Props) => {
  return (
    <Box sx={{ width: '100%', margin: 'auto' }}>
      <AddPostForm />
      <PostsList />
    </Box>
  );
};

export default App;
