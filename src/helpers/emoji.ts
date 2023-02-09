import emojiList from '../emojiList.json';
import { Emoji } from '../interfaces/emoji';

export const filterEmoji = (search: string, maxResults: number): Emoji[] => {
  return emojiList
    .filter(
      (emoji) =>
        emoji.title.toLowerCase().includes(search.toLowerCase()) ||
        emoji.keywords.includes(search.toLowerCase())
    )
    .slice(0, maxResults);
};
