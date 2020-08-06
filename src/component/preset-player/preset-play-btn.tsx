import React from "react";
import * as S from "./styles";

import cookies from 'react-cookies'

class PresetPlay extends React.Component {
  render() {
    return(
      <S.PresetPlayBtn onClick={play_preset}>preset</S.PresetPlayBtn>
    );
  }
}

let audio_0 : HTMLAudioElement = new Audio(require('./drum/0.wav'));
let audio_1 : HTMLAudioElement = new Audio(require('./drum/1.wav'));
let audio_2 : HTMLAudioElement = new Audio(require('./drum/2.wav'));
let audio_3 : HTMLAudioElement = new Audio(require('./drum/3.wav'));
let audio_4 : HTMLAudioElement = new Audio(require('./drum/4.wav'));

let audio_list : HTMLAudioElement[] = [audio_0, audio_1, audio_2, audio_3, audio_4]

let Interval_info : number [] = [];

function play_preset(): void // no ';' here
{
  if (Interval_info.length != 0)
  {
    for(var i=0; i<Interval_info.length; i++)
    {
      clearInterval(Interval_info[i])
    }
    Interval_info = [];
    return;
  }

  const bpmBoxElem = document.querySelector("#bpm-box") as HTMLDivElement;
  
  let bpm : number = parseInt(bpmBoxElem.innerHTML.split(" bpm")[0]);
  if (isNaN(bpm) || bpm == 0) bpm = 95;

  let one_bar_length : number = 60 / bpm * 4;

  let pre_position : number = 0;

  let start_preset_sync_index : number = 0;

  let preset_info = cookies.load("preset_info");
  console.log("this")
  console.log(preset_info)

  for(var i=0; i<preset_info.length; i++)
  {
    let audio_t = audio_list[preset_info[i][0]];
    setTimeout(function(){
        play_instrument(audio_t)
    },
    preset_info[i][1] * one_bar_length * 1000);
  }

 
  for(var i=0; i<preset_info.length; i++)
  {
    let audio_t = audio_list[preset_info[i][0]];

    setTimeout(
      function()
      {
        Interval_info.push(
          setInterval(function(){
          play_instrument(audio_t)
          }, one_bar_length * 1000
          )
        )
    },
    preset_info[i][1] * one_bar_length * 1000)
  }
  
}

function play_instrument(instrument : HTMLAudioElement) : void
{
  instrument.currentTime = 0;
  instrument.play();
}

export default PresetPlay;