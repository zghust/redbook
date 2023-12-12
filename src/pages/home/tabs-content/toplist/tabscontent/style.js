import styled from 'styled-components'
export const TabscontentWrapper = styled.div`
  .all {
    margin: 0 2vw;
  }
  .contents::-webkit-scrollbar {
    width: 0;
  }
  .contents {
    display: flex;
    flex-direction: column;
    overflow-x: auto;
    overflow-y: hidden;
    .group {
      display: flex;
      flex-wrap: nowrap;
      flex-shrink: 0;
      width: 158vw;
      justify-content: flex-start;
      .content {
        width: 68vw;
      }
    }
  }
  .alltops {
    width: 90vw;
    height: 8vw;
    background-color: #eaeaea;
    border-radius: 4vw;
    text-align: center;
    line-height: 8vw;
  }
`
