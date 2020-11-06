import React from "react";
import { Link } from "react-router-dom";

export default function Stories(props) {
  const { data, index } = props;
  const dateObj = new Date(data.time * 1000);
  const utc = dateObj.toUTCString();
  const date = utc.slice(4, 16);

  return (
    <div style={{ margin: "10px" }}>
      <b>
        <a href={data.url}>
          <p style={{ marginBottom: "0px" }}>
            <span>{index + 1}</span> {". " + data.title}
          </p>
        </a>
      </b>
      <span style={{ fontSize: "small", color: "gray", marginLeft: "20px" }}>
        {data.score + " points by "}
        <Link to={"/user/" + data.by}>
          <span>{data.by}</span>
        </Link>
        <span>{date}</span>
      </span>
    </div>
  );
}
