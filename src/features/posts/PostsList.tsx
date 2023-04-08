import { useSelector } from 'react-redux';
import { Box, Stack, Typography } from '@mui/material';
import {
  selectAllPosts,
  getPostStatus,
  getPostsError,
  fetchPosts,
} from './postsSlice';
import { useEffect } from 'react';
import { useAppDispatch } from '../../app/store';
type Props = {};

const PostsList = (props: Props) => {
  const posts = useSelector(selectAllPosts);
  const status = useSelector(getPostStatus);
  const error = useSelector(getPostsError);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log('status ', status);
    if (status === 'idle') {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);

  if (status === 'loading') return <div>loading ...</div>;

  return (
    <Stack
      direction={'row'}
      sx={{ flexWrap: 'wrap' }}
    >
      {posts.map(({ id, title, body, userId }) => (
        <Box
          key={id}
          sx={{
            padding: 5,
            border: '2px solid black',
            maxWidth: 500,
            margin: '5px auto',
            borderRadius: 10,
          }}
        >
          <Typography
            variant='h3'
            fontWeight={'bolder'}
            noWrap
          >
            {title}
          </Typography>
          <Typography>{body.substring(0, 100)}</Typography>
          <Typography>Author: {userId}</Typography>
        </Box>
      ))}
    </Stack>
  );
};

export default PostsList;
