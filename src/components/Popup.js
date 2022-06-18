import React from "react";
import { OverlayView } from "@react-google-maps/api";
import './style.css'

const getPixelPositionOffset = pixelOffset => (width, height) => ({
    x: -(width / 2) + pixelOffset.x,
    y: -(height / 2) + pixelOffset.y
});

const Popup = props => {
    return (
        <OverlayView
            position={props.anchorPosition}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
            getPixelPositionOffset={getPixelPositionOffset(props.markerPixelOffset)}
        >
            <div className="popup-tip-anchor">
                <div className="popup-bubble-anchor">
                    <div className="popup-bubble-content">
                            {props.children}
                    </div>
                </div>
            </div>
        </OverlayView>
    );
};

export default Popup;