import styled from 'styled-components'
const ItemsSwapper = styled.div`
  .item {
    margin: -2vw;
  }
  .title {
    font-size: 14px;
    font-weight: 600;
  }
  .centercontent {
    display: flex;
    margin: 1vw 0;
    .centerright {
      width: 64%;
      padding: 8px;
      .bottom {
        margin-top: 2vw;
        color: #ccc;
        display: flex;
        justify-content: flex-start;
      }
    }
    .centerleft {
    }
    justify-content: space-between;
    align-items: center;
  }
`
export default ItemsSwapper
