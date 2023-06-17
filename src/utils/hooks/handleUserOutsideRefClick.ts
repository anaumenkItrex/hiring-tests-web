import {MutableRefObject, useEffect} from "react";

export const HandleUserOutsideRefClick = (
  ref: MutableRefObject<null|HTMLDivElement>,
  handleCancel: () => void,
) => {
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        handleCancel()
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}
