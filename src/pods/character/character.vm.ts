export interface Character {
  id: string;
  name: string;
  status: string;
  species: string;
  bestSentences: string;
}

export const createEmptyCharacter = (): Character => ({
  id: '',
  name: '',
  status: '',
  species: '',
  bestSentences: '',
});
