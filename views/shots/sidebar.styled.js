import styled from "styled-components";

export const SidebarWrapper = styled.div`
    display: flex;
    position: absolute;
    height: calc(100% - 48px);
    top:48px;
    right: 0;
`;

export const SidebarSticky = styled.div`
    display: flex;
    flex-direction: column;
    position: sticky;
    height: 120px;
    top:32px;
    right:0;
    grid-template-columns: auto;
    grid-row-gap: 24px;
`;

export const Anchor = styled.a`
    display: flex;
    width: 24px;
    height: 24px;
`;