import React from "react";

export default function ForList({ src }) {
    return (
        <dl>
            {
              src.map((elem) => (
                <React.Fragment key={elem.isbn}>
                    <dd>{elem.title}</dd>
                    <dd>{elem.price}</dd>
                </React.Fragment>
              ))
            }
        </dl>
    );
}
