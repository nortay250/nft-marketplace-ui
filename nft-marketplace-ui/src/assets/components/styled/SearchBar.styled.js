import styled from "styled-components"
import {RiSearchLine} from "react-icons/ri"
import { Colors } from "../../../assets/Theme"

const SearchBarEl = styled.div`
    background-color: ${Colors.CardBackground};
    display: flex;
    align-items: center;
    padding: 1rem;
    border-radius: 12px;
    margin: 0 1rem 2rem 1rem;

    & > svg {
        font-size: 1.5rem;
        color: ${Colors.Gray};
    }
`
const Input = styled.input`
    font-size: 1rem;
    border: none;
    flex: 1;
    :focus {
        outline: none;
    }
`


const SearchBar = () => {
  return (
    <SearchBarEl>
        <Input placeholder="Search on Polygon"/>
        <RiSearchLine />
    </SearchBarEl>
  )
}

export default SearchBar