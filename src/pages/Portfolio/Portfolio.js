import { Card, CardActionArea, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Grow, Tab, Tabs, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import "./Portfolio.css";
import data from "../../utils/portfolioData";

function Portfolio() {

    const [tabvalue, setTabValue] = useState("All");
    const [projectDialog, setProjectDialog] = useState(false);

    return (
        <div>
            <Grid container className="section pb__45 pt__45">
                <Grid item className="section__title mb__20">
                    <span></span>
                    <h6>Projects</h6>
                </Grid>

                {/* Tabs */}
                <Grid item xs={12}>
                    <Tabs value={tabvalue} indicatorColor="white" className="custom__tabs" onChange={(event, newValue) => setTabValue(newValue)}>
                        <Tab label="All" value="All" className={tabvalue === "All" ? "customTabs__item customTabs__item__active" : "customTabs__item"} />

                        {[...new Set(data.projects.map(item => item.tag))].map(tag => (
                            <Tab label={tag} value={tag} className={tabvalue === tag ? "customTabs__item customTabs__item__active" : "customTabs__item"}
                            />
                        ))}
                    </Tabs>
                </Grid>
                
                {/* Projects */}
                <Grid item xs={12}>
                    <Grid container spacing={2} justify="" className="" >
                        {data.projects.map(project => (
                            <>
                            {tabvalue === project.tag || tabvalue ==="All" ? (
                                <Grid item xs={12} sm={6} md={4}>
                                    <Grow in timeout={1000}>
                                        <Card className="card" onClick={() => setProjectDialog(project)}>
                                            <CardActionArea>
                                                <CardMedia className="card__image" image={project.thumb} title={project.title}/>
                                                <CardContent>
                                                    <Typography className="card__title" variant="body2">{project.title}</Typography>
                                                    <Typography className="card__description" variant="caption">{project.caption}</Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grow>
                                </Grid>
                            ) : null}
                                
                            </>
                        ))}
                    </Grid>
                </Grid>

                {/* Project Dialog */}

                <Dialog open={projectDialog} onClose={() => setProjectDialog(false)} className="projectDialog">
                    <DialogTitle >
                        <Typography className="projectDialog__title">
                            {projectDialog.title}
                        </Typography>
                    </DialogTitle>
                        <img src={projectDialog.image} alt="project" className="projectDialog__image"/>
                    <DialogContent>
                        <Typography className="projectDialog__description">
                        {projectDialog.description}
                        </Typography>
                    </DialogContent>
                    <DialogActions className="projectDialog__actions">
                        {projectDialog?.links?.map((link) => (
                            (link.link === "" ? "" : (<a href={link.link} target="_blank" className="projectDialog__icon" rel="noreferrer">{link.icon}</a>) )
                        ))}
                    </DialogActions>
                </Dialog>
            </Grid>
        </div>
    )
}

export default Portfolio
