import React from "react";
import { useParams } from "react-router-dom";

export default function CategoryPage() {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Category ID: {id}</h1>
      <p className="text-lg mt-4">
        You are viewing the details for category #{id}.
      </p>
    </div>
  );
}
