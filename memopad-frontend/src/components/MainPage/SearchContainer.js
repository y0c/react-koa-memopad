import React, { Component } from 'react';
import { Form, Input, Button, Icon } from 'semantic-ui-react';

const SearchContainer = ({ 
    onSearch
}) => {
    return (
        <Form>
            <Form.Group>
                <Form.Input placeholder='Search ...' icon='search' width={14} />
                <Form.Button 
                    type='submit' 
                    color='blue' 
                    width={2}
                    fluid
                >
                Search
                </Form.Button>
            </Form.Group>
        </Form>
    )
}

export default SearchContainer;