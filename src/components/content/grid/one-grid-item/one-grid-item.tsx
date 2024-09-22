"use client"

import React from "react"
import { OneItemPhoto } from "@/shared/types"
import { styled } from "@mui/material/styles"
import { Paper } from "@mui/material"

export const OnePhotoItem = ({ photo }: { photo: OneItemPhoto }) => {
    return (
        <div key={photo.key}>
            <img
                srcSet={`${photo.img}?w=162&auto=format&dpr=2 2x`}
                src={`${photo.img}?w=162&auto=format`}
                alt={photo.title}
                loading="lazy"
                style={{
                    borderBottomLeftRadius: 4,
                    borderBottomRightRadius: 4,
                    display: 'block',
                    width: '100%'
                }}
            />
            <Label>{photo.title}</Label>
        </div>
    )
}

const Label = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: 'center',
    color: theme.palette.text.primary,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}))