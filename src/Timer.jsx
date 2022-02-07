import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

const Timer = () => {
  const [day, setDay] = useState(null);
  const [hour, setHour] = useState(null);
  const [minute, setMinute] = useState(null);
  const [seconds, setSeconds] = useState(null);

  const countdown = () => {
    const countDate = new Date("Feb 11, 2022 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    setDay(textDay);
    setHour(textHour);
    setMinute(textMinute);
    setSeconds(textSecond);
  };

  useEffect(() => {
    setInterval(countdown, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className={styles.app}>
      <div className={styles.coming_soon}>
        <div>
          <h2>We are Opening Soon!</h2>
          <div className={styles.countdown}>
            <div className={styles.container_day}>
              <h3 className={styles.day}>{day}</h3>
              {day !== 1 ? <h3>Days</h3> : <h3>Day</h3>}
            </div>
            <h4>:</h4>
            <div className={styles.container_hour}>
              <h3 className={styles.hour}>{hour}</h3>
              {hour !== 1 ? <h3>Hours</h3> : <h3>Hour</h3>}
            </div>
            <h4>:</h4>

            <div className={styles.container_minute}>
              <h3 className={styles.minute}>{minute}</h3>
              {minute !== 1 ? <h3>Minutes</h3> : <h3>Minute</h3>}
            </div>
            <h4>:</h4>

            <div className={styles.container_seconds}>
              <h3 className={styles.seconds}>{seconds}</h3>
              {seconds !== 1 ? <h3>Seconds</h3> : <h3>Second</h3>}
            </div>
          </div>
        </div>
        <div className={styles.image}>
          <Image src="/undraw_winners_re_wr1l.svg" alt="illustration" height={250} width={250} quality={100} priority />
        </div>
      </div>
    </section>
  );
};

export default Timer;
