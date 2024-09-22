"use client"

import React, { useContext, useEffect } from "react"
import {allLinks, localstorageKeys, staticData} from "@/shared/constants"
import { LogoVB } from "@/shared/svg"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Link from "@mui/material/Link"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import {
    defaultIconButtonSx,
    ToggleColorModeButton
} from "@/shared/components/toggle-theme-button"
import { useTheme } from "@mui/material/styles"
import { ColorModeContext } from "@/shared/providers"
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined"
import { IconButton } from "@mui/material"

import s from "./header.module.css"


export const Header = () => {
    const theme = useTheme()
    const { toggleColorMode } = useContext(ColorModeContext)

    useEffect(() => {
        const currentTheme = localStorage.getItem(localstorageKeys.theme)

        if (currentTheme) {
            if (theme.palette.mode !== currentTheme) {
                toggleColorMode()
            }
        }
    }, [])
    const onContactClickHandler = () => {
        window.open(staticData.virtualbrest_telegram_bot_link, '_blank')
    }

    return (
        <AppBar className={s.main_header_block}>
            <Toolbar className={s.header_block}>
                <Link href={allLinks.newServiceVB} className={s.logo_container}>
                    {LogoVB(s.logo)}
                </Link>

                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "500px", marginRight: "50px" }}>
                    <Button color="inherit" onClick={onContactClickHandler} sx={{ textTransform: "none" }}>
                        Связаться с нами
                    </Button>
                    <Button type="link" href={allLinks.oldServiceNews} color="inherit" sx={{ textTransform: "none" }}>
                        Новости
                    </Button>
                    <Button type="link" href={allLinks.oldServiceMobile} color="inherit" sx={{ textTransform: "none" }}>
                        Мобильная версия
                    </Button>

                    <ToggleColorModeButton />

                    <IconButton sx={defaultIconButtonSx}>
                        <NotificationsOutlinedIcon />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    )
}