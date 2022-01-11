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
  return (
    <SearchBarStyled value={props.searchText} onChange={onChangeHandler} />
  );
};

const mapStateToProps = (state: GlobalState) => ({
  searchText: state.cards.searchText,
});

export default connect(mapStateToProps)(SearchBar);
