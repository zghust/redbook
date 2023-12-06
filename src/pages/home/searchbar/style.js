import styled from 'styled-components'
export const SearchWrapper = styled.div`
  .searchbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px auto 20px auto;
    width: 90vw;
    font-size: 20px;
  }
  .searchs {
    position: relative;
  }

  .search {
    position: absolute;
    right: 20px;
    top: 5px;
    font-size: 16px;
    font-family: '宋体';
    color: red;
  }
  .adm-search-bar {
    width: 80vw;
    --border-radius: 16px;
  }
  input {
    width: 75vw;
    height: 24px;
    border-radius: 12px;
    padding-left: 12px;
    font-size: 12px;
    color: white;
  }
`
