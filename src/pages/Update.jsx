import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import supabase from "../config/supabaseClient";
import Button from "../components/Button";

const Update = () => {
  const { id } = useParams();
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
      .update({ title, method, rating })
      .eq("id", id);

    if (error) {
      setFormError("Please fill in all the fields correctly");
      console.log(error);
    }

    if (data) {
      setFormError(null);
      navigate("/");
    }
  };

  useEffect(() => {
    const fetchSmoothie = async () => {
      const { data, error } = await supabase
        .from("smoothies")
        .select()
        .eq("id", id)
        .single();

      if (error) {
        navigate("/", { replace: true });
      }
      if (data) {
        setTitle(data.title);
        setMethod(data.method);
        setRating(data.rating);
      }
    };

    fetchSmoothie();
  }, [id, navigate]);

  return (
    <form onSubmit={handleSubmit} className="ml-6 mr-6">
      <div className="flex flex-col gap-4 rounded-lg bg-red-400 mt-8 mx-auto md:w-[35rem] md:mx-auto p-6 h-[30rem] text-white border border-red-500">
        <h1 className="text-2xl font-medium ">Update a smoothie</h1>
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
        <Button text="Update" />
      {formError && <p>{formError}</p>}
      </div>
    </form>
  );
};

export default Update;
