import React from "react"
import GoogleMap from "google-maps-react-markers"
import '../styles.css'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

const LocationPin = ({ text }) => (
    <div className="pin">
        <Icon icon={locationIcon} className="pin-icon" />
        <p className="pin-text">{text}</p>
    </div>
)

const Map = ({ location, zoomLevel }) => (
    <div className="map">
        <h2 className="map-h2">You are here</h2>

        <div className="google-map">
            <GoogleMap
                apiKey={"AIzaSyBekbznKP3ti4ZX3B34xIigzTz0MwRnMIQ"}
                defaultCenter={{ lat: location.lat, lng: location.lng }}
                defaultZoom={zoomLevel}
            >
                
                <LocationPin
                    lat={location.lat}
                    lng={location.lng}
                    text="Current Location"
                />
            </GoogleMap>
        </div>
    </div>
)

export default Map