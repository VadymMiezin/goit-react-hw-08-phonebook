import { Label, Input, Wrapper } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/filter/selectors';
import { setFilter } from 'redux/filter/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const onFilterChange = e => {
    const { value } = e.target;

    dispatch(setFilter(value));
  };

  return (
    <Wrapper>
      <Label>
        Find contacts by name
        <Input
          type="text"
          name="filter"
          onChange={onFilterChange}
          value={filter}
        />
      </Label>
    </Wrapper>
  );
};
