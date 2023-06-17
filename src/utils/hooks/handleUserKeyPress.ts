import {useEffect, useState} from "react";

export const HandleUserKeyPress = () => {
  const [key, setKey] = useState<null|number>(null);

  useEffect(() => {
    const handleUserKeyPress = (e: Event & { keyCode: number }) => {
      setKey(e.keyCode)
    }
    document.addEventListener("keydown", handleUserKeyPress);
    return () => {
      document.removeEventListener("keydown", handleUserKeyPress);
    };
  }, []);

  useEffect(() => {
    setKey(null)
  }, [key]);

  return key
}
