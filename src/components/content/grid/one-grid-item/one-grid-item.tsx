"use client"

import React from "react"
import { OneItemPhoto } from "@/shared/types"
import { styled } from "@mui/material/styles"
import { Paper } from "@mui/material"
import { CopyToClipboardButton } from "@/shared/components/copy-to-clipboard"
import Box from "@mui/material/Box"
import { Watermark } from "@hirohe/react-watermark"

export const OnePhotoItem = ({ photo }: { photo: OneItemPhoto }) => {
    const { key, imageURL } = photo

    return (
        <div key={key}>
            <Watermark text="virtualbrest">
                <img
                    srcSet={`${imageURL}?w=162&auto=format&dpr=2 2x`}
                    src={`${imageURL}?w=162&auto=format`}
                    alt={imageURL.slice(0, 50)}
                    loading="lazy"
                    style={{
                        borderBottomLeftRadius: 4,
                        borderBottomRightRadius: 4,
                        display: 'block',
                        width: '100%'
                    }}
                />
            </Watermark>
            <Label sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center", width: "85%" }}>
                    <Box component="span" sx={{ maxHeight: "20px", overflow: "hidden" }}>
                        {imageURL}
                    </Box>
                    ...
                </Box>
                <CopyToClipboardButton text={imageURL} />
            </Label>
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