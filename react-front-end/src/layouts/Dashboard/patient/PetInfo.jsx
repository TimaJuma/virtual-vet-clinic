import React, { useState } from "react";
import axios from "axios";
import "./PetInfo.scss";
import PetDetail from "../PetDetail";

const MyPetList = () => {
  const [pets, setPets] = useState([]);
  const [detail, setDetail] = useState(false);

  useState(() => {
    axios.get("/api/mypets").then((res) => {
      console.log("MY PETS", res.data.pets);
      setPets(() => res.data.pets); // maybe change
    });
  }, []);

  return (
    <div className="dashboard-card">
      <h2 class="ui header dashboard-header">
        <i aria-hidden="true" class="paw icon"></i>
        <div class="content">
          LIST OF MY PETS
          <div class="sub header dashboard-header"></div>
        </div>
      </h2>
      <table class="ui striped table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Pet Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Weight</th>
            <th>Type</th>
            <th>Breed</th>
            <th>Info</th>
          </tr>
        </thead>
        <tbody>
          {pets.length > 0
            ? pets.map((pet) => (
                <tr>
                  <td>
                    <img class="pet-image" src={pet.image}></img>
                  </td>
                  <td>{pet.name}</td>
                  <td>{pet.age} years</td>
                  <td>{pet.gender}</td>
                  <td>{pet.weight} lbs</td>
                  <td>{pet.type}</td>
                  <td>{pet.breed}</td>
                  <td>
                    <svg
                      onClick={() => <PetDetail name={pet.name} />}
                      version="1.1"
                      id="Capa_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 23.625 23.625"
                      style={{
                        height: "1.5rem",
                        enableBackground: "new 0 0 23.625 23.625",
                      }}
                      xmlSpace="preserve"
                    >
                      <g>
                        <path
                          style={{ fill: "#5829BB" }}
                          d="M11.812,0C5.289,0,0,5.289,0,11.812s5.289,11.813,11.812,11.813s11.813-5.29,11.813-11.813
		S18.335,0,11.812,0z M14.271,18.307c-0.608,0.24-1.092,0.422-1.455,0.548c-0.362,0.126-0.783,0.189-1.262,0.189
		c-0.736,0-1.309-0.18-1.717-0.539s-0.611-0.814-0.611-1.367c0-0.215,0.015-0.435,0.045-0.659c0.031-0.224,0.08-0.476,0.147-0.759
		l0.761-2.688c0.067-0.258,0.125-0.503,0.171-0.731c0.046-0.23,0.068-0.441,0.068-0.633c0-0.342-0.071-0.582-0.212-0.717
		c-0.143-0.135-0.412-0.201-0.813-0.201c-0.196,0-0.398,0.029-0.605,0.09c-0.205,0.063-0.383,0.12-0.529,0.176l0.201-0.828
		c0.498-0.203,0.975-0.377,1.43-0.521c0.455-0.146,0.885-0.218,1.29-0.218c0.731,0,1.295,0.178,1.692,0.53
		c0.395,0.353,0.594,0.812,0.594,1.376c0,0.117-0.014,0.323-0.041,0.617c-0.027,0.295-0.078,0.564-0.152,0.811l-0.757,2.68
		c-0.062,0.215-0.117,0.461-0.167,0.736c-0.049,0.275-0.073,0.485-0.073,0.626c0,0.356,0.079,0.599,0.239,0.728
		c0.158,0.129,0.435,0.194,0.827,0.194c0.185,0,0.392-0.033,0.626-0.097c0.232-0.064,0.4-0.121,0.506-0.17L14.271,18.307z
		 M14.137,7.429c-0.353,0.328-0.778,0.492-1.275,0.492c-0.496,0-0.924-0.164-1.28-0.492c-0.354-0.328-0.533-0.727-0.533-1.193
		c0-0.465,0.18-0.865,0.533-1.196c0.356-0.332,0.784-0.497,1.28-0.497c0.497,0,0.923,0.165,1.275,0.497
		c0.353,0.331,0.53,0.731,0.53,1.196C14.667,6.703,14.49,7.101,14.137,7.429z"
                        />
                      </g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                    </svg>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default MyPetList;
