import React from "react";
import supabase from "../config/supabaseClient";
import { useState, useEffect } from "react";
import SmoothieCard from "../components/SmoothieCard";

const Home = () => {
  const [fetchError, setFetchError] = useState(null);
  const [smoothies, setSmoothies] = useState(null);

  useEffect(() => {
    const fetchSmoothies = async () => {
      const { data, error } = await supabase.from("smoothies").select();

      if (error) {
        setFetchError("Could not fetch smoothies.");
        setSmoothies(null);
        console.log(error);
      }

      if (data) {
        setSmoothies(data);
        setFetchError(null);
      }
    };

    fetchSmoothies();
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-semibold mb-8 mt-6 w-[80%] mx-auto">
        {" "}
        Smoothies{" "}
      </h1>
      {fetchError && (
        <p className="w-[100%] mt-24 text-4xl lg:mt-32 lg:text-6xl text-center">
          {" "}
          {fetchError}{" "}
        </p>
      )}
      {smoothies && (
        <div className="w-[80%] mx-auto m-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4">
            {smoothies.map((smoothie) => {
              return <SmoothieCard key={smoothie.id} smoothie={smoothie} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
