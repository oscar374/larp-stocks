"use client";

import React from 'react';

export default function Sidebar() {
  return (
    <div className="sidebar">
        <h1 className="text-5xl">larp stocks</h1>
        <a href="/">dashboard</a> <br></br>
        <a href="/sampleStocks">sample stocks link</a> <br></br>
        <a href="/example">Lvidia example link</a>
    </div>
  );
}