import Axios from 'axios';
import { CharacterEntityApi } from './character.api-model';

const url = '/api/characters';

export const getCharacter = async (id: string): Promise<CharacterEntityApi> => {
  const { data } = await Axios.get<CharacterEntityApi>(`${url}/${id}`);

  return data;
};

export const saveCharacter = async (
  character: CharacterEntityApi
): Promise<boolean> => {
  if (character.id) {
    await Axios.put<CharacterEntityApi>(`${url}/${character.id}`, character);
  } else {
    await Axios.post<CharacterEntityApi>(url, character);
  }
  return true;
};
