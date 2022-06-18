import React from 'react';
import { Typography} from '@material-ui/core';

const FooterItem = (props) => {

    const style = {
        textTransform: "none"
    }

    return (
        <li><Typography>
            {props.children}
        </Typography></li>
    );
};

export default FooterItem;