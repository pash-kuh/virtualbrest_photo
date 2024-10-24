"use client"

import React, { useEffect, useState } from "react"
import { UploadComponent } from "./upload/upload"
import { Grid } from "./grid/grid"
import Box from "@mui/material/Box"
import Backdrop from "@mui/material/Backdrop"
import { apiRequests } from "@/shared/api"
import { FileObjectType, TypeOfView } from "@/shared/types"
import { VerticalToggleButtons } from "@/shared/components/change-view-mode-buttons"
import { GradientCircularProgress } from "@/shared/functions"

import s from "../general.module.css"

export const Content = () => {
	const [viewType, setViewType] = useState<TypeOfView>("standard")
	const [photos, setPhotos] = useState<FileObjectType[]>([])
	const [loading, setLoading] = useState<boolean>(true)

	const fetchDataFunc = async () => {
		const response = await apiRequests.getPhotos()

		if (response.statusCode === 200) { setPhotos(response.data) }

		setLoading(false)
	}

	useEffect(() => { fetchDataFunc() }, [])

	return (
		<>
			<Backdrop
				sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
				open={loading}
			>
				<GradientCircularProgress />
			</Backdrop>

			<Box className={s.content_grid_block}>
				<Box className={s.upload_block}>
					<UploadComponent
						setPhotos={setPhotos}
						setLoading={setLoading}
					/>
				</Box>
				<Box className={s.photo_list_block}>
					<Grid
						photos={photos}
						gridView={viewType}
					/>
				</Box>

				<Box sx={{ position: "relative", top: 25 }}>
					<VerticalToggleButtons
						view={viewType}
						setView={setViewType}
					/>
				</Box>
			</Box>
		</>
	)
}