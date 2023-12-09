import styled from 'styled-components'
const ItemSwapper = styled.div`
  .item {
    margin: 2vw;
    .title {
      font-size: 14px;
      font-weight: 600;
    }
  }
  .centercontent {
    display: flex;
    margin: 2vw 0;
    .centerleft {
      width: 68%;
      .subtitle {
        font-weight: 600;
      }
    }
    justify-content: space-between;
  }
  .bottom {
    display: flex;
    justify-content: space-between;
    padding: 2vw;
  }
`
export default ItemSwapper
