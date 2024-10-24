"use client"

import React, {useEffect, useState} from "react"
import { OnePhotoItem } from "./one-grid-item"
import Box from "@mui/material/Box"
import { allTexts } from "@/shared/constants"
import ImageList from "@mui/material/ImageList"
import { FileObjectType, TypeOfView } from "@/shared/types"

import s from "./grid.module.css"

interface GridInterface {
    photos: FileObjectType[]
    gridView: TypeOfView
}

export const Grid = ({ photos, gridView }: GridInterface) => {
    const [cols, setCols] = useState<number>(4)
    const [gap, setGap] = useState<number>(3)
    const [variant, setVariant] = useState<"masonry" | "quilted" | "standard" | "woven">("standard")
debugger

    useEffect(() => {
        if (gridView === "quilt") {
            setCols(3)
            setGap(8)
            setVariant("masonry")
        }
        if (gridView === "folder") {
            setCols(4)
            setGap(1)
            setVariant("quilted")
        }
    }, [gridView])

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
                        <ImageList variant={variant} cols={cols} gap={gap}>
                            {[...photos, ...photos].map((item, index) => (
                                <OnePhotoItem
                                    key={index}
                                    photo={{ ...item, key: index.toString() }}
                                    gridView={gridView}
                                />
                            ))}
                        </ImageList>
                    </Box>
                )
            }
        </>
    )
}