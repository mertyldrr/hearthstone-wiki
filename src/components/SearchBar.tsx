import { searchCardsByName } from '../redux/actions/cards/cards';
import { searchByCardbackName } from '../redux/actions/cardbacks/cardbacks';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  let onChangeHandler: (param: string) => void;
  if (location.pathname === '/cards') {
    onChangeHandler = (text: string) => {
      dispatch(
        searchCardsByName({
          searchText: text,
        })
      );
    };
  } else if (location.pathname === '/cardbacks') {
    onChangeHandler = (text: string) => {
      dispatch(
        searchByCardbackName({
          searchText: text,
        })
      );
    };
  }

  return (
    <Paper component='form' sx={{ width: 300 }} elevation={5}>
      <IconButton disabled style={{ padding: 10 }}>
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1, fontSize: 13 }}
        placeholder='Search'
        onChange={(
          event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
        ) => onChangeHandler(event.target.value)}
      />
    </Paper>
  );
};

export default SearchBar;
