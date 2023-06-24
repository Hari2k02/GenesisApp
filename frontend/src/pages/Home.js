import React, { useState } from "react";

// Components import
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
// import Features from "../components/Features/Features";
// import Growth from "../components/Growth/Growth";
// import Questions from "../components/Questions/Questions";
import Programs from "../components/Programs/Programs";
import Footer from "../components/Footer/Footer";
import "./Home.css"
// Import data
// import { programs_user } from "../constants/programs_user";  
import { programs_shopper } from "../constants/programs_shopper";

const Home = () => {
    const [hamActive, setHamActive] = useState(false);

    return (
        <div className="App">
            <Navbar hamActive={hamActive} setHamActive={setHamActive} />
            <Hero />
<<<<<<< HEAD
            {/* <Features /> */}
            {/* <Growth /> */}
            {/* <Questions /> */}
            {/* <Programs programs={programs_user} /> */}
=======
            <Features />
            <Growth />
>>>>>>> 260c276e80bf07d41a593f7807f767140497de74
            <Programs programs={programs_shopper} />
            <Footer />
        </div>
    );
};

export default Home;