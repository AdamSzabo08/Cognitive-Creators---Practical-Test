import "bootstrap/dist/css/bootstrap.css";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

const MyNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEX///8Nc/8AAAAAbP+mwf8beP/Gxsabm5sAaP8AZv99qf8AcP8Abv/09PQAav8AZf/N3f9dlv+zzP8Mdf/3+v/d6f+vyP/I2v9gmP8ie//Y5f83g/9Ii/+hv//r8/9RkP+80v/m5uaysrJwcHAVFRVPT082NjZoaGhGRkYPDw/Nzc2BgYGYuv+ZmZnT09N2pf958o7+AAAEw0lEQVR4nO2d62KiMBBGFWqbiEVAQXu11d5ru+//dqvrdrtLAkSZBHfynd+acCQzuQhJrwcAAAAAAAAAAAAAAAAAAAAAAAAA8P8xzWfZCQ3ZLJ92rVMiWacTIUQc0hBvypqk66Rrrd9Mi1SKMOpTE4VCpkX393I2lzG93R/LWM5nnfoVF2JkTW/HSFwUnfllfYu375so7med+F1eCQd6O8TVpXvB4djF/fsiGg8d++WD0KHflnCQuxQsnN7AHdHYYcYZSud+W6SzlrqIOxHs9+PUjeC16xD8JrxmLuhGcdGl4EbRekMddhWDX8SW003RTRb9G2m108jHXfttGNvs+gc1Hf12PieiyaAtk0jUzzejgT3BYWWW2Uzk0pvklqie2+QmrZl2htZC8bKqjY7k4o68truFrJp7jm3NNK70v2okUzuRkaeyosYrK/X1Mv18MBzYWzFKKqYwws6UWN9iLA+Hqwb5NuoqtH29tL3AkGkVYxud4oUuJsb21zQTXX6LLugrmumiULpYtE10d1HQLzLONanbehPdoWuoozl1LVNNLfZ63hK6kYakXg3X5Bmbo6cSmtEiea5J1TqcBOEOTShG1BNFtYqRo0WTX6RqFpC0NSRqJpUu1y9z9RcWtE1orcR6tCCtoImFEiXhmrQCNQzjO4Ov3X+eNvN5b1DSnZLpiANxsncYnC9XD4EpD6vleUN5ajOdUMltmSph2PALnj4a233xeFpbotqKBGWPmCuG4U3Nx5fmd++fO7msKfNGyQSCMtWpg9KaTHb/dJDflqfqkFSzOenQNFPiXFauyZwd7LflrKrYWyUQY8pR8YnaRKo++txKMAieqwpWA+XEqmFU8cmXloJB8FJRchiO/kXWpYL2hhWpur1gpeKwzA/KOFQN9fOKtk10R2VDtYihYbsk801lurGHmeE9kWAQmIzjujA8vB8s83SchksywSCoG910Z3jYUE3PwzEanhIKBkH9MLwbQ91s4nX1cdbEx+pV883H4zM8V6/y6c2w+DdNjmqaLxJjYLhUrvF9jwrelW87zjUGhqs2ghrFFdnFG2FgWM6k+3Zp5YbqOJsaGJbvgWkMfvFWLoDo0g1pNiyP2F73rqOcUd2O3JoNP1uHUTmQP2ku3ZBmw3J//7F3HR+lEtz2+Sb9YYm96yhPvY7OsDUwtAsMKYChXWBIAQztAkMKYGgXGFIAQ7vAkAIY2gWGFMDQLjCkAIZ2gSEFMLQLDCmAoV1gSMHRG7L//5D/f8D8/8fn/ywG/+dpPHgmiv9zbcvyJbJ7NpH/86X8nxH24Dlv/s/qe/C+Bf93Zjx474n/u2u83j/k/w4p//eAub3Lzf99fP57KvDfF4P/3ib896fxYI8h/vtE8d/ri/9+bR7sucd/30T+e1/y37/Ugz1o+e8j7MFe0Pz38/ZgT3b+++p7cDYC//MtPDijxINzZvifFeTBeU8enNnlwblrHpyd58H5hx6cYenBOaQenCXb438ecM+DM517/M/l3sL9bPUts3nNRK41m2nn3MKy4Z5Mi7R+Pncgo818My3IV7YPJFmnEyFEHNIQb8qapGt3//yYMc1n2QkN2Sw/lnsHAAAAAAAAAAAAAAAAAAAAAAAAALAPPwEVMH/zaN+0ZAAAAABJRU5ErkJggg=="></img>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mr-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search products"
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <NavDropdown title="My account" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Favorites" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Cart" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
