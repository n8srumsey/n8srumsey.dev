import React from 'react';

import { Container, Grid, Grow, Typography } from "@material-ui/core";

import useStyles from "./styles";
import PDFViewer from './PDFViewer/PDFViewer';

const Resume = () => {
    const classes = useStyles();

    return (
        <Container>
            <Container className={classes.container}>
                <Grow in>
                    <Container style={{ marginTop: "5em" }}>
                        <Grid container justifyContent="center" alignItems="stretch" spacing={3} direction='column'>
                            <Grid item>
                                <Typography className={classes.heading} variant="h3">Resume</Typography>
                            </Grid>
                            <Grid item>
                                <PDFViewer />
                            </Grid>
                        </Grid>
                    </Container>
                </Grow>
            </Container>
        </Container>
    );
};


export default Resume;