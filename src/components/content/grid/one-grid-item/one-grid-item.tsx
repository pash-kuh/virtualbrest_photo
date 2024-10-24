"use client"

import React from "react"
import { OneItemPhoto, TypeOfView } from "@/shared/types"
import ImageListItem from "@mui/material/ImageListItem"
import Box from "@mui/material/Box"
import { CopyToClipboardButton } from "@/shared/components/copy-to-clipboard"
import { ImageListItemBar } from "@mui/material"

interface OneGridItemInterface {
    photo: OneItemPhoto
    gridView: TypeOfView
}

const data = {
    "standard": {
        srcSet: "w=164&h=164&fit=crop&auto=format&dpr=2 2x",
        src: "w=164&h=164&fit=crop&auto=format"
    },
    "quilt": {
        srcSet: "w=248&h=248&fit=crop&auto=format&dpr=1 2x",
        src: "w=248&fit=crop&auto=format&dpr=1 2x"
    }
}

export const OnePhotoItem = ({ photo, gridView }: OneGridItemInterface) => {
    const { key, imageURL } = photo

    const onOpenImageClick = async () => {
        window.open(imageURL, '_blank')
    }

    return (
        <ImageListItem key={key}>
                <img
                    loading="lazy"
                    style={{ cursor: "pointer" }}
                    src={`${imageURL}?${data[gridView].src}`}
                    srcSet={`${imageURL}?${data[gridView].srcSet}`}
                    alt={imageURL.split("/")[4]}
                    onClick={onOpenImageClick}
                />
            {gridView === "quilt" && (
                <ImageListItemBar
                    title={(
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center", width: "85%" }}>
                                <Box component="span" sx={{ maxHeight: "20px", overflow: "hidden" }}>
                                    {imageURL}
                                </Box>
                                ...
                            </Box>
                            <CopyToClipboardButton text={imageURL} />
                        </Box>
                    )}
                    position="below"
                />
            )}
        </ImageListItem>
    )
}