import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={`${styles.heroWrapper} center`}>
      <select className={styles.dropDown}>
        <option value="US">US</option>
        <option value="IN">IN</option>
      </select>
      <div className={`${styles.heroInner}`}>
        <h2 className={styles.headerText}>
          We are at Your Service
        </h2>
        <div className={styles.slogan}>
          <p>Whatever you want At your doorstep</p>
        </div>
        <div className={styles.inputLocation}>
          <i className="fas fa-map-marker-alt"> </i>
          <input type="text" placeholder="Enter your address" />
          <i className={`${styles.arrow} fas fa-arrow-right`}></i>
        </div>
      </div>
      <div className={styles.heroImage}>
        <img
          src="https://cdn.pixabay.com/photo/2015/11/26/16/28/vintage-1064142_1280.png"
          alt=""
        />
      </div>
    </div>
  );
};
export default Hero;
