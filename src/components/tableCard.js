import { useContext, useState } from "react";
import { personsContext } from "../App";

const tableCard = (props) => {
  const { dispatch } = useContext(personsContext);
  return props.state.map((obj) => {
    return (
      <>
        <div>
          <tr>
            <td>
              <div id="tag">
                <p>
                  <b>
                    name : <div id="para">{obj.name}</div>
                  </b>
                </p>
                <p>
                  <b>
                    crade : <div id="para">{obj.a}</div>
                  </b>
                </p>
                <p>
                  <b>
                    credit : <div id="para">{obj.c}</div>
                  </b>
                </p>
              </div>
            </td>
          </tr>
        </div>
      </>
    );
  });
};

export default tableCard;
