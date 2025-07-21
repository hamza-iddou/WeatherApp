import { Button, Form } from "react-bootstrap"
import styles from "./SearchBar.module.scss"
const SearchBar = () => {
  return (
    <>
    <Form>
        <Form.Group className={`${styles.searchContainer}`}>
            <Form.Label></Form.Label>
            <Form.Control type="text" size={"lg"} placeholder="Enter Your City ..."></Form.Control>
            <Button variant="primary" size={"sm"}>Search</Button>
        </Form.Group>
        
        
    </Form>
    </>
  )
}

export default SearchBar