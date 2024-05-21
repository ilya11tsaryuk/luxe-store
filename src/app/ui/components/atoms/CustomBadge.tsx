'use client'

import { Badge, BadgeProps, styled } from "@mui/material";

export const CustomBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: 3,
        top: 7,
        padding: '0 4px',
    },
}));