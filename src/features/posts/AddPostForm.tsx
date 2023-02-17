import { Button, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../app/store';
import { Post, postAdded } from './postsSlice';
import { useState } from 'react';

type Props = {};

const AddPostForm = (props: Props) => {
  const [post, setPost] = useState<Post>({});
  const dispath = useDispatch<AppDispatch>();
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        placeholder="title"
        fullWidth
        required
        onChange={(e) => setPost((old) => ({ ...old, title: e.target.value }))}
      />
      <TextField placeholder="content" fullWidth multiline minRows={5} />
      <Button
        variant="contained"
        fullWidth
        onSubmit={() => dispath(postAdded(post))}
      >
        submit
      </Button>
    </Box>
  );
};

export default AddPostForm;
