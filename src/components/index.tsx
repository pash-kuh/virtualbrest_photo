import React, { useEffect, useState } from "react"
import { generalApi } from "../api"
import { Header } from "./header/header"
import { Content } from "./content/content"
import { Footer } from "./footer/footer"
import CircularProgress from "@mui/material/CircularProgress"

import "@coreui/coreui/dist/css/coreui.min.css"
import s from "./general.module.css"

export const App = () => {
	const [photos, setPhotos] = useState<any>([])
	const [loading, setLoading] = useState<boolean>(true)

	const fetchDataFunc = async () => {
		const data = await generalApi.getPhotos()

		if (data) { setPhotos([]) }

		setLoading(false)
	}

	useEffect(() => { fetchDataFunc() }, [])

	return (
		<div className={s.main_block}>
			<Header />

			<Content
				photos={photos}
				setPhotos={setPhotos}
				setLoading={setLoading}
				loading={loading}
			/>

			<Footer />
		</div>
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
	);
}