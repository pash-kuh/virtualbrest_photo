import React, { useState } from "react"
import Box from "@mui/material/Box"
import { UploadDropzone, UploadDropzoneConfig } from "@bytescale/upload-widget-react"
import { allTexts, limit4mb, uploadOptions, validExtensions } from "@/shared/constants"
import { getUrl, getBase64 } from "@/shared/functions"

import s from "./upload.module.css"

interface UploadComponentInterface {
	setPhotos: (arr: any[]) => void
	setLoading: (loading: boolean) => void
}

export const UploadComponent = ({ setPhotos, setLoading }: UploadComponentInterface) => {
	const [files, setFiles] = useState<any[]>([])

	const uploadHandler = async (newFiles: any[]) => {
		const newFilesList = [...files]
		newFiles.forEach(file => {
			if (!validExtensions.includes(file.toLowerCase())) {
				// showWarningNotification(notification.fileExtensionErr)
				return
			}
			if (file.size && !limit4mb(file.size)) {
				// showWarningNotification(notification.sizeFileError)
				return
			}

			file.url = getUrl(file)
			newFilesList.push(file)
		})

		setFiles(newFilesList)
	}
	const onRemoveHandler = async (file: any) => {
		const index = files.indexOf(file)
		const newFileList = files.slice()
		newFileList.splice(index, 1)
		setFiles(newFileList)
	}
	// const onUploadFileHandler = async () => {
	// 	setLoading(true)
	//
	// 	const allFiles = files.map(async (file) => {
	// 		delete file.url
	// 		const base64 = await getBase64(file)
	// 		const fileName = `${file.name.trim()}.${getFileExtension(file)}`
	//
	// 		if (base64) {
	// 			const res = await generalApi.getSaveYandexUrl(base64, fileName)
	// 			return res
	// 		}
	// 	})
	// 	const resultAllFiles = await Promise.allSettled(allFiles)
	//
	// 	if (resultAllFiles) {
	// 		const newData = await generalApi.getYandexDiskData(getDate(), true)
	//
	// 		if(newData) {
	// 			setPhotos(newData.items)
	// 		}
	//
	// 		setFiles([])
	// 		showSuccessNotification(notification.successDownload)
	// 	} else {
	// 		showWarningNotification(notification.somethingWrong)
	// 	}
	//
	// 	setLoading(false)
	// }

	return (
		<Box className={s.dragger_block} sx={{ py: 5 }}>
			<Box className={s.dragger}>
				<UploadDropzone
					options={uploadOptions}
					onUpdate={({ uploadedFiles }) => {
						setPhotos(uploadedFiles.map(x => ({ title: x.fileUrl.slice(0, 20), img: x.fileUrl })))
					}}
				/>
			</Box>

			{/*{files.length === 0*/}
			{/*	? (*/}
			{/*		<div className={s.upload_text}>*/}
			{/*			{uploadText} <a href={allLinks.oldContactsService}>Контакты</a>*/}
			{/*		</div>*/}
			{/*	)*/}
			{/*	: (*/}
			{/*		<div className={s.upload_button_main_block}>*/}
			{/*			<Button*/}
			{/*				className={s.upload_button}*/}
			{/*				type="primary"*/}
			{/*				onClick={onUploadFileHandler}*/}
			{/*			>*/}
			{/*				Начать загрузку*/}
			{/*			</Button>*/}
			{/*		</div>*/}
			{/*	)*/}
			{/*}*/}
		</Box>
	)
}