import styled from 'styled-components'
export const TabsWrapper = styled.div`
  .tabss {
    position: relative;
  }
  .adm-tabs-tab-list {
    width: 40vw;
    margin-left: 20px;
  }
  .adm-tabs-tab {
    font-size: 15px;
  }

  .searchandscan {
    display: flex;
    justify-content: flex-end;
    font-size: 20px;
    margin-right: 19px;
    position: absolute;
    top: 5px;
    right: 0px;
    opacity: 0;
    transition: all 0.3s ease-out;
  }
  .scan {
    margin-left: 15px;
  }
  .adm-tabs-header-mask-left,
  .adm-tabs-header-mask-right {
    background: rgb(238, 222, 222);
  }
`
