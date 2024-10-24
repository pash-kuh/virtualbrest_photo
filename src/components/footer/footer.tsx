"use client"

import React from "react"
import { staticData } from "@/shared/constants"
import { DarkLogoVb } from "@/shared/svg"
import Box from "@mui/material/Box"

import s from "./footer.module.css"

export const Footer = () => {
    return (
        <Box color="text.secondary" component="footer" className={s.main_footer_block}>
            <Box className={s.footer_block_container}>
                <Box className={s.dark_logo}>
                    {DarkLogoVb}
                </Box>

                <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", height: 100, marginRight: "40px" }}>
                    <Box className={s.footer_text_block}>
                        <Box className={s.footer_text}>
                            Использование материалов разрешено только при указании прямой ссылки на сайт {staticData.siteName.ruString}!
                        </Box>
                        <Box>
                            Copyright © 2001-{new Date().getFullYear()}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}