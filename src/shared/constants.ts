import { PaletteMode } from "@mui/material"
import grey from "@mui/material/colors/grey"
import { UploadDropzoneConfig } from "@bytescale/upload-widget-react"

export const apiPaths = {
    initGoogleStoragePath: "https://cloud-api.yandex.net/v1/disk",
    getImagesData: "/resources?path=",
    getSaveImageUrl: "/resources/upload"
}

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

export const uploadOptions: UploadDropzoneConfig = {
    apiKey: "free",
    multi: true,
    maxFileCount: 5,
    showFinishButton: true,
    locale: {
        orDragDropFileMulti: allTexts.descriptionUpload,
        "removed!": "удалено",
        addAnotherFileBtn: "Выбрать картинку",
        uploadFileMultiBtn: "Выбрать картинку",
        cancelBtn: "отмена",
        finishBtn: "Начать загрузку",
        removeBtn: "удалить",
        cancelPreviewBtn: "отмена",
        pleaseWait: "Пожалуйста подождите...",
        maxFilesReachedPrefix: "Максимальное количество выбираемых картинок",
        "error!": "ошибка",
    }
}

export const config = {
    client_id: "656271289758-cqa214fa2krg692hcmv30dlqnfl4u5ba.apps.googleusercontent.com",
    project_id: "virtualbrest-photos",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_secret: "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",
    redirect_uris: ["http://localhost:3000"],
    javascript_origins: ["https://photo1.virtualbrest.ru"]
}

export const localstorageKeys = {
    theme: "theme"
}

export const getDesignTokens = (mode: PaletteMode) => ({
    typography: {
        allVariants: {
            ...(mode === 'light'
                // light
                ? {
                    color: "rgba(39, 39, 52, 0.95)",
                }
                // dark
                : {
                    color: "#FFFFFF",
                }),
        },
    },
    palette: {
        mode,
        ...(mode === 'light'
            // light
            ? {
                primary: {
                    main: "rgba(39, 39, 52, 0.95)",
                    contrastText: "rgba(39, 39, 52, 0.95)",
                    dark: "#F8F8F9",
                    light: "rgba(39, 39, 52, 0.95)",
                },
                text: {
                    primary: "rgba(39, 39, 52, 0.95)",
                    secondary: "#F8F8F9",
                    link: grey[600]
                },
            }
            // dark
            : {
                primary: {
                    main: "#FFFFFF",
                    contrastText: "#F8F8F9",
                    light: "#F8F8F9",
                    dark: "rgba(39, 39, 52, 0.95)",
                },
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

export const uploadText = `
                Допускаются файлы типов: JPG, PNG и GIF объёмом не более 5 мегабайта каждый. Изображения ограничены по ширине размером 750
                пикселей и по высоте 700 пикселей (при большем размере картинки уменьшаются).
                Сервис работает и с мобильных браузеров (телефоны, смартфоны, планшеты).
                Если вы хотите отправить свои фото автору сайта, воспользуйтесь разделом
`

export const validExtensions = ["jpeg", "jpg", "png"]
export const limit4mb: (size: number) => boolean = (size: number) => (size / 1024 / 1024 < 4)