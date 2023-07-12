import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import { Wrapper, Text, Btn } from './UserMenu.styled';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Text>Greetings, {user.name}</Text>
      <Btn type="button" onClick={() => dispatch(logOut())}>
        Log Out
      </Btn>
    </Wrapper>
  );
};
