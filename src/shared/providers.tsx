"use client"

import React, {ReactNode, createContext, useState, useMemo, useEffect} from "react"
import { createTheme, CssBaseline, PaletteMode, ThemeProvider } from "@mui/material"
import { localstorageKeys, getDesignTokens } from "@/shared/constants"

export const ColorModeContext = createContext({ toggleColorMode: () => {} })

export const Providers = ({ children }: { children: ReactNode }) => {
    const [mode, setMode] = useState<PaletteMode>("light")

    useEffect(() => {
        const theme = localStorage.getItem(localstorageKeys.theme)
        if (theme) {
            setMode(theme as PaletteMode)
        }
    }, [])

    const colorMode = useMemo(() => ({
        toggleColorMode: () => {
            setMode(prevMode => {
                const themeValue = prevMode === "light" ? "dark" : "light"
                localStorage.setItem(localstorageKeys.theme, themeValue)
                return themeValue
            })
        }
    }), [])

    const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode])

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                { children }
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}