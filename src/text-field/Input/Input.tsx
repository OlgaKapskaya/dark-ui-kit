import React, {DetailedHTMLProps, FC, InputHTMLAttributes} from "react";
import '../TextField.css'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement>

type TextFieldType = DefaultInputPropsType & {
    label?: string
    helperText?: string
}
export const Input: FC<TextFieldType> = ({label, helperText,  className, ...restProps}) => {
    return (
        <div className='text-field-wrapper'>
            {label && <span className='text-field-label'>{label}</span>}
            <input className='text-field-wrapper-input' {...restProps}/>
            {helperText && <span className='text-field-helper-text'>{helperText}</span>}
        </div>
    )
}