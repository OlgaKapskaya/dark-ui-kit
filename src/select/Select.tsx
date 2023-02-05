import React, {FC, KeyboardEvent, useEffect, useState} from "react";
import './Select.css'

export type OptionsSelectType = {
    id: string
    value: string
}
type SelectType = {
    value: string
    options: OptionsSelectType[]
    onChange: (value: string) => void
}
export const Select: FC<SelectType> = ({value, options, onChange}) => {

    const [isVisible, setIsVisible] = useState(false)
    const [hoverElement, setHoverElement] = useState(value)

    useEffect(() => {
        setHoverElement(value)
    }, [value])

    const onClickHandler = () => {
        setIsVisible(!isVisible)
    }

    const onChangeSelectItem = (value: string) => {
        onChange(value)
        setIsVisible(false)
    }

    const onKeyUpItemHandler = (event: KeyboardEvent<HTMLDivElement>) => {
        for (let i = 0; i < options.length; i++) {
            if (hoverElement === options[i].value) {
                if (options[i + 1] || options[i - 1]) {
                    if (event.key === 'ArrowDown') {
                        onChange(options[i + 1].value);
                        break
                    }
                    if (event.key === 'ArrowUp') {
                        onChange(options[i - 1].value);
                        break
                    }
                    if (event.key === 'Enter') {
                        onChange(options[i].value);
                        setIsVisible(false)
                        break
                    }
                }
            } else onChange(options[0].value)
        }

    }

    return (
        <div className='select-wrapper'>
            <div className='select-wrapper-select'
                 onClick={onClickHandler}
                 tabIndex={1}
                 onKeyUp={onKeyUpItemHandler}
            >
                <span>{value}</span>
                {/*<img src={arrow} className={isVisible ? 'select-wrapper-img-up' : 'select-wrapper-img-down'} alt='arrow'/>*/}
            </div>
            <div className='select-wrapper-options-container'>
                {isVisible && options.map(elem => {
                    const itemClass = 'select-wrapper-options' + ' ' + (elem.value === hoverElement ? 'select-wrapper-options selected' : "")
                    const onMouseEnterHandler = () => {
                        setHoverElement(elem.value)
                    }

                    return (
                        <div className={itemClass}
                             onMouseEnter={onMouseEnterHandler}
                             key={elem.id}
                             onClick={() => onChangeSelectItem(elem.value)}>

                            {elem.value}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}