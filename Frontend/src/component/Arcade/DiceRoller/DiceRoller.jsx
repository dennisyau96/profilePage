import { useEffect, useState } from "react";
import styles from "../../Arcade/Arcade.module.css";
import toast from "react-hot-toast";
function DiceRoller() {
  const [diceNumber, setDiceNumber] = useState(0);
  const [rolled, setRolled] = useState(false);
  const [result, setResult] = useState([]);
  const [rolling, setRolling] = useState(false);

  function rollDice(e) {
    e.preventDefault();
    setRolled(false);
    setResult([]);

    if (diceNumber == 0) {
      return toast.error("You don't have any die on hand.");
      // window.alert("You don't have any die on hand.");
    } else {
      setRolling(true);
      setTimeout(() => {
        setRolling(false);
      }, 2000);
      if (!rolling) {
        setTimeout(() => {
          setRolled(true);
        }, 2000);
      }

      for (let i = 0; i <= diceNumber - 1; i++) {
        let dice = Math.floor(Math.random() * 6) + 1;
        setResult((r) => [...r, dice]);
      }
    }
  }

  function lessDie() {
    if (diceNumber == 0) {
      return toast.error("You have no die to reduce.");
    } else {
      setDiceNumber((d) => d - 1);
    }
  }

  function moreDie() {
    if (diceNumber >= 6) {
      return toast.error("We only have six dice here.");
      // window.alert("We only have six dice here.");
    } else {
      setDiceNumber((d) => d + 1);
    }
  }

  return (
    <div className={(styles.diceRollerDiv, styles.boxyBK)}>
      <h2>Dice Roller</h2>
      <div className={styles.diceCounterDiv}>
        <button className={styles.lessBtn} onClick={() => lessDie()}>
          one less
        </button>
        <div className={styles.dieCounter}>{diceNumber}</div>
        <button className={styles.moreBtn} onClick={() => moreDie()}>
          one more
        </button>
      </div>

      <br />
      <button
        className={styles.rollDRBtn}
        onClick={(e) => {
          rollDice(e);
        }}
      >
        {diceNumber != 0 ? `Roll ${diceNumber} dice` : "Grab dice"}{" "}
      </button>

      <button
        className={styles.restartDRBtn}
        onClick={() => {
          setDiceNumber(0);
          setResult([]);
          setRolled(false);
          toast.success("The dice were given back to me.");
        }}
      >
        Start over
      </button>
      <div className={styles.diceDisplay} id="diceDisplay">
        {rolling ? (
          <div id="rollingDiv">
            <p className={styles.rollingMsg}>The dice are beening rolled...</p>
          </div>
        ) : null}

        {rolled ? (
          <div id="resultDiv">
            <p className={styles.rollingMsg}>The result is:</p>
            {result.map((r, index) => (
              <div className={styles.dice} key={index}>
                <span>{r} </span>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default DiceRoller;
