import React, { ChangeEvent, RefObject, Component, Dispatch, SetStateAction } from "react";

export type ClassPhoneInputState = [string, string, string, string];

class ClassPhoneInput extends Component<{
  phoneInputState: ClassPhoneInputState;
  setPhoneInputState: Dispatch<SetStateAction<ClassPhoneInputState>>;
}> {
  ref0: RefObject<HTMLInputElement> = React.createRef();
  ref1: RefObject<HTMLInputElement> = React.createRef();
  ref2: RefObject<HTMLInputElement> = React.createRef();
  ref3: RefObject<HTMLInputElement> = React.createRef();

  inputRefs: RefObject<HTMLInputElement>[] = [this.ref0, this.ref1, this.ref2, this.ref3];

  createOnChangeHandler = (index: 0 | 1 | 2 | 3) => (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const lengths = [2, 2, 2, 1];
    const currentMaxLength = lengths[index];
    const nextRef = this.inputRefs[index + 1];
    const prevRef = this.inputRefs[index - 1];
    const value = e.target.value;

    const shouldGoToNextRef = currentMaxLength === value.length && nextRef?.current;
    const shouldGoToPrevRef = value.length === 0 && prevRef?.current;

    if (index === 3 && value.length > 1) {
      return;
    }

    const newState = this.props.phoneInputState.map((phoneInput, phoneInputIndex) =>
      index === phoneInputIndex ? e.target.value : phoneInput
    ) as ClassPhoneInputState;

    if (shouldGoToNextRef) {
      nextRef.current?.focus();
    }
    if (shouldGoToPrevRef) {
      prevRef.current?.focus();
    }

    this.props.setPhoneInputState(newState);
  };

  render() {
    const { phoneInputState } = this.props;

    return (
      <div className="input-wrap">
        <label htmlFor="phone">Phone:</label>
        <div id="phone-input-wrap">
          <input
            id="phone-input-1"
            placeholder="55"
            type="text"
            ref={this.ref0}
            style={{
              width: 40,
            }}
            value={phoneInputState[0]}
            onChange={this.createOnChangeHandler(0)}
          />
          -
          <input
            id="phone-input-2"
            placeholder="55"
            type="text"
            ref={this.ref1}
            style={{
              width: 40,
            }}
            value={phoneInputState[1]}
            onChange={this.createOnChangeHandler(1)}
          />
          -
          <input
            id="phone-input-3"
            placeholder="55"
            type="text"
            ref={this.ref2}
            style={{
              width: 40,
            }}
            value={phoneInputState[2]}
            onChange={this.createOnChangeHandler(2)}
          />
          -
          <input
            id="phone-input-4"
            placeholder="5"
            type="text"
            ref={this.ref3}
            style={{
              width: 40,
            }}
            value={phoneInputState[3]}
            onChange={this.createOnChangeHandler(3)}
          />
        </div>
      </div>
    );
  }
}

export default ClassPhoneInput;
