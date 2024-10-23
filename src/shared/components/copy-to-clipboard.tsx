import { useState } from "react"
import { IconButton, Snackbar } from "@mui/material"
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined"

export const CopyToClipboardButton = ({ text }: { text: string }) => {
    const [open, setOpen] = useState(false)

    const handleClick = async () => {
        const textarea = document.createElement('textarea')
        textarea.value = text
        document.body.appendChild(textarea)
        textarea.select()
        document.execCommand('copy')
        document.body.removeChild(textarea)

        setOpen(true)
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