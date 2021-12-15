import React from "react";



import "../styles/Details.css";
import image from "../images/image.jpg"
const Home = () => {

    return (
        <div className="detail-container">
            <div className="poster">
                    <img src={image}/>
            </div>
            <div className="info">
                <div className="field">
                    <div className="label">
                        Plot: <p className="title label-p">Tytul</p>
                    </div>
                </div>
                <div className="field">
                    <div className="label">
                        Plot: <p className="label-p">Plot</p>
                    </div>
                </div>
                <div className="field">
                    <div className="label">
                        Released: <p className="label-p">Released</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;
