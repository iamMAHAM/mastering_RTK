import { Button, MenuItem, Select, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import { useAppDispatch } from '../../app/store';
import { postAdded } from './postsSlice';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAllUsers } from '../users/usersSlice';

type Props = {};

const AddPostForm = (props: Props) => {
  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const [userId, setUserId] = useState<number>(1);
  const users = useSelector(selectAllUsers);
  const dispath = useAppDispatch();
  return (
    <Box component="form" noValidate autoComplete="off" p={10}>
      <TextField
        placeholder="title"
        fullWidth
        required
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        placeholder="content"
        margin={'dense'}
        fullWidth
        multiline
        minRows={5}
        onChange={(e) => setBody(e.target.value)}
      />
      <Select
        label="select author"
        fullWidth
        placeholder="select author"
        margin="dense"
        value={userId}
        onChange={(e) => setUserId(e.target.value as number)}
      >
        {users.map((u) => (
          <MenuItem key={u.id} value={u.id}>
            {u.name}
          </MenuItem>
        ))}
      </Select>
      <Button
        variant="contained"
        fullWidth
        onClick={() => dispath(postAdded(title, body, userId))}
      >
        submit
      </Button>
    </Box>
  );
};

export default AddPostForm;
