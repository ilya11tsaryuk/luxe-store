'use client'
import { Button, ButtonTypeMap, ExtendButtonBase, styled } from "@mui/material";

export const CustomButton = styled(Button)(({ theme }) => ({
    backgroundColor: 'rgb(245, 245, 245)',
    color: '#000000',
    padding: '8px 16px',
    borderRadius: '8px',
    '&:hover': {
        backgroundColor: '#000000',
        color: 'rgb(245, 245, 245)'
    },
    '&:disabled': {
        backgroundColor: '#e0e0e0',
        color: '#888888',
    },
}));
