import React from "react"
import { Link } from "react-router-dom"
import {Button} from "reactstrap";
export default function NavBar(){
    return(
        <div>
            <ul>
                <li>
                    <Link to="/">
                      <Button color="success">
                        Ground Control
                      </Button>
                    </Link>
                </li>
            </ul>

        </div>
    )
}
