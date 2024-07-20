import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import documentation from '../content/documentation.json';

const SidebarContainer = styled.div`
  width: 250px;
  background-color: #f4f4f4;
  padding: 20px;
`;

const SidebarTitle = styled.h2`
  font-size: 1.5em;
  margin-bottom: 20px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin: 10px 0;
`;

const NestedList = styled.ul`
  list-style: none;
  padding-left: 20px;
`;

const SidebarLink = styled(NavLink)`
  text-decoration: none;
  color: #333;
  font-size: 1em;

  &:hover {
    text-decoration: underline;
  }

  &.active {
    font-weight: bold;
  }
`;

const renderSubsections = (subsections) => (
  <NestedList>
    {subsections.map((subsection, index) => (
      <ListItem key={index}>
        <SidebarLink to={subsection.link}>{subsection.title}</SidebarLink>
      </ListItem>
    ))}
  </NestedList>
);

const Sidebar = () => (
  <SidebarContainer>
    <SidebarTitle>{documentation.title}</SidebarTitle>
    <List>
      {documentation.sections.map((section, index) => (
        <ListItem key={index}>
          <SidebarLink exact to={section.link}>
            {section.title}
          </SidebarLink>
          {section.subsections && renderSubsections(section.subsections)}
        </ListItem>
      ))}
    </List>
  </SidebarContainer>
);

export default Sidebar;
