import React from 'react';

// Props
const Page1Demo = (props) => {
	return <div className="full-page">
        {props.text || '--- No text prop provided ---'}
    </div>;
};

export default Page1Demo;
