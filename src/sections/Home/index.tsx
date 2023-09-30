import React from 'react'
import styles from "./styles.module.scss"
import { Col, Row } from "antd"
import Fade from "react-reveal/Fade"
import useTyped from '@/hooks/useTyped'
import useLottie from "@/hooks/useLottie"
import {arrowDownLottie, fireLottie} from './constants'
import classNames from "classnames";


const strings = ["聊聊技术。", "写写博客。", "打打游戏。"];

const Home = () => {
  const el = useTyped(strings, { loop: true });
  const arrowDownLottieRef = useLottie(arrowDownLottie);
  const fireRef = useLottie(fireLottie);
  const fireRef2 = useLottie(fireLottie);

  const next = () => {
    const $about = document.querySelector("#about");
    if ($about) {
      $about.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className={styles.home}>
      <Row className={styles.content}>
        <Col span={24} md={12} className={styles.intro}>
          <p>👋 我是 </p>
          <p>fury_123,</p>
          <p>
            一个 前端工程师 🤩，
          </p>
          <p>
          目前在 <span className={styles.react}>财新</span>,
          </p>
          <p>
            ✍ <span className={styles.react}>React/Vue</span>,
          </p>
          <p>
            偶尔
            <span className={styles.sometime} ref={el} />
          </p>
        </Col>
        <Col span={24} md={12} className={styles.bannerBox}>
          <Fade bottom>
           <div className={styles.banner}>
              <div className={styles.fire} ref={fireRef}></div>
              <div className={classNames(styles.fire, styles.fire2)} ref={fireRef2}></div>
           </div>

          </Fade>
        </Col>

        <Col className={styles.next} span={24}>
          <Fade top>
            <div className={styles.handDown}>
              <div ref={arrowDownLottieRef} onClick={next} />
            </div>
          </Fade>
        </Col>
      </Row>
    </section>
  )
}

export default Home