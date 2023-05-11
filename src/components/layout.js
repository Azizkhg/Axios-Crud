import React from "react";
import { Link } from "react-router-dom";
import { Button } from "style-components";
import Create from "./create/create";
import Read from "./read/read";
export function LayoutRoutes() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={"/read"}>
              <Button>Read</Button>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <Button>Create</Button>
            </Link>
          </li>
          <li>
            <Link to={"/update"}>
              <Button>Update</Button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
