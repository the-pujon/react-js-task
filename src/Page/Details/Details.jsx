import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import BookingForm from "../../Components/BookingForm/BookingForm";

const Details = () => {
  const id = useParams().id;
  const [showSummary, setShowSummary] = useState({});
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setShowSummary(data);
        setLoader(false);
      });

    return () => {
      setShowSummary({});
    };
  }, [id]);

  return (
    <>
      {loader ? (
        <div className="w-screen h-screen flex items-center justify-center bg-black"><span className="loading loading-ring loading-lg bg-white"></span></div>
      ) : (
        <div
          className=""
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${showSummary?.image?.original})`,
            backgroundSize: "cover",
            backgroundBlendMode: "multiply",
          }}
        >
          <div className="hero min-h-screen bg-base-200 ">
            <div className="hero-content flex-col lg:flex-row-reverse backdrop-blur-md bg-white/10 rounded-lg text-white">
              <img
                src={showSummary?.image?.original}
                className="max-w-sm rounded-lg shadow-2xl"
              />
              <div>
                <div className="flex justify-between items-center">
                  <h1 className="text-5xl font-bold">{showSummary?.name}</h1>
                  <div className="flex items-center gap-2 badge">
                    {" "}
                    <FaStar /> {showSummary?.rating?.average}{" "}
                  </div>
                </div>
                <p
                  className="py-6"
                  dangerouslySetInnerHTML={{ __html: showSummary?.summary }}
                ></p>
                <button
                  className="btn"
                  onClick={() =>
                    document.getElementById("bookForm").showModal()
                  }
                >
                  Book Ticket
                </button>
                <dialog
                  id="bookForm"
                  className="modal modal-bottom sm:modal-middle"
                >
                  <div className="modal-box backdrop-blur-md bg-white/20 lg:w-11/12 lg:min-w-[54rem]">
                    <BookingForm show={showSummary} />
                  </div>
                </dialog>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Details;
