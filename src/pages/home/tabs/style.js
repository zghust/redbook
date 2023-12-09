import styled from 'styled-components'
export const TabsWrapper = styled.div`
  .tabss {
    position: relative;
  }
  .adm-tabs-tab-list {
    width: 60vw;
    margin-left: 2vw;
  }

  .adm-tabs-tab {
    padding-bottom: 1vw;
  }
  .adm-tabs-tab-line {
    position: absolute;
    bottom: 1vw;
    height: 1vw;
    background: linear-gradient(to right, #ff5555, white);
    border-radius: 0 0 1vw 1vw;
  }
  .adm-tabs-header {
    border-bottom: none;
    margin-bottom: 1vw;
    margin-top: 1vw;
  }
  .adm-tabs-tab-wrapper {
    padding: 0 6px;
  }
  .adm-tabs-tab-wrapper-stretch {
    flex: none;
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
    z-index: 999;
  }
  .scan {
    margin-left: 15px;
  }
  .adm-tabs-header-mask-left,
  .adm-tabs-header-mask-right {
    background: rgb(238, 222, 222);
    opacity: 0;
  }
`
