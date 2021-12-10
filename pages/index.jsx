import React, { useContext } from "react";

import { Context } from "../context";

import { useRouter } from "next/router";

export default function Auth() {
  const { username, secret, setUsername, setSecret } = useContext(Context);

  const router = useRouter();

  function onSubmit(e) {
    e.preventDefault();

    if (username.length === 0 || secret.length === 0) return;

    const data = {
      username,
      secret,
    };

    fetch("https://api.chatengine.io/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "PRIVATE-KEY": process.env.NEXT_PUBLIC_PRIVATE_KEY,
      },
      body: JSON.stringify(data),
    }).then((r) => router.push("/chats"));
  }

  return (
    <div className="background">
      <div className="auth-container">
        <form className="auth-form" onSubmit={onSubmit}>
          <div className="auth-title">NextJS Chat</div>
          <div className="input-container">
            <input
              placeholder="Email / Username"
              className="text-input"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-container">
            <input
              placeholder="Password"
              type="password"
              className="text-input"
              onChange={(e) => setSecret(e.target.value)}
            />
          </div>
          <button type="submit" className="submit-button">
            Login / Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
