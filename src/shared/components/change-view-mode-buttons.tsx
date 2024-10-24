import React, { useState, MouseEvent } from "react"
import ViewModuleIcon from "@mui/icons-material/ViewModule"
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt"
import ToggleButton from "@mui/material/ToggleButton"
import PermMediaIcon from "@mui/icons-material/PermMedia"
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup"
import {TypeOfView} from "@/shared/types";

const buttons = [
    { icon: <ViewModuleIcon />, value: "standard", key: 0 },
    { icon: <ViewQuiltIcon />, value: "quilt", key: 1 },
    { icon: <PermMediaIcon />, value: "folder", key: 2 },
]

interface VerticalToggleButtonsInterface {
    view: TypeOfView
    setView: (view: TypeOfView) => void
}

export const VerticalToggleButtons = ({ setView, view }: VerticalToggleButtonsInterface) => {
    const handleChange = (event: MouseEvent<HTMLElement>, nextView: TypeOfView) => {
        setView(nextView)
    }

    return (
        <ToggleButtonGroup
            orientation="vertical"
            value={view}
            exclusive
            onChange={handleChange}
        >
            {buttons.map(btn => (
                <ToggleButton key={btn.key} value={btn.value} aria-label={btn.value}>
                    {btn.icon}
                </ToggleButton>
            ))}
        </ToggleButtonGroup>
    )
}