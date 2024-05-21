'use client'
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { IconButton } from '@mui/material';
import { navUrls } from '@/app/constants';
import { NavLink } from './nav/NavLink';
import Link from 'next/link';

export const MenuButton = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className='md:hidden'>
            <IconButton onClick={handleClick}>
                <MenuOutlinedIcon />
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                {navUrls.map((url) => (
                    <Link key={url.href} href={url.href}>
                        <MenuItem onClick={handleClose}>
                            {url.name}
                        </MenuItem>
                    </Link>
                ))}
            </Menu>
        </div>
    );
}
