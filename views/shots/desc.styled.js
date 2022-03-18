import styled from "styled-components";
import { Typography } from "components";

export const DescWrapper = styled.p`
    display: flex;
    width: 800px;
    line-height: 32px;
    text-align: justify;
    margin-top: 0;
    margin-bottom: 24px;
    font-size: ${ Typography.body1.fontSize };
    font-weight: ${ Typography.body1.fontWeight };
`;