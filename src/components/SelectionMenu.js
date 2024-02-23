// In SelectionMenu.js
import React from 'react';
import { ButtonGroup, Button, FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox } from '@mui/material';

const SelectionMenu = ({ exclusiveSelected, setExclusiveSelected, multipleSelected, setMultipleSelected }) => {
    const handleExclusiveChange = (value) => {
        setExclusiveSelected(value);
    };

    const handleMultipleChange = (event) => {
        const value = event.target.name;
        const newSelection = multipleSelected.includes(value)
            ? multipleSelected.filter((option) => option !== value)
            : [...multipleSelected, value];
        setMultipleSelected(newSelection);
    };

    // Ensure data is defined before rendering
    if (!exclusiveSelected || !multipleSelected) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <ButtonGroup>
                {['Crime', 'Crime+', 'Jail'].map((option) => (
                    <Button
                        key={option}
                        variant={exclusiveSelected === option ? 'contained' : 'outlined'}
                        onClick={() => handleExclusiveChange(option)}
                    >
                        {option}
                    </Button>
                ))}
            </ButtonGroup>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Select Multiple Options</FormLabel>
                    <FormGroup>
                        {['Activity', 'Shots'].map((option) => (
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={multipleSelected.includes(option)}
                                        onChange={handleMultipleChange}
                                        name={option}
                                    />
                                }
                                label={option}
                                key={option}
                            />
                        ))}
                    </FormGroup>
                </FormControl>
            </div>
        </div>
    );
};

export default SelectionMenu;
