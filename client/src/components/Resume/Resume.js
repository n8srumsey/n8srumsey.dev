import React, { useLayoutEffect, useRef, useState } from 'react';

import { Button, Container, Grid, Grow, Link, Typography } from "@material-ui/core";
import { Document, Page } from "react-pdf/dist/umd/entry.webpack";


import useStyles from "./styles";

import GetApp from '@material-ui/icons/GetApp'

const Resume = () => {
    const [pdfTop, setPdfTop] = useState(0);
    const [pdfRight, setPdfRight] = useState(0);
    const [pdfDisplay, setPdfDisplay] = useState('none')
    const classes = useStyles();

    const pdfReference = useRef(null);

    const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page

    const updatePosition = () => {
        setPdfTop(pdfReference.current.getBoundingClientRect().top);
        setPdfRight(pdfReference.current.getBoundingClientRect().right)
    }

    function onDocumentLoadSuccess() {
        setPageNumber(pageNumber + 1);
        setTimeout(() => { updatePosition(); }, 10)
        setPdfDisplay('flex');
    }

    useLayoutEffect(() => {
        window.addEventListener('resize', updatePosition);
        return () => window.removeEventListener('resize', updatePosition);
    }, []);

    return (
        <Container>
            <Grow in>
                <Grid container className={classes.container} justifyContent="center" alignItems="center" spacing={3} direction='column'>
                    <Grid item>
                        <Typography className={classes.heading} variant="h3">Resume</Typography>
                    </Grid>
                    <Grid item>
                        <div ref={pdfReference}>
                            <Document
                                file="resume.pdf"
                                onLoadSuccess={onDocumentLoadSuccess}
                            >
                                <Page pageNumber={pageNumber} />
                            </Document>
                        </div>
                        <Link href='/resume.pdf' download component={Button} className={classes.downloadButton} style={{ top: pdfTop + 15, left: pdfRight - 150, display: pdfDisplay }}>
                            <GetApp />
                            <Typography style={{ fontWeight: 'bold' }}>Download</Typography>
                        </Link>
                    </Grid>
                </Grid>
            </Grow>
        </Container>
    );
};


export default Resume;