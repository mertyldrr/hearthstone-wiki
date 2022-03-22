import { GlobalState } from '../redux/store/rootReducer';
import { SearchBarStyled } from './styles/Header.styled';
import { searchCardsByName } from '../redux/actions/cards/cards';
import { searchByCardbackName } from '../redux/actions/cardbacks/cardbacks';
import { connect, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

const SearchBar = (props: any) => {
  const location = useLocation();
  const dispatch = useDispatch();
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
      value={props.searchText ? props.searchText : ''}
      onChange={onChangeHandler}
      onCancelSearch={onCancelHandler}
    />
  );
};

const mapStateToProps = (state: GlobalState) => ({
  searchText: state.cards.searchText,
});

export default connect(mapStateToProps)(SearchBar);
