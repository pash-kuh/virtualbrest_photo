"use client"

import React, { useContext } from "react"
import { useTheme } from "@mui/material/styles"
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined"
import Brightness2OutlinedIcon from "@mui/icons-material/Brightness2Outlined"
import { ColorModeContext } from "@/shared/providers"
import { IconButton } from "@mui/material"

export const defaultIconButtonSx = {
    borderRadius: "5px",
    color: "#ffffff"
}

export const ToggleColorModeButton = () => {
    const theme = useTheme()
    const { toggleColorMode } = useContext(ColorModeContext)

    return (
        <IconButton aria-label="theme_change" onClick={toggleColorMode} sx={defaultIconButtonSx}>
            {theme.palette.mode === "dark"
                ? <LightModeOutlinedIcon />
                : <Brightness2OutlinedIcon />
            }
        </IconButton>
    )
}