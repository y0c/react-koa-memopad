import React from 'react';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';

const FABButton = ({icon, ...rest}) => (
    <Button circular icon={icon} {...rest}/>
);

// const convertPos = ({ pos }) => {
//     return pos.split(' ').map(v => `${v} : 0;`).join('\n');
// }

export default styled(FABButton)`
    position: fixed;
    bottom: ${ props => props.bottom }px;
    top: ${ props => props.top }px;
    right: ${ props => props.right }px;
    left: ${ props => props.left }px;
`