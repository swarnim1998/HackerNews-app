import React, { useEffect, useState } from "react";
import Axios from "axios";

export default function UserDetails(props) {
  const userName = props.match.params.id;
  const [data, setData] = useState("");
  const [date, setDate] = useState("");
  useEffect(() => {
    Axios.get(
      `https://hacker-news.firebaseio.com/v0/user/${userName}.json?print=pretty`
    ).then((res) => {
      console.log(res.data);
      setData(res.data);
      const dateObj = new Date(res.data.created * 1000);
      const utc = dateObj.toUTCString();
      setDate(utc.slice(4, 16));
    });
  }, []);

  return (
    <div style={{ marginTop: "100px", marginLeft: "20px" }}>
      <h4>User Details</h4>

      <div style={{ background: "lightgray" }}>
        <div>
          user: <span>{data.id}</span>
        </div>
        <div>
          created: <span>{date}</span>
        </div>
        <div>
          karma: <span>{data.karma}</span>
        </div>
      </div>
    </div>
  );
}
