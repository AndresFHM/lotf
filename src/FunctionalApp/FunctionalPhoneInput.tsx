
import { ChangeEventHandler, Dispatch, SetStateAction, useRef, useState } from "react";

export type FunctionalPhoneInputState = [string, string, string, string];

export const FunctionalPhoneInput = ({
    phoneInputState,
    setPhoneInputState,
}: {
    phoneInputState: FunctionalPhoneInputState;
        setPhoneInputState: (newState: FunctionalPhoneInputState) => void;
}) => {
    const ref0 = useRef<HTMLInputElement>(null);
    const ref1 = useRef<HTMLInputElement>(null);
    const ref2 = useRef<HTMLInputElement>(null);
    const ref3 = useRef<HTMLInputElement>(null);

    const refs = [ref0, ref1, ref2, ref3]

    const createOnChangeHandler =
        (index: 0 | 1 | 2 | 3): ChangeEventHandler<HTMLInputElement> =>
            (e) => {
                let value = e.target.value;

                value = value.replace(/\D/g, "")

                const lengths = [2, 2, 2, 1];
                const currentMaxLength = lengths[index];
                const nextRef = refs[index + 1];
                const prevRef = refs[index - 1];


                const shouldGoToNextRef =
                    currentMaxLength === value.length && nextRef?.current;
                const shouldGoToPrevRef = value.length === 0 && prevRef?.current;
        
                const newState = phoneInputState.map((phoneInput, phoneInputIndex) =>
                    index === phoneInputIndex ? value : phoneInput
                ) as FunctionalPhoneInputState;
                
                if (value.length > currentMaxLength) {
                    return;
                }
        
                if (shouldGoToNextRef) {
                    nextRef.current?.focus();
                } else if (shouldGoToPrevRef) {
                    prevRef.current?.focus();
                }
            

                setPhoneInputState(newState)
            };
    return (
        <div className="input-wrap">
            <label htmlFor="phone">Phone:</label>
            <div id="phone-input-wrap">
                <input
                    id="phone-input-1"
                    placeholder="55"
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
                    id="phone-input-2"
                    placeholder="55"    
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
                    id="phone-input-3"
                    placeholder="55"        
                    type="text"
                    ref={ref2}
                    style={{
                        width: 40,
                    }}
                    value={phoneInputState[2]}
                    onChange={createOnChangeHandler(2)}
                />
                -
                <input
                    id="phone-input-4"
                    placeholder="5"    
                    type="text"
                    ref={ref3}
                    style={{
                        width: 40,
                    }}
                    value={phoneInputState[3]}
                    onChange={createOnChangeHandler(3)}
                />
            </div>
        </div>
    )
} 
