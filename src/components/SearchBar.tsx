import { GlobalState } from '../redux/store/rootReducer';
import { SearchBarStyled } from './styles/Header.styled';
import { searchCardsByName } from '../redux/actions/cards';
import { connect, useDispatch } from 'react-redux';

const SearchBar = (props: any) => {
  const dispatch = useDispatch();
  const onChangeHandler = (event: string) => {
    dispatch(
      searchCardsByName({
        searchText: event,
      })
    );
  };
  const onCancelHandler = () => {
    dispatch(
      searchCardsByName({
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
