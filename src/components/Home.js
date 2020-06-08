import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

export default function Home(props){
    return(

        <div>


            <Link to="/nasaphoto">
                <Button color="warning">increbles</Button>{''}
            </Link>


        </div>
    );
}
