import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Form, Input, Label, Btn } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Email
        <Input
          type="email"
          name="email"
          placeholder="Enter Email"
          pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
          title="Please, enter your Email"
          required
        />
      </Label>
      <Label>
        Password
        <Input
          type="password"
          name="password"
          placeholder="Enter password"
          pattern="^[a-zA-Z0-9!@#$%^&*()-_=+`~[\]{}|:<>/?]+$"
          title="Please, enter your password"
          required
        />
      </Label>
      <Btn type="submit">Log In</Btn>
    </Form>
  );
};
