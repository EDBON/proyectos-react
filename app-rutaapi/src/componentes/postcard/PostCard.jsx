import React from "react"; // ✅ Siempre con R mayúscula
import "./PostCard.css"

export default function PostCard(props) {
  return (
    <div>
      <h4>{props.name}</h4>
      <h4>{props.email}</h4>
      <h4>{props.body}</h4>
    </div>
  );
}
