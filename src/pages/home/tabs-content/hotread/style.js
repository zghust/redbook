import styled from 'styled-components'
export const HotReadWrapper = styled.div`
  .hotreadlist {
    display: flex;
    justify-content: space-between;
    margin-top: 2vw;
    .card {
      display: flex;
      align-items: center;
      flex: 1;
      margin: 2vw;
      .cardtop {
        display: flex;
        align-items: center;
        margin-bottom: 1vw;
        .topcontent {
          font-size: 16px;
          font-weight: 600;
        }
      }
      .bottom {
        color: grey;
      }
    }
  }
`
