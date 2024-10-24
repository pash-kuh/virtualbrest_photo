"use client"

import React, { useEffect, useState } from "react"
import { allLinks, defaultIconButtonSx, localstorageKeys, staticData } from "@/shared/constants"
import { LogoVB } from "@/shared/svg"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Link from "@mui/material/Link"
import Box from "@mui/material/Box"
import Badge from "@mui/material/Badge"
import IconButton from "@mui/material/IconButton"
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined"
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined"
import { ToggleColorModeButton } from "@/shared/components/toggle-theme-button"
import { notificationMessages } from "@/shared/notifications"
import { ToolbarMenu } from "@/shared/components/menu"
import { Notifications } from "@/shared/components/notifications"
import { ToolbarKeysType } from "@/shared/types"

import s from "./header.module.css"

export const Header = () => {
    const [profileAnchor, setProfileAnchor] = useState<HTMLElement | null>(null)
    const [badgeNumber, setBadgeNumber] = useState<number | undefined>(notificationMessages.current.length)
    const [notificationAnchor, setNotificationAnchor] = useState<HTMLElement | null>(null)

    useEffect(() => {
        if (localStorage[localstorageKeys.notificationBadge]) { setBadgeNumber(undefined) }
    }, [localStorage[localstorageKeys.notificationBadge]])

    const handleNotificationClick = ({ currentTarget }: React.MouseEvent<HTMLElement>) => {
        if (!localStorage[localstorageKeys.notificationBadge]) {
            localStorage.setItem(localstorageKeys.notificationBadge, "isChecked")
        }
        setNotificationAnchor(currentTarget)
    }
    const handleCloseDropDown = () => {
        setNotificationAnchor(null)
        setProfileAnchor(null)
    }
    const onClickMenuItem = async (key: ToolbarKeysType) => {
        if (key === "contact") {
            window.open(staticData.virtualbrest_telegram_bot_link, '_blank')
        }
        handleCloseDropDown()
    }

    return (
        <>
            <AppBar className={s.main_header_block}>
                <Toolbar className={s.header_block}>
                    <Link href={allLinks.newServiceVB} className={s.logo_container}>
                        {LogoVB(s.logo)}
                    </Link>

                    <Box className={s.buttons_block}>
                        <ToggleColorModeButton />

                        <IconButton
                            size="small"
                            color="inherit"
                            onClick={handleNotificationClick}
                            sx={{ ...defaultIconButtonSx, p: 1 }}
                        >
                            <Badge badgeContent={badgeNumber} color="error">
                                <NotificationsOutlinedIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="small"
                            edge="end"
                            sx={{ ...defaultIconButtonSx, p: 1 }}
                            aria-label="account of current user"
                            aria-haspopup="true"
                            onClick={({ currentTarget }) => setProfileAnchor(currentTarget)}
                            color="inherit"
                        >
                            <SettingsOutlinedIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>

            <ToolbarMenu
                setVisible={handleCloseDropDown}
                anchor={profileAnchor}
                onClickHandler={onClickMenuItem}
            />

            <Notifications
                setVisible={handleCloseDropDown}
                anchor={notificationAnchor}
            />
        </>
    )
}