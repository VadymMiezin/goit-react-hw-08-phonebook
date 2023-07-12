import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Form, Input, Label, Btn } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Username
        <Input
          type="text"
          name="name"
          placeholder="Please, enter your name"
          pattern="^[^\d]+$"
          title="Name may contain only letters, apostrophe, dash and spaces"
          required
        />
      </Label>
      <Label>
        Email
        <Input
          type="email"
          name="email"
          placeholder="Please, enter your Email"
          pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
          title="Enter valid Email"
          required
        />
      </Label>
      <Label>
        Password
        <Input
          type="password"
          name="password"
          placeholder="Please, enter your password"
          pattern="^[a-zA-Z0-9!@#$%^&*()-_=+`~[\]{}|:<>/?]+$"
          title="Password may contain letters, numbers and symbols"
          required
        />
      </Label>
      <Btn type="submit">Register</Btn>
    </Form>
  );
};
