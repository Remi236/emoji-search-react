import { useEffect } from "react";
import { useEmoji } from "../hooks/useEmoji";
import { EmojiGridProps } from "../interfaces/emoji"

export const EmojiGrid = ({search} : EmojiGridProps) => {
  const { emojis, searchEmoji } = useEmoji();
  useEffect(() => searchEmoji(search), [search]);
  return (
    <div className="emoji emoji--wrap">
      {emojis && emojis.map((emoji) => (
        <div className="emoji__item" key={emoji.title} onClick={() => {
            try {
              navigator.clipboard.writeText(emoji.symbol); 
              alert('Emoji Copied !');
            }
            catch(error) {
              alert('Failed to copy emoji due to: !' + String(error));
            }
          }}>
          <span className="emoji__symbol">{emoji.symbol}</span>
          <span className="emoji__title">{emoji.title}</span>
        </div>
      ))}
    </div>
  )
}