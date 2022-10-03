import { Typography } from '@material-ui/core';
import React from 'react';
import "./Footer.css";
import data from "../../utils/portfolioData";

function Footer() {
    return (
        <div className="footer">
            <div className="footer__left">
                <Typography className="footer__name">
                    {data.name}
                </Typography>
            </div>

            <div className="footer__right">
            <Typography className="footer__copyright">
                Designed and Developed by <a href={`mailto:${data.email}`}>{data.name}</a>
            </Typography>
            </div>
        </div>
    )
}

export default Footer
