import React from 'react';
import styles from './index.module.scss';
// import workspace from "@/assets/images/page-hero-workspace.webp";
import avatar from "@/assets/images/my_avatar.jpeg";
import Fade from 'react-reveal/Fade';// 是一个用于 React.js 的库（library）的引入语句。它可以实现在组件渲染时产生淡入效果
import Jello from 'react-reveal/Jello';
import Reveal from 'react-reveal/Reveal';
import useTyped from '@/hooks/useTyped'






type Props = {}

const strings = ["程序员", "前端开发", "工程师", "开发"];

const About = (props: Props) => {
  const el = useTyped(strings, { loop: true });

  const next = () => {
    const $project = document.querySelector("#project");
    if ($project) {
      $project.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.abort} id="about">
      <div className={styles.info}>
        <Fade bottom>
          <Reveal effect="fadeInUpBig">
              <h2>
                  关于
              </h2>
              <h3>
                👋, 我是fury_123 👻
              </h3>
          </Reveal>
        </Fade>

        <Fade bottom>
          <div className={styles.avatar}>
            <img src={avatar} alt="个人头像" />
          </div>
        </Fade>

          <Reveal>
            <Fade bottom>
              <p>一个 <span className={styles.styles_highlight}>前端开发</span>,。目前在 <span className={styles.styles_highlight}>财新@北京</span> 从事前端开发 </p>
              <p>本科就读于 湖北省 <span className={styles.styles_highlight}>江汉大学 @ 武汉</span> 计算机科学与技术专业。大学期间参与过 <span className={styles.styles_highlight}>校内实训</span> ,以及 智能车项目 🇨🇳 。</p>
              <p>大学末期一直泡在图书馆, 学习 前端领域知识 🤔 ,</p>
              <p>早上七点半起床去记单词, 利用课间及空闲时间 研读红宝书 ,</p>
              <p>和后端 算法 相比较,个然感觉还是 <span className={styles.styles_highlight}>更喜欢前端</span> ,</p>
              <p>就像是<span className={styles.styles_highlight}>尤大</span> 讲的一样 ,<span className={styles.styles_highlight}>开始前端 是因为可以做出绚烂的界面 和 交互功能</span> 🌟,</p>
              <p>小时候想的是开飞机, 尤其对B2 感兴趣 , 因为 与众不同 🤔</p>
              <p>目前 努力生活 完善不足 </p>
            </Fade>
            
            <div className={styles.timeLine}>
              {/* 年份块 */}
              <div className={styles.firstBlock}>
                <span>
                  1998
                </span>
              </div>
              
              {/* 内容块 */}
              <div className={styles.firstSub}>
                <div className={styles.firstRound}>
                  <div className={styles.firstCircle}>
                  </div>
                </div>
                <Fade right>
                  <div className={styles.firstSlider}>
                    <p className={styles.firstMounth}>四月</p>
                    <p className={styles.firstEvent}>👶🏻</p>
                  </div>
                </Fade>
              </div>

              {/* 年份块 */}
              <div className={styles.secondBlock}>
                <span>
                  ...
                </span>
              </div>
              {/* 内容块 */}
              <div className={styles.secondSub}>
                <div className={styles.secondRound}>
                  <div className={styles.secondCircle}>
                  </div>
                </div>
                <Fade left>
                  <div className={styles.secondSlider}>
                    <p className={styles.secondMounth}></p>
                    <p className={styles.secondEvent}>🙇‍♂️ 好好学习...</p>
                  </div>
                </Fade>
              </div>

              {/* 年份块 */}
              <div className={styles.thirdBlock}>
                <span>
                  2021
                </span>
              </div>
              {/* 内容块 */}
              <div className={styles.thirdSub}>
                <div className={styles.thirdRound}>
                  <span className={styles.thirdCircle}>
                    <img src="https://yingjieweb.github.io/yingjieweb/static/media/qfnu.19bb88066f64b504c7b7.png" alt="shixun" width='46' />
                  </span>
                </div>
                <Fade right>
                  <div className={styles.thirdSlider}>
                    <p className={styles.thirdMounth}>六月</p>
                    <p className={styles.thirdEvent}>🎓 本科毕业 🎉</p>
                    <p className={styles.thirdPlace}>武汉, 湖北</p>
                    <p className={styles.thirdSchool}><span><span className={styles.styles_highlight}>江汉大学 </span> @ 计算机科学与技术</span></p>
                    <p className={styles.thirdExp}>开始写HTML, CSS, 慢慢转写JavaScript , 前端真好玩 </p>
                  </div>
                </Fade>
              </div>
              {/* 内容块 */}
              <div className={styles.thiLefSub}>
                <div className={styles.thiLefRound}>
                  <span className={styles.thiLefCircle}>
                    <img src="https://yingjieweb.github.io/yingjieweb/static/media/neu.ceffbe978682a0c2b472.png" alt="shixun" width='46' />
                  </span>
                </div>
                <Fade left>
                  <div className={styles.thiLefSlider}>
                    <p className={styles.thiLefMounth}>六月</p>
                    <p className={styles.thiLefEvent}>🎓 本科毕业 🎉</p>
                    <p className={styles.thiLefPlace}>武汉, 湖北</p>
                    <p className={styles.thiLefSchool}><span><span className={styles.styles_highlight}>江汉大学 </span> @ 计算机科学与技术</span></p>
                    <p className={styles.thiLefExp}>开始写HTML, CSS, 慢慢转写JavaScript , 前端真好玩 </p>
                  </div>
                </Fade>
              </div>

              {/* 年份块 */}
              <div className={styles.fourthBlock}>
                <span>
                  2022
                </span>
              </div>
              {/* 内容块 */}
              <div className={styles.fourthSub}>
                <div className={styles.fourthRound}>
                  <div className={styles.fourthCircle}>
                  </div>
                </div>
                <Fade right>
                  <div className={styles.fourthSlider}>
                    <p className={styles.fourthMounth}>11月</p>
                    <p className={styles.fourthEvent}>
                    进入<span className={styles.styles_highlight}>财新 </span>
                      @ <span className={styles.something} ref={el}></span>
                      </p>
                  </div>
                </Fade>
              </div>
              
              {/* 年份块 */}
              <div className={styles.firstBlock}>
                <span>
                  2023
                </span>
              </div>
              {/* 内容块 */}
              <div className={styles.fifthSub}>
                <div className={styles.fifthRound}>
                  <div className={styles.fifthCircle}>
                  </div>
                </div>
                <Fade left>
                  <div className={styles.fifthSlider}>
                    {/* <p className={styles.fifthMounth}>接受公司任务 , 实现功能和需求...</p> */}
                    <p className={styles.fifthEvent}>接受公司任务 , 实现功能和需求...</p>
                  </div>
                </Fade>
              </div>
            </div>
          </Reveal>

        <Jello>
          <div className={styles.button} onClick={next}>
            了解更多👇
          </div>
        </Jello>
      </div>

    </div>
  )
}

export default About