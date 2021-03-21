/* eslint-disable prettier/prettier */
import React from 'react'
import { AvatarPropType } from '../propTypes/ComponentPropTypes';
import './style.css'


export const Avatar = ({src,alt,onClick,children,size="medium"}) => {
    return(
        <div className={`avatar-wrapper ${size}Avatar`} onClick={(e) => {onClick && onClick(e)}} >
            {children && <div style={{background:'#'+Math.floor(Math.random()*16777215).toString(16)}} className="avatar-text"><span>{children}</span></div>}
            {src && !children && <img className="avatar-base" src={src} alt={alt}/>}
            {!src && !children && <div className="avatar-blank"><i className={`material-icons blank_${size}`}>account_circle</i></div>}
        </div>
    );
}

Avatar.propTypes = AvatarPropType;

