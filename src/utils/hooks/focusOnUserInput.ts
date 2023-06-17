import {useEffect, useRef} from "react";

export const FocusOnUserInput = (disabled: boolean) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!disabled) {
      inputRef.current?.focus()
    }
  }, [disabled])

  return inputRef
}
