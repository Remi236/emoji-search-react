import { useState } from 'react';
import { filterEmoji } from '../helpers/emoji';
import { Emoji } from '../interfaces/emoji';

export const useEmoji = () => {
  const MAX_RESULT = 50;
  const [emojis, setEmojis] = useState<Emoji[]>();
  const searchEmoji = (search: string) =>
    setEmojis(filterEmoji(search, MAX_RESULT));
  return { emojis, searchEmoji };
};
