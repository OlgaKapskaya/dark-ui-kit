import React, {ButtonHTMLAttributes, DetailedHTMLProps, FC} from "react"
import "./Button.css"

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>

type ButtonType = DefaultButtonPropsType & {
    color?: 'primary' | 'secondary'
}

/**
 * color: primary (default) or secondary. The color of the component.
 */

export const Button: FC<ButtonType> = ({color,  disabled, ...restProps}) => {

    const finallyColor = color === 'secondary' ? `button-${color}` : 'button-primary'
    const finallyClassName = disabled ? disabled : `${finallyColor}`

    return <button className={`button ${disabled ? disabled : finallyClassName}`}
                   disabled={disabled}
                   {...restProps}/>
}