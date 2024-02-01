import React from "react";

const BookingForm = ({ show }) => {

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.userName.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const movieName = form.movieName.value;
    const runTime = form.runtime.value;
    const rating = form.rating.value;

    const newFormData = {
      name,
      email,
      phone,
      movieName,
      runTime,
      rating,
    };

    const existingData =
      JSON.parse(localStorage.getItem("book-show-user-details")) || [];

    existingData.push(newFormData);

    localStorage.setItem(
      "book-show-user-details",
      JSON.stringify(existingData)
    );

    document.getElementById("bookForm").close();
  };

  return (
    <div className="w-full">
      <h1 className="text-center text-5xl font-thin pb-10">
        Book Your Favorite show now
      </h1>
      <div className="flex flex-col lg:flex-row justify-between gap-5 items-center">
        <div className="">
          <img src={show?.image?.original} alt="" className="w-72" />
        </div>

        <div className="flex-1">
          <form
            action=""
            className="flex flex-col gap-3"
            id="bookForm"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col">
              <label htmlFor="userName">Name</label>
              <input
                type="text"
                id="userName"
                name="name"
                required
                className="bg-transparent outline-none py-2 px-4 w-full border"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="bg-transparent outline-none py-2 px-4 w-full border"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="tel"
                name="phone"
                id="phoneNumber"
                className="bg-transparent outline-none py-2 px-4 w-full border"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="movieName">Movie Name</label>
              <input
                type="text"
                readOnly
                value={show.name}
                name="movieName"
                id="movieName"
                className="bg-transparent outline-none py-2 px-4 w-full border"
              />
            </div>
            <div className="flex items-center gap-3 w-full">
              <div className="flex flex-1 flex-col">
                <label htmlFor="runtime">Runtime</label>
                <input
                  type="text"
                  id="runtime"
                  name="runtime"
                  readOnly
                  value={show?.runtime}
                  className="bg-transparent outline-none py-2 px-4 w-full border"
                />
              </div>
              <div className="flex flex-1 flex-col">
                <label htmlFor="rating">Rating</label>
                <input
                  type="text"
                  id="rating"
                  name="rating"
                  readOnly
                  value={show?.rating?.average}
                  className="bg-transparent outline-none py-2 px-4 w-full border"
                />
              </div>
            </div>
            <div className="mt-4 flex items-center justify-center gap-4">
              <button
                className="btn rounded-none px-4 py-2 border"
                onClick={() => document.getElementById("bookForm").close()}
              >
                Cancel
              </button>
              <button
                className="btn rounded-none px-4 py-2 border"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
