import React from 'react';
import Box from '@mui/material/Box';
import { pageStructure } from '../PageStructure';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Navigation = () => {
    const location = useLocation();
    const [section, setSection] = useState("");
    const [sectionStructure, setSectionStructure] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        // Code to execute when 'section' changes
        const urlSection = new URLSearchParams(window.location.search).get('section');
        setSection(urlSection)
    }, [location.pathname, location.search]);

    useEffect(() => {
        // Code to execute when 'section' changes
        setSectionStructure(pageStructure[section])
    }, [section]);

    const sendToPage = (page) => {
        navigate("/" + page)
        // Add code to navigate to the page
    }

    if (!sectionStructure) {
        return null;
    }

    return (
        <div className="App-body">
            <h1>{sectionStructure.title}</h1>
            {sectionStructure.pages.map((page, index) => (
                <div key={index}>
                    <Box className="pageBox" onClick={() => sendToPage(page.path)}>
                        <h3>{page.title}</h3>
                    </Box>
                </div>
            ))}
        </div>
    );
};

export default Navigation;
