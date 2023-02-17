import { Box, Container, Stack } from '@mui/material';
import PostsList from './features/posts/PostsList';

type Props = {};

const App = (props: Props) => {
  return (
    <Box sx={{ width: '100%', margin: 'auto' }}>
      <PostsList />
    </Box>
  );
};

export default App;
