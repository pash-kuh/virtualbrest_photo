"use client"

import React from "react"
import { UploadComponent } from "./upload/upload"
import { Grid } from "./grid/grid"
import Box from "@mui/material/Box"
import Backdrop from "@mui/material/Backdrop"
import CircularProgress from "@mui/material/CircularProgress"

import s from "../general.module.css"

interface ContentInterface {
	setPhotos: (arr: any[]) => void
	photos: any[]
	setLoading: (loading: boolean) => void
	loading: boolean
}

export const Content = ({ photos, setPhotos, loading, setLoading }: ContentInterface) => {
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
						setPhotos={setPhotos}
					/>
				</Box>
			</Box>
		</>
	)
}

export const GradientCircularProgress = () => {
	return (
		<React.Fragment>
			<svg width={0} height={0}>
				<defs>
					<linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
						<stop offset="0%" stopColor="#e01cd5" />
						<stop offset="100%" stopColor="#1CB5E0" />
					</linearGradient>
				</defs>
			</svg>
			<CircularProgress sx={{ 'svg circle': { stroke: 'url(#my_gradient)' } }} />
		</React.Fragment>
	)
}