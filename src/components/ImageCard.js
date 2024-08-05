import React from "react";
import "../components/CssFile/Card.css";

export default function ImageCard({ children, imgSrc, ...props }) {
    return (
        <div {...props}  id="divcard" className="relative max-w-xs overflow-hidden aspect-w-1 aspect-h-1">
            <img id="card" src="https://th.bing.com/th/id/OIP.K64a_Nkutw76VB7L7MrNmwHaFj?rs=1&pid=ImgDetMain" alt="" className="transition-transform aspect-w-1 aspect-h-1"></img>
            <div className="absolute inset-0  flex items-end bg-gradient-to-t from-black/60 to-transparent">
                <div className="p-4 text-white">{children}</div>
            </div>



        </div>
    );
}