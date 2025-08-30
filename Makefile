default:
	npm run build
	cp ~/.config/spicetify/Extensions/big_cat.js ./marketplace/
	spicetify enable-devtools
	spicetify apply
	flatpak run com.spotify.Client
