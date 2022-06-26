import React, { useCallback, useContext, useEffect } from "react";
import { AppContext } from "../../App";
import Key from "./Key/Key";

const Keyboard = () => {
  const { onSelectLetter, onDelete, onEnter, disabledLetters } =
    useContext(AppContext);

  const keyboardKeys = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "DELETE"],
  ];

  const handleKeyboard = useCallback((event) => {
    if (event.key === "Enter") {
      onEnter();
    } else if (event.key === "Backspace") {
      onDelete();
    } else {
      keyboardKeys.forEach((keys) =>
        keys.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelectLetter(key);
          }
        })
      );
    }
  });

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  return (
    <div className="keyboard" onKeyDown={handleKeyboard}>
      {keyboardKeys.map((keys, keysIndex) => {
        return (
          <div key={keysIndex} className={`line`}>
            {keys.map((key, keyIndex) => {
              if (key === "ENTER" || key === "DELETE") {
                return (
                  <div key={keyIndex}>
                    <Key keyVal={key} bigKey />
                  </div>
                );
              } else {
                return (
                  <div key={keyIndex}>
                    <Key
                      keyVal={key}
                      disabled={disabledLetters.includes(key)}
                    />
                  </div>
                );
              }
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Keyboard;
