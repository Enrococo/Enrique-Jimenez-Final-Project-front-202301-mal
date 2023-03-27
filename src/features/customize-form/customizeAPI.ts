export const postModular = async (modular: FormData) => {
  const response = await fetch('http://localhost:4000/api/v1/carpets/create', {
    method: 'POST',
    body: modular,
  });
  return response;
};
