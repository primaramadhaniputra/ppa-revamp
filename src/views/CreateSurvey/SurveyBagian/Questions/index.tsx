import React, { useState } from 'react'
import { PopUpContainer, StyledButtonElipse, StyledCard, StyledInput } from '../styles';
import { Button, Grid, Input } from '@hudoro/neron';
import { IcEdit, IcImpulse, IcScala } from 'atoms/Icon';
import ReactSlider from 'react-slider';
import IcTrippleElipses from 'atoms/Icon/IcTrippleElipses';
import styles from './Questions.module.css'

const Questions = () => {
  const [title, setTitle] = useState("");
  const [currentValue, setCurrentValue] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const [questionType, setQuestionType] = useState('skala')

  return (
    <StyledCard >
      <Grid container alignItems="center" gap={5} style={{ width: "100%", padding: "0 16px" }}>
        <StyledInput
          autoFocus
          onChange={(e) => setTitle(e.target.value)}
          style={{
            width: `${title.length}ch`,
            minWidth: "185px",
            maxWidth: "350px",
            fontWeight: "bold",
            color: "black",
          }}
          placeholder="Berikan Pertanyaan Disini"
        />
        <IcEdit width={16} color="#55b434" />
      </Grid>
      <Grid container alignItems="center" gap={32} style={{ width: "100%", padding: "0 16px" }}>
        <StyledInput
          autoFocus
          onChange={(e) => setTitle(e.target.value)}
          style={{
            width: `${title.length}ch`,
            minWidth: "290px",
            maxWidth: "350px",
            fontSize: "12px",
          }}
          placeholder="Tambahkan deskripsi pertanyaan mu (optional)"
        />
        <IcEdit width={16} color="#55b434" />
        <Grid
          gap={20}
          justifyContent="space-between"
          container
          flexDirection="row"
          style={{ width: "100%" }}
          alignItems='center'
        >
          <div style={{ flex: "2" }}>
            {questionType === 'skala' ? <ReactSlider
              className={styles.customSlider}
              trackClassName={`${styles["customSlider-track"]} ${styles["customSlider-track-0"]}`}
              thumbClassName={styles["customSlider-thumb"]}
              markClassName={styles["customSlider-mark"]}
              marks
              min={0}
              max={10}
              defaultValue={1}
              value={currentValue}
              onChange={(value) => setCurrentValue(value)}
              renderMark={(props: any) => {
                if (props.key < currentValue) {
                  // props.className = "customSlider-mark customSlider-mark-before";
                  props.className = `${styles["customSlider-mark"]} ${styles["customSlider-mark-before"]} ${styles["customSlider-mark-after"]}`;
                } else if (props.key === currentValue) {
                  // props.className = "customSlider-mark customSlider-mark-active";
                  props.className = `${styles["customSlider-mark"]} ${styles["customSlider-mark-active"]}`;
                }
                return (
                  <span {...props} className={`${props.className} ${styles["show-value"]}`}>
                    {props.key}
                  </span>
                );
              }}
              renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
            /> : <Grid container>
              <Input />
            </Grid>}
          </div>
          <div style={{ position: "relative" }}>
            <StyledButtonElipse onClick={() => setShowPopup(!showPopup)}>
              <IcTrippleElipses width={21} />
            </StyledButtonElipse>
            {showPopup && (
              <PopUpContainer>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "6px", cursor: "pointer" }}
                  onClick={() => setQuestionType("skala")}
                >
                  <IcScala width={24} />
                  <p>Skala</p>
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "6px", cursor: "pointer" }}
                  onClick={() => setQuestionType("jawaban singkat")}
                >
                  <IcImpulse width={24} />
                  <p>Jawaban Singkat</p>
                </div>
              </PopUpContainer>
            )}
          </div>
        </Grid>
      </Grid>
    </StyledCard>
  )
}

export default Questions