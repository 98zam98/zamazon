import React, { FC } from 'react'

import { useAppDispatch, useAppSelector } from '../state/hooks';
import themeSlice  from '../state/reducer/themeSlice';

type Theme_button_props = {
    theme: string
};
const Theme_button: FC<Theme_button_props> = (x) => {

    // this AppTheme will be used to change the theme of the app  
    const dispatch = useAppDispatch()
    // end of state 

    return (
        <button className={`${x.theme}_theme_button`} onClick={() => dispatch((themeSlice.actions as any)[x.theme]())} >{x.theme}</button>
    )
}

export default Theme_button