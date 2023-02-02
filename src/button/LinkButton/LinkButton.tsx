import React, {AnchorHTMLAttributes, DetailedHTMLProps, FC} from "react"
import './LinkButton.css'

type DefaultLinkPropsType = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>

type LinkButtonType = DefaultLinkPropsType & {
    color?: 'primary' | 'secondary'
}
/**
 * color: primary (default) or secondary. The color of the component.
 */

export const LinkButton: FC<LinkButtonType> = ({color, className, ...restProps}) => {
    const finallyColor = color === 'secondary' ? `link-${color}` : 'link-primary'

    return (
        <div className='link-wrapper'>
            <a className={`link ${finallyColor}`}{...restProps}/>
        </div>
    )
}