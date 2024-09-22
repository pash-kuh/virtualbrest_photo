"use client"

import React from "react"
import { OnePhotoItem } from "./one-grid-item"
import Box from "@mui/material/Box"
import { allTexts } from "@/shared/constants"
import { Masonry } from "@mui/lab"

import s from "./grid.module.css"

export const Grid = ({ photos }: { photos: any[] }) => {

    return (
        <>
            {photos?.length === 0
                ? (
                    <Box className={s.empty_block}>
                        <Box component="span" className={s.text_epmty}>
                            {allTexts.emptyBlockText}
                        </Box>
                    </Box>
                )
                : (
                    <Box sx={{ py: 5 }}>
                        <Masonry columns={3} spacing={2}>
                            {photos.map((item, index) => (
                                <OnePhotoItem key={index} photo={{ ...item, key: index.toString() }} />
                            ))}
                        </Masonry>
                    </Box>
                )
            }
        </>
    )
}