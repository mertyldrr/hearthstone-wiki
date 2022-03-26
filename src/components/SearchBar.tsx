import { GlobalState } from '../redux/store/rootReducer';
import { SearchBarStyled } from './styles/Header.styled';
import { searchCardsByName } from '../redux/actions/cards/cards';
import { searchByCardbackName } from '../redux/actions/cardbacks/cardbacks';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const searchText = useSelector(
    (state: GlobalState) => state.cards.searchText
  );
  let onChangeHandler;
  if (location.pathname === '/cards') {
    onChangeHandler = (event: string) => {
      dispatch(
        searchCardsByName({
          searchText: event,
        })
      );
    };
  } else if (location.pathname === '/cardbacks') {
    onChangeHandler = (event: string) => {
      dispatch(
        searchByCardbackName({
          searchText: event,
        })
      );
    };
  }

  const onCancelHandler = () => {
    dispatch(
      searchCardsByName({
        searchText: '',
      })
    );
    dispatch(
      searchByCardbackName({
        searchText: '',
      })
    );
  };
  return (
    <SearchBarStyled
      value={searchText ? searchText : ''}
      onChange={onChangeHandler}
      onCancelSearch={onCancelHandler}
    />
  );
};

export default SearchBar;
