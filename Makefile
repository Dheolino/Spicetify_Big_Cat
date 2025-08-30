default:
	npm run build
	spicetify enable-devtools
	spicetify apply
	flatpak run com.spotify.Client
