import React from 'react';

export const TabPanel = ({ index, children, value }) => {

    return (
        <div role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}>
            {children}
        </div>
    );
};
