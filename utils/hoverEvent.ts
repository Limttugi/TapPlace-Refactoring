import { useRef, useState } from 'react';

const HoverEvent = () => {
  const memberRef = useRef<HTMLImageElement>(null);
  const [hoverFlag, setHoverFlag] = useState<boolean>(false);

  const onMouseOver = () => {
    setHoverFlag(true);
  };

  const onMouseOut = () => {
    setHoverFlag(false);
  };

  return { memberRef, hoverFlag, setHoverFlag, onMouseOut, onMouseOver };
};

export default HoverEvent;
