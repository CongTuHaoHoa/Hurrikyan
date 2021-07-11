import React, {useEffect, useState} from 'react'
import icon from '../Assets/hurrikyan.svg'

const Header = () =>
{
    const [open, setOpen] = useState(false)
    const container = React.createRef()
    const button = React.createRef()


    const onClick = () =>
    {
        setOpen(!open)
    }

    const handleMouseDown = (event) =>
    {
        if (container.current)
        {
            if (!container.current.contains(event.target) && !button.current.contains(event.target))
                setOpen(false)
        }
    }

    useEffect(() =>
    {
        document.addEventListener('mousedown', handleMouseDown)
        return () => document.removeEventListener('mousedown', handleMouseDown)
    })

    return  <div className='header'>
        <img src={ icon } alt={'Icon'} className='header-icon'/>
        <div>
            <button ref={ button } className={`header-menu ${ open ? 'header-menu-open' : '' }`} onClick={ onClick }><span/></button>
            <ul className={`header-list ${ open ? 'header-list-open' : '' }`} ref={ container }>
                <li>
                    <button>About me</button>
                </li>
                <li>
                    <button>Experience</button>
                </li>
                <li>
                    <button>Portfolio</button>
                </li>
            </ul>
        </div>
    </div>
}

export default Header
