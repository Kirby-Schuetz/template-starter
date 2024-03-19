import React from "react";
import "../App.css";

// Things to add:

// Undo and Redo:
// You'll need to maintain a history of drawings. Each time a drawing action occurs, store the canvas state (image data or drawing commands) in a stack.
// Implement functions for undo and redo which pop from and push to the stack respectively.
// Add buttons to the Toolbar component to trigger these actions.
// Eraser:
// Add a button to the Toolbar for toggling between drawing mode and eraser mode.
// In the draw function, check if the eraser mode is active. If so, use a transparent color or clearRect method to simulate erasing.

const Toolbar = ({ setLineColor, setLineWidth, setLineOpacity }) => {
    return (
        <div className="Toolbar">
            <label>Brush Color</label>
            <input
                type="color"
                onChange={(e) => {
                    setLineColor(e.target.value);
                }}
                />
                <label>Brush Width</label>
                <input
                    type="range"
                    min="3"
                    max="20"
                    onChange={ (e) => {
                        setLineWidth(e.target.value);
                    }}
                    />
                <label>Brush Opacity</label>
                <input
                     type="range"
                     min="1"
                     max="100"
                     onChange={(e) => {
                        setLineOpacity(e.target.value/100);
                     }}
                />
        </div>
    );
};

export default Toolbar;