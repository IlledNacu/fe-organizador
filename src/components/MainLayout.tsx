import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';
import { Flex } from '@mantine/core';

const MainLayout: React.FC = () => {
    return (
        <>
        <Flex
        style={{ height: '100vh', width: '100vw' }}
        bg='#f1e2e7'
        direction="row"
        wrap="nowrap"
        >
            <Flex 
                direction="column"
                justify="flex-start"
                align="stretch"
            ><SideBar /></Flex>
            <Flex 
                justify="center"
                align="center"
                style={{ flex: 1, padding: '20px' }}
            ><Outlet /></Flex>
        </Flex>
        </>
    );
};

export default MainLayout;