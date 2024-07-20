// src/components/Layout.js
import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import documentation from '../content/documentation.json'; // Your documentation structure

const Container = styled.div`
  display: flex;
  min-height: 100vh;
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

const Layout = ({ children }) => (
  <Container>
    <Sidebar documentation={documentation} />
    {/* <Sidebar /> */}

    <Content>{children}</Content>
  </Container>
);

export default Layout;
