import React from 'react'


type PropsType = {
    viewCart: boolean
    setViewCart: React.Dispatch<React.SetStateAction<boolean>>
}


const Nav: React.FC<PropsType> = ({ viewCart, setViewCart }) => {
    return (
        <div className='nav'>
            {}
        </div>
    )
}

export default Nav
