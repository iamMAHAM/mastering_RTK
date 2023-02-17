import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../app/store';
import { Box, Typography } from '@mui/material';
import { selectAllPosts } from './postsSlice';
type Props = {};

const PostsList = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const posts = useSelector(selectAllPosts);

  return (
    <Box>
      {posts.map(({ id, title, body }) => (
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
          <Typography variant="h3" fontWeight={'bolder'} noWrap>
            {title}
          </Typography>
          <Typography>{body.substring(0, 100)}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default PostsList;
