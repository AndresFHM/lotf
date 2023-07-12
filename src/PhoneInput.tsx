
import {
    ChangeEventHandler,
    Dispatch,
    SetStateAction,
    useRef,
    useState,
  } from "react";
  
  export type PhoneInputState = [string, string, string];
  
  export const PhoneInput = ({
    phoneInputState,
    setPhoneInputState,
  }: {
    phoneInputState: PhoneInputState;
    setPhoneInputState: Dispatch<SetStateAction<PhoneInputState>>;
  }) => {
    const ref0 = useRef<HTMLInputElement>(null);
    const ref1 = useRef<HTMLInputElement>(null);
    const ref2 = useRef<HTMLInputElement>(null);
  
    const refs = [ref0, ref1, ref2];
  
    const createOnChangeHandler =
      (index: 0 | 1 | 2): ChangeEventHandler<HTMLInputElement> => (e) => {
        const lengths = [3, 3, 4];
        const currentMaxLength = lengths[index];
        const nextRef = refs[index + 1];
        const prevRef = refs[index - 1];
        const value = e.target.value;
  
        const shouldGoToNextRef =
          currentMaxLength === value.length && nextRef?.current;
        const shouldGoToPrevRef = value.length === 0 && prevRef?.current;
  
        const newState = phoneInputState.map((phoneInput, phoneInputIndex) =>
          index === phoneInputIndex ? e.target.value : phoneInput
        ) as PhoneInputState;
  
        if (index === 2 && value.length > currentMaxLength) {
          return;
        }
  
        if (shouldGoToNextRef) {
          nextRef.current?.focus();
        }
        if (shouldGoToPrevRef) {
          prevRef.current?.focus();
        }
  
        setPhoneInputState(newState);
      };
  
    return (
      <div>
        <label htmlFor="">Phone Number:</label>
        <div
          style={{
            display: "flex",
          }}
        >
          <input
            type="text"
            ref={ref0}
            style={{
              width: 40,
            }}
            value={phoneInputState[0]}
            onChange={createOnChangeHandler(0)}
          />
          -
          <input
            type="text"
            ref={ref1}
            style={{
              width: 40,
            }}
            value={phoneInputState[1]}
            onChange={createOnChangeHandler(1)}
          />
          -
          <input
            type="text"
            ref={ref2}
            style={{
              width: 40,
            }}
            value={phoneInputState[2]}
            onChange={createOnChangeHandler(2)}
          />
        </div>
      </div>
    );
  };
  