export const postModular = async (modular: FormData) => {
  const response = await fetch(
    'https://enrique-jimenez-final-project-back.onrender.com/api/v1/carpets/create',
    {
      method: 'POST',
      body: modular,
    }
  );
  return response;
};
