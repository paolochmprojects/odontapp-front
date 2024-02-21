import { signIn } from "../services/authservice";

interface actionProps {
  request: Request;
}

export const action = async ({ request }: actionProps) => {
  const formData = await request.formData();
  const { email, password } = Object.fromEntries(formData);
  signIn({
    email: email.toString(),
    password: password.toString(),
  });

  return null;
};
