import { Grid, Icon, Paper, Typography } from '@material-ui/core';
import React from 'react';
import "./Resume.css";
import data from "../../utils/portfolioData";
import CustomTimeline, { CustomTimelineSeparator } from '../../components/Timeline/CustomTimeline';
import SchoolIcon from '@material-ui/icons/School';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
// import { TranslateOutlined } from '@material-ui/icons';
function Resume() {
    console.log(process.env.REACT_APP_HELLO, 'hello', process.env.NODE_ENV);
    
    return (
        <div>
            {/* About Me  */}
            <Grid container className="section pb__45">
                <Grid item className="section__title mb__30">
                    <span></span>
                    <h6>Introduction</h6>
                </Grid>

                <Grid item xs={12}>
                    <Typography variant="body2" className="aboutme__text">{data.about}</Typography>
                </Grid>
            </Grid>
            {/* Education and Experiences */}
            <Grid container className="section pb__45">

                <Grid item className="section__title mb__30">
                    <span></span>
                    <h6>Education</h6>
                </Grid>

                <Grid item xs={12}>
                    <Grid container className="resume__timeline">
                        {/* Work */}
                        <Grid item sm={12} md={6}>
                            <CustomTimeline icon={<SchoolIcon /> }>
                                {data.education.map(education => (
                                    <TimelineItem>
                                        <CustomTimelineSeparator />
                                        <TimelineContent className="timeline__content">
                                            <Typography className="timeline__title">{education.title}</Typography>
                                            <Typography className="timeline__course">{education.course}</Typography>
                                            <Typography className="timeline__date">{education.date}</Typography>
                                            <Typography variant="body2" className="timeline__description">{education.description}</Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                ))}
                            </CustomTimeline>

                        </Grid>
                        {/* Education */}
                        <Grid item sm={12} md={6}></Grid>
                    </Grid>
                </Grid>
            </Grid>
           

             {/* Skills */}
            <Grid container className="section pb__45">
                <Grid item className="section__title mb__30">
                    <span></span>
                    <h6>Skills</h6>
                </Grid>

                <Grid container spacing={3} justify="space-between" className="section graybg pb__45">
                    {data.skilss.map(skill => (
                        <Grid item xs={12} sm={6} md={3}>
                            <Paper elevation={1} className="skill">
                                <Typography variant="h6" className="skill__title">
                                    {skill.title}
                                </Typography>
                                {skill.description.map(element => (
                                    <Typography variant="body2" className="skill__description">
                                        <TimelineDot variant="outlined" className="timeline__dot" />{element}
                                    </Typography>
                                ))}
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Grid>

            



        </div>
    )
}

export default Resume;
