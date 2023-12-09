import styled from 'styled-components'
const ItemsSwapper = styled.div`
  .item {
    margin: -2vw;
  }
  .centercontent {
    display: flex;
    margin: 2vw 0;
    .centerright {
      width: 64%;
      .bottom {
        margin-top: 2vw;
        color: #ccc;
      }
    }
    .centerleft {
      width: 32%;
    }
    justify-content: space-between;
    align-items: center;
  }
`
export default ItemsSwapper
