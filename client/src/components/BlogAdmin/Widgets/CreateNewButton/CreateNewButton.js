import React from 'react';
import CreateIcon from '@material-ui/icons/Create';
import IconButton from '@material-ui/core/IconButton';

import styles from './styles';


const CreateNewButton = (props) => {
    const classes = styles();
    
    return (
        <div>
            <IconButton onClick={props.clickEvent} className={classes.createNew}>
                <CreateIcon />
            </IconButton>
        </div>
    )

};

export default CreateNewButton;