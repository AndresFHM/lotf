
export const calculateIsFirstNameValid = (str: string): boolean => {
    return str
        .split("")
        .every(char => char.toLowerCase() !== char.toUpperCase()) && str.length >= 2
}

export const calculateIsLastNameValid = (str: string): boolean => {
    return str
        .split("")
        .every(char => char.toLowerCase() !== char.toUpperCase()) && str.length >= 2
}

export function isEmailValid(emailAddress: string) {
    // eslint-disable-next-line no-useless-escape
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return !!emailAddress.match(regex);
}

export const isPhoneNumberValid = (phoneNumber: string): boolean => {
    const regex = /^\d{2}-\d{2}-\d{2}-\d{1}$/; 
    return !!phoneNumber.match(regex);
  };