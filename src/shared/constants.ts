import { PaletteMode } from "@mui/material"
import grey from "@mui/material/colors/grey"

export const notification = {
    fileExtensionErr: "Это расширение не поддерживается.",
    sizeFileError: "Файл должен быть меньше 4.5 Mb.",
    successDownload: "Загрузка завершена успешно.",
    somethingWrong: "Что-то пошло не так.",
    folderCreatedSuccess: "Папка была создана успешно.",
    folderCreatedFailed: "Папка по какой-то причине не была создана."
}

export const allTexts = {
    descriptionUpload: "Выберите или перетащите файлы в выделеную зону...",
    emptyBlockText: "Сегодня загруженных файлов нет"
}

export const staticData = {
    virtualbrest_telegram_bot_link: "https://t.me/virtualbrest_bot",
    virtualbrest_telegram_link: "https://t.me/virtualbrestnews",
    telegram_name: "@virtualbrest",
    email: "admin@virtualbrest.com",
    email_href: "mailto:admin@virtualbrest.com?subject=%D0%BF%D0%BE%20%D1%80%D0%B5%D0%BA%D0%BB%D0%B0%D0%BC%D0%B5",
    siteName: {
        string: "virtualbrest.ru",
        link: "https://virtualbrest.ru/",
        ruString: "Виртуальный Брест",
        ruString2: "Виртуального Бреста"
    },
    iframeData: {
        telegram_bot_id: "telegram-post-virtualbrestnews-37875",
        telegram_bot_href: "https://t.me/virtualbrestnews/37875?embed=1",
        telegram_chanel_id: "telegram-post-virtualbrestnews-37874",
        telegram_chanel_href: "https://t.me/virtualbrestnews/37874?embed=1",
        informer_href: process.env.INFORMER_URL
    }
}

export const uploadOptions = {
    rootFolderName: "uploads",
    pathToImageFolder: "../var/www/html",
    maxFileCount: 10,
    acceptedFiles: ["image/jpeg", "image/png", "image/jpg"],
    maxFileSizeBytes: 10485760,
    locale: {
        orDragDropFileMulti: allTexts.descriptionUpload,
        addAnotherFileBtn: "Выбрать картинку",
        uploadFileMultiBtn: "Выбрать картинку",
        cancelBtn: "отмена",
        finishBtn: "Начать загрузку",
        removeBtn: "удалить",
        cancelPreviewBtn: "отмена",
        pleaseWait: "Пожалуйста подождите...",
        maxFilesReachedPrefix: "Максимальное количество выбираемых картинок",
        continueBtn: "Продолжить",
        acceptedFilesText: "Допустимые расширения",
        previewText: "Предпросмотр загружаемых картинок",
    }
}

export const localstorageKeys = {
    theme: "theme"
}

export const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            // light
            ? {
                text: {
                    primary: "rgba(39, 39, 52, 0.95)",
                    secondary: "#F8F8F9",
                    link: grey[600]
                },
            }
            // dark
            : {
                background: {
                    default: "#363636",
                    paper: "#363636"
                },
                text: {
                    primary: "#F8F8F9",
                    secondary: "#F8F8F9",
                    link: grey[500]
                },
            }),
    },
})

export const allLinks = {
    oldServiceVB: "https://virtualbrest.ru/",
    newServiceVB: "https://vbrest.by/",
    oldServiceNews: "https://virtualbrest.ru/allnews.php",
    oldServiceMobile: "https://virtualbrest.ru/pda.php",
    oldContactsService: "https://virtualbrest.ru/contakt.php"
}

export const limit4mb: (size: number) => boolean = (size: number) => (size / 1024 / 1024 < 4)