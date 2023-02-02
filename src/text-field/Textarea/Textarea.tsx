import React, {DetailedHTMLProps, FC, TextareaHTMLAttributes} from "react";
import '../TextField.css'

type DefaultTextAreaPropsType = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement>

type TextareaType = DefaultTextAreaPropsType & {
    label?: string
    helperText?: string
}

export const Textarea:FC<TextareaType> = ({label, helperText, ...restProps}) => {
    return (
        <div className='textarea-wrapper'>
            {label && <span className='textarea-label'>{label}</span>}
            <textarea className='textarea' {...restProps}/>
            {helperText && <span className='textarea-helper-text'>{helperText}</span>}
        </div>
    )
}