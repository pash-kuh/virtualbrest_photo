import React from "react"
import Menu from "@mui/material/Menu"
import ListItemIcon from "@mui/material/ListItemIcon"
import Divider from "@mui/material/Divider"
import Box from "@mui/material/Box"
import MenuItem from "@mui/material/MenuItem"
import { v4 as uuid } from "uuid"
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined"
import SendOutlinedIcon from "@mui/icons-material/SendOutlined"
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined"
import { ToolbarKeysType } from "@/shared/types"
import {allLinks} from "@/shared/constants";

interface ToolbarInterface {
    anchor: HTMLElement | null
    setVisible: React.Dispatch<React.SetStateAction<boolean>>
    onClickHandler: (key: ToolbarKeysType) => void
}

export type MenuItemType = {
    id: string,
    label: React.ReactNode,
    key: React.Key,
    icon: React.ReactNode,
}

export const getItem = (label: React.ReactNode, key: React.Key, icon: React.ReactNode
): MenuItemType => {
    return {
        id: uuid(),
        label,
        key,
        icon
    }
}

const toolbarItems =  [
    getItem("Связаться с редакцией", "contact", <SendOutlinedIcon fontSize="small"/>),
    getItem("Новости", "webApp", <NewspaperOutlinedIcon type="link" href={allLinks.oldServiceNews} fontSize="small"/>),
    getItem("Мобильная версия", "mobileApp", <PhoneIphoneOutlinedIcon type="link" href={allLinks.oldServiceMobile} fontSize="small"/>)
]

export const ToolbarMenu = (props: ToolbarInterface) => {
    const { anchor, setVisible, onClickHandler } = props

    return (
        <Menu
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            keepMounted
            open={Boolean(anchor)}
            anchorEl={anchor}
            onClose={setVisible}
        >
            {toolbarItems.map(el => {
                if (el.key === "logout" || el.key === "history") {
                    return (
                        <Box key={el.id}>
                            <Divider/>
                            <MenuItem key={el.id} onClick={() => onClickHandler(el.key as ToolbarKeysType)}>
                                <ListItemIcon>{el.icon}</ListItemIcon>
                                {el.label}
                            </MenuItem>
                        </Box>
                    )
                }

                return (
                    <MenuItem
                        key={el.id}
                        onClick={() => onClickHandler(el.key as ToolbarKeysType)}
                    >
                        <ListItemIcon>{el.icon}</ListItemIcon>
                        {el.label}
                    </MenuItem>
                )
            })}
        </Menu>
    )
}
