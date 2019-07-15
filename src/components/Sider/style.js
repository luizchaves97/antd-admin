import styled from 'styled-components';

export const MenuContainer = styled.div`
  height: calc(100vh - 120px);
  overflow-x: hidden;
  flex: 1;
  padding: 24px 0;
`;

export const Brand = styled.div`
  z-index: 1;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
  box-shadow: 0 1px 9px -3px rgba(0, 0, 0, 0.2);
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 36px;
  }

  h1 {
    vertical-align: text-bottom;
    font-size: 16px;
    text-transform: uppercase;
    display: inline-block;
    font-weight: 700;
    color: #ff7900;
    white-space: nowrap;
    margin-bottom: 0;
  }
`;
