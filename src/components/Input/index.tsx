import React, { InputHTMLAttributes } from 'react';
import { InputComponent, Label } from './style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>  {
    type?: any;
    placeText: string;
    security?: boolean;
}

const Input: React.FC<InputProps> = ({ type, placeText, security, ...rest }) => {

    return(
        <>
            <Label>{ placeText }</Label>
            <InputComponent 
                keyboardType={type}
                secureTextEntry={security} 
                placeholder={placeText}
                {...rest} 
            />

        </>
    );

}

export default Input;