import React, { useState } from 'react';
import PropTypes from 'prop-types'
import './css/TextForm.css';

export default function TextForm(props) {
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const handleUpperCaseClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        if(newText === ""){
            props.showAlert("Empty text field","danger");
        }
        else{
            props.showAlert("Text converted into uppercase","success")
        }
    }
    const handleLowerCaseClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        if(newText === ""){
            props.showAlert("Empty text field","danger");
        }
        else{
            props.showAlert("Text converted into lowercase","success")
        }
    }
    const handleCopyClick = () => {
        var text = document.getElementById("textInput");
        text.select();
        navigator.clipboard.writeText(text.value);
        if(text.value === ""){
            props.showAlert("Nothing to copy","danger");
        }
        else{
            props.showAlert("Copied to clipboard","success")
        }
    }
    const handleSpaceRemoveClick = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        if(text === ""){
            props.showAlert("Empty text field","danger");
        }
        else{
            props.showAlert("Extra space removed from text","success")
        }
    }
    const handleSpaceRemoveAllClick = () => {
        let newText = text.replace(/ /g, '');
        setText(newText)
        if(newText === ""){
            props.showAlert("Empty text field","danger");
        }
        else{
            props.showAlert("All spaces removed","success")
        }
    }
    const handleEmptyArea = () => {
        let newText = text.replace(text, '');
        setText(newText)
        if(newText === ""){
            props.showAlert("Nothing to empty","danger");
        }
        else{
            props.showAlert("Textarea emptied","success")
        }
    }

    const [text, setText] = useState("");
    return (
        <div className={`padding-top textFormBg ${props.mode}`}>
            <div className='container'>
                <h1 className='py-3 mainHeading'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control custom_input" value={text} onChange={handleOnChange} placeholder="Enter Text Here" id="textInput" rows="3"></textarea>
                    <div className='d-flex align-items-center justify-content-between my-2 flex-wrap'>
                        <p className='para'>Your text summary</p>
                        <p className='para'>{text.length > 0 ?0.008 * text.split(" ").length : "0"} Minutes to read</p>
                        <p className='para'>{text.length > 0 ? text.split(" ").length : "0"} words and {text.length} character</p>
                    </div>
                </div>
                <div className='d-block d-md-block text-center text-md-start'>
                    <button type="button" className='btn btn_main blue_custom_btn' onClick={handleUpperCaseClick}>Convert to uppercase</button>
                    <button type="button" className='btn btn_main custom_btn mx-4' onClick={handleLowerCaseClick}>Convert to lowercase</button>
                    <button type="button" className='btn btn_main light_green_custom_btn me-4' onClick={handleCopyClick}>Copy Text</button>
                    <button type="button" className='btn btn_main orange_btn me-4' onClick={handleSpaceRemoveClick}>Remove Extra Space</button>
                    <button type="button" className='btn btn_main green_btn me-4' onClick={handleSpaceRemoveAllClick}>Remove all Space</button>
                    <button type="button" className='btn btn_main red_custom_btn' onClick={handleEmptyArea}>Empty textarea</button>
                </div>
                <div className='previewText'>
                    <h1 className='my-3 mainHeading'>Preview Text</h1>
                    <p className='paraBlack pb-4' id='preview'>{text.length > 0 ? text : "No text preview available"}</p>
                </div>
            </div>
        </div>
    )
}

TextForm.propTypes = {
    heading: PropTypes.string,
}

TextForm.defaultProps = {
    heading: "Home",
}