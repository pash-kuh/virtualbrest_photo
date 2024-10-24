"use client"

import React from "react"
import Divider from "@mui/material/Divider"
import Link from "@mui/material/Link"
import Typography from "@mui/material/Typography"
import Popover from "@mui/material/Popover"
import List from "@mui/material/List"
import Box from "@mui/material/Box"
import { notificationMessages } from "@/shared/notifications"

import s from "./components.module.css"
import {adminsContactData} from "@/shared/constants";

type NotificationComponentType = {
    anchor: HTMLElement | null
    setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export const Notifications = ({ setVisible, anchor }: NotificationComponentType) => (
    <Popover
        key="notify_popover"
        open={Boolean(anchor)}
        anchorEl={anchor}
        onClose={setVisible}
        sx={{ mt: 0.5, width: 500 }}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
        }}
    >
        <List className={s.list_main_block}>
            {notificationMessages.current.map((el, index) => (
                    <React.Fragment key={el.id}>
                        <Box sx={{ width: "400px", p: 2 }}>
                            <Typography
                                variant="body1"
                                sx={{
                                    m: 0,
                                    fontWeight: 600,
                                    fontSize: "1.2rem",
                                    margin: "0px 0px 0.35em",
                                    lineHeight: 1.5,
                                    color: "#FFFFFF"
                                }}
                            >
                                {el.title}
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    overflowWrap: "break-word",
                                    margin: "0px 0px 0.35em",
                                    fontSize: "1rem",
                                    lineHeight: 1.5,
                                    letterSpacing: "0px",
                                    fontFamily: "IBM Plex Sans",
                                    fontWeight: 400,
                                    color: "#aebacb"
                                }}
                            >
                                {el.description}
                                {el.utils?.link && el.utils.email && (
                                    <span style={{ opacity: 0.9 }}>
                                    Contact: &nbsp;&nbsp;
                                        <Link sx={{ color: "#8298d0" }} href={el.utils?.link}>
                                        {el.utils.email}
                                    </Link>
                                </span>
                                )}
                            </Typography>
                        </Box>
                        {index !== notificationMessages.current.length - 1 && <Divider sx={{ background: "#aebacb" }} />}
                    </React.Fragment>
                )
            )}
        </List>

        <Divider sx={{ background: "rgba(174,186,203,0.44)" }} />
        <Typography className={s.admin_contact_block}>
            Напоминаем, если у вас есть предложения или замечания по данному сервису, свяжитесь с нами. Спасибо!
            <Link sx={{ color: "rgba(157,157,157,0.5)", pl: 2 }} href={adminsContactData.main_dev.emailLink}>
                {adminsContactData.main_dev.email}
            </Link>
        </Typography>
    </Popover>
)