import React, {FC, ReactNode} from "react";
import {Button} from "../Button/Button";
import './IconButton.css'

type IconButtonType = {
    children?: ReactNode
}

export const IconButton: FC<IconButtonType> = ({children}) => {
    return <Button className='icon-button'>{children}</Button>
}