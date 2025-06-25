import React from "react";

interface TextHighlightProps {
  text: string;
  highlights: string[];
  onHighlightClick?: (highlighted: string) => void;
  highlightStyle?: React.CSSProperties;
}

const TextHighlight: React.FC<TextHighlightProps> = ({
  text,
  highlights,
  onHighlightClick,
  highlightStyle,
}) => {
  if (!highlights || highlights.length === 0) {
    return <span>{text}</span>;
  }

  // Regex para todas as palavras destacadas
  const regex = new RegExp(`(${highlights.join("|")})`, "gi");
  const parts = text.split(regex);

  return (
    <span>
      {parts.map((part, index) =>
        highlights.some((h) => h.toLowerCase() === part.toLowerCase()) ? (
          <mark
            key={index}
            style={
              highlightStyle || {
                backgroundColor: "yellow",
                fontWeight: "bold",
                cursor: "pointer",
              }
            }
            onClick={() => {
              if (onHighlightClick) {
                onHighlightClick(part);
              }
            }}
          >
            {part}
          </mark>
        ) : (
          part
        )
      )}
    </span>
  );
};

export default TextHighlight;
