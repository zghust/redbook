import styled from 'styled-components'
export const TabWrapper = styled.div`
  .tabbar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 72px;

    font-size: 22px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .active {
    font-weight: 550;
    color: red;
  }
`
