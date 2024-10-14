import { useState } from "react"
import { IconButton, Snackbar } from "@mui/material"
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined"

export const CopyToClipboardButton = ({ text }: { text: string }) => {
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(true)
        navigator.clipboard.writeText(text)
    }

    return (
        <>
            <IconButton onClick={handleClick} color="primary">
                <ContentCopyOutlinedIcon fontSize="small" />
            </IconButton>
            <Snackbar
                message="Copied to clibboard"
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                autoHideDuration={2000}
                onClose={() => setOpen(false)}
                open={open}
            />
        </>
    )
}