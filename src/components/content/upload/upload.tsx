import React, { useState} from "react"
import Box from "@mui/material/Box"
import { DropzoneArea } from "mui-file-dropzone"
import { uploadOptions } from "@/shared/constants"
import Button from "@mui/material/Button"
import { apiRequests } from "@/shared/api"
import { FileObjectType } from "@/shared/types"

import s from "./upload.module.css"

interface UploadComponentInterface {
	setPhotos: (arr: FileObjectType[]) => void
	setLoading: (loading: boolean) => void
}

export const UploadComponent = ({ setPhotos, setLoading }: UploadComponentInterface) => {
	const [files, setFiles] = useState<File[]>([])

	const handleChange = (newFiles: File[]) => setFiles(newFiles)

	const handleDelete = (file: File) => {
		const updatedFiles = files.filter((f) => f.name !== file.name)

		setFiles(updatedFiles)
	}
	const handleButtonClick = async () => {
		setLoading(true)
		const payload = {
			files: files.map(() => ({
				imageURL: "test1"
			}))
		}

		const response = await apiRequests.savePhotos(payload)
		if (response.statusCode === 200) {
			setPhotos(payload.files)
		}

		setFiles([])
		setLoading(false)
	}

	return (
		<Box className={s.dragger_block} sx={{ py: 5 }}>
			<Box className={s.dragger}>
				<DropzoneArea
					useChipsForPreview
					showPreviews
					fileObjects={files}
					showAlerts={false}
					showPreviewsInDropzone={false}
					acceptedFiles={uploadOptions.acceptedFiles}
					maxFileSize={uploadOptions.maxFileSizeBytes}
					dropzoneText={uploadOptions.locale.orDragDropFileMulti}
					filesLimit={uploadOptions.maxFileCount}
					onDelete={handleDelete}
					onChange={handleChange}
				/>
				{files.length !== 0 && (
					<Button
						variant="contained"
						color="primary"
						onClick={handleButtonClick}
						style={{ marginTop: '16px' }}
					>
						Загрузить файлы
					</Button>
				)}
			</Box>
		</Box>
	)
}