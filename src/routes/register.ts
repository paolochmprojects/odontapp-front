interface actionProps {
  request: Request;
}
export const action = async ({ request }: actionProps) => {
    const formData = await request.formData()
    const data = Object.fromEntries(formData)
    console.log(data)
  return null;
};
