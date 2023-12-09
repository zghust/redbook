import styled from 'styled-components'
export const SearchWrapper = styled.div`
  .searchbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px auto 10px auto;
    width: 90vw;
    font-size: 20px;
  }
  .searchs {
    position: relative;
  }

  .search {
    position: absolute;
    right: 20px;
    top: 8px;
    font-size: 16px;
    font-family: '宋体';
    color: red;
  }

  input {
    width: 75vw;
    height: 30px;
    border-radius: 15px;
    padding-left: 12px;
    font-size: 14px;
    color: gray;
    border: 1px solid pink;
  }
  .scan {
    font-size: 24px;
  }
`
