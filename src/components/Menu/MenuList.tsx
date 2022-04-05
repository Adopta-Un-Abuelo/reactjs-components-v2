import React, { useRef } from 'react';
import styled from 'styled-components';

import Color from '../../constants/Color';
import Menu, { MenuProps, MenuRef } from './Menu';
import Text from '../Text/Text';

const MenuCell = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${Color.line.soft};
    padding: 12px 16px;
    cursor: pointer;
    :hover{
        background-color: ${Color.status.neutral.hover};
    }
`

const MenuList = (props: Props) =>{

    const menu = useRef<MenuRef>(null);

    const onClick = (option: OptionsProps) =>{
        menu.current?.close();
        props.onClick(option)
    }

    return(
        <Menu
            ref={menu}
            {...props}
            menuStyle={{
                padding: 0,
                height: 'unset',
                ...props.menuStyle
            }}
        >
            {props.options.map((option, index) =>(
                <MenuCell
                    key={'action'+index}
                    onClick={() => onClick(option)}
                >
                    {option.icon &&
                        <option.icon height={20} width={20} color={Color.text.primary}/>
                    }
                    <Text type='p' style={{marginLeft: 12}}>
                        {option.label}
                    </Text>
                </MenuCell>
            ))}
        </Menu>
    )
}
export default MenuList;
export interface Props extends MenuProps{
    options: Array<OptionsProps>,
    onClick: (option: OptionsProps) => void
}
export interface OptionsProps{
    id: string,
    label: string,
    icon?: any
}