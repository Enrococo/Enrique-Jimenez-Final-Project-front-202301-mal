import { Carpet } from '../../model/carpets-model';

export const getCarpetsList = async () => {
  const response = await fetch(
    'https://enrique-jimenez-final-project-back.onrender.com/api/v1/carpets/create'
  );
  const carpetsRes: Carpet[] = await response.json();

  return carpetsRes;
};
