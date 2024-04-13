import styles from "./Education.module.css";

function EducationCard(props) {
  return (
    <>
      <div id="educationCard" className={styles.educationCard}>
        <img src={props.content.img}></img>
        <p>School:{props.content.name}</p>
        <p>Year:{props.content.year}</p>
        <p>{props.content.achievement}</p>
      </div>
    </>
  );
}

export default EducationCard;
