import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../config/supabaseClient.js";

import Button from "../components/Button";

const Create = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [rating, setRating] = useState("");
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !method || !rating) {
      setFormError("Please fill in all the fields correctly");
      return;
    } else {
      setFormError(null);
    }

    const { data, error } = await supabase
      .from("smoothies")
      .insert([{ title, method, rating }]);

    if (error) {
      setFormError("Something went wrong!!");
    }

    if (data) {
      setFormError(null);
      navigate("/");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="ml-6 mr-6">
      <div className="flex flex-col gap-4 rounded-lg bg-red-400 mt-8 mx-auto md:w-[35rem] md:mx-auto p-6 h-[30rem] text-white border border-red-500">
        <h1 className="text-2xl font-medium ">Create a smoothie</h1>
        <div className="flex flex-col  my-3">
          <label htmlFor="title text-sm">Name</label>
          <input
            type="text"
            id="title"
            value={title}
            className="w-[60%] bg-transparent outline-none  py-2 border-b-[2px] text-white placeholder-white placeholder:font-light"
            placeholder="Smoothie's name?"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col my-3">
          <label htmlFor="title text-sm">Method</label>
          <input
            type="text"
            id="title"
            value={method}
            className="w-[60%] bg-transparent outline-none  py-2 border-b-[2px] text-white placeholder-white placeholder:font-light"
            placeholder="How to prepare?"
            onChange={(e) => {
              setMethod(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col my-3">
          <label htmlFor="title text-sm">Rating</label>
          <input
            type="number"
            id="title"
            value={rating}
            className="w-[60%] bg-transparent outline-none  py-2 border-b-[2px] text-white placeholder-white placeholder:font-light"
            placeholder="Give a rating to it"
            onChange={(e) => {
              setRating(e.target.value);
            }}
          />
        </div>
        <Button text="Create" />
      </div>
      {formError && <p>{formError}</p>}
    </form>
  );
};

export default Create;
