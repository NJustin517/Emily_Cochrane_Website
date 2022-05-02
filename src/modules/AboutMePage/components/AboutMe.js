import React from "react";

export default function AboutMe() {
  return (
    <div className="AboutMeContainer">
      <div className="AboutLeft">
        <div className="AboutImage">
          <img src="https://static.wixstatic.com/media/a7f33e_0c209efbfa624058a03ec4de62ad8f2d~mv2.jpeg/v1/crop/x_68,y_0,w_836,h_1295/fill/w_386,h_598,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/4EF3A721-523C-4B06-96B0-EC08E95794DF.jpeg"></img>
        </div>
        <div className="AboutSocial">
          <p>
            <b>Instagram: </b>
            <a href="https://www.instagram.com/emilytcochrane/">
              @emilytcochrane
            </a>
          </p>
          <p>
            <b>Twitter: </b>
            <a href="https://twitter.com/emilytherese13">@emilytherese13</a>
          </p>
        </div>
      </div>
      <div className="AboutBio">
        <h2 className="AboutHeader">About Me</h2>
        <p>
          Born in Boston, MA and raised in Washington, D.C. Emily discovered her
          love for performance at age two when she pointed to her TV and said,
          “I want to be in that box. Tell me how to get in that box.” From then
          on Emily performed all over D.C., from Fords Theatre’s A Christmas
          Carol to Dream of the Pacific at the Kennedy Center with the
          Washington National Opera.
        </p>{" "}
        <p>
          {" "}
          Emily recently graduated from the Boston Conservatory with her BFA in
          Musical Theatre. Some recent credits of Emily's include West Side
          Story (Graziella), A Chorus Line (Judy), Crazy For You (Susie, u/s
          Irene), Lord of the Flies (Roger), and Carousel (u/s Carrie).
        </p>
        <p>
          Emily is now based in Los Angeles where she lives with her fiance,
          Justin, and their fur baby, Daisy!
        </p>
      </div>
    </div>
  );
}
