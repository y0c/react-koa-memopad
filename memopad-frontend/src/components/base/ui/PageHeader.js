import React from 'react';
import { Header, Icon } from 'semantic-ui-react';
import styled from 'styled-components';

const PageHeader = ({ 
    icon,
    title,
    className
}) => (
    <Header as='h3' className={className}>
        { icon ? 
            <Icon name={icon} /> : null
        }
        <Header.Content>{title}</Header.Content>
    </Header>
)


export default styled(PageHeader)`
    &&& {
        margin-top:30px;
    }
` 