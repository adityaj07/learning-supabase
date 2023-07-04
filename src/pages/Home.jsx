import React, { useState, useEffect } from "react";
import supabase from "../config/supabaseClient";
import SmoothieCard from "../components/SmoothieCard";

const Home = () => {
  const [fetchError, setFetchError] = useState(null);
  const [smoothies, setSmoothies] = useState(null);
  const [orderBy, setOrderBy] = useState("created_at");

  const handleDelete = async (id) => {
    try {
      await supabase.from("smoothies").delete().eq("id", id);
      setSmoothies((prev) => prev.filter((smoothie) => smoothie.id !== id));
    } catch (error) {
      console.error("Error deleting smoothie:", error);
    }
  };

  useEffect(() => {
    const fetchSmoothies = async () => {
      try {
        const { data, error } = await supabase
          .from("smoothies")
          .select()
          .order(orderBy, { ascending: false });

        if (error) {
          setFetchError("Could not fetch smoothies.");
          setSmoothies(null);
          console.error("Error fetching smoothies:", error);
        } else {
          setSmoothies(data);
          setFetchError(null);
        }
      } catch (error) {
        console.error("Error fetching smoothies:", error);
      }
    };

    fetchSmoothies();
  }, [orderBy]);

  return (
    <div>
      <h1 className="text-4xl font-semibold mb-8 mt-6 w-[80%] mx-auto">
        Smoothies
      </h1>
      {fetchError && (
        <p className="w-[100%] mt-24 text-4xl lg:mt-32 lg:text-6xl text-center">
          {fetchError}
        </p>
      )}
      {smoothies && (
        <div className="w-[80%] mx-auto m-4">
          <div className="mb-12 ">
            <p
              className="font-medium mb-3
              "
            >
              Order by:
            </p>
            <div className="flex gap-4 text-white">
              <button
                onClick={() => {
                  setOrderBy("created_at");
                }}
                type="button"
                className="outline-none px-4 py-2 bg-red-500 text-white rounded w-fit"
              >
                Time created
              </button>
              <button
                onClick={() => setOrderBy("title")}
                type="button"
                className="outline-none px-4 py-2 bg-red-500 text-white rounded w-fit"
              >
                Title
              </button>
              <button
                onClick={() => setOrderBy("rating")}
                type="button"
                className="outline-none px-4 py-2 bg-red-500 text-white rounded w-fit"
              >
                Rating
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {smoothies.map((smoothie) => (
              <SmoothieCard
                key={smoothie.id}
                smoothie={smoothie}
                onDelete={() => handleDelete(smoothie.id)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
