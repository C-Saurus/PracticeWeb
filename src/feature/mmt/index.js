import {React, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { addCorrect, deleteNum } from '../../store/action';
import { successToast, errorToast } from '../../utils/toastify';
import qs from '../../data/mmt'
import { getLocalStorage, removeLocalStorage, setLocalStorage } from '../../service/localStorage';
import './index.css'
import '../../utils/responsive/index.css'
import p1 from '../../asset/165.png'
import p2 from '../../asset/278.png'
import p3 from '../../asset/279.png'
import p4 from '../../asset/280.png'

const MMT = () => {
  const [change, setChange] = useState(getLocalStorage("currentQs") || 0)
  const [check1, setCheck1] = useState(false)
  const [check2, setCheck2] = useState(false)
  const [check3, setCheck3] = useState(false)
  const [check0, setCheck0] = useState(false)
  const [ck, setCk] = useState(false)
  const [keep, setKeep] = useState(true)
  const [checkNum, setCheckNum] = useState(true)
  const data = qs
  const currentTheme = useSelector(state => state.currentTheme)
  const num = useSelector(state => state.num)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleBackHome = () => {
    if (parseInt(change) >= data.length) {
      removeLocalStorage("currentQs")
      dispatch(deleteNum())
    }
    else {
      setLocalStorage("currentQs", parseInt(change))
    }
    setKeep(true)
    navigate('/')
  }
  const handleContinue = () => {
    setChange(parseInt(change)+1)
    if (keep) setKeep(false)
    if (check0) setCheck0(false)
    if (check1) setCheck1(false)
    if (check2) setCheck2(false)
    if (check3) setCheck3(false)
    if (ck) setCk(false)
    if (!checkNum) setCheckNum(true)
  }
  const handleChoose0 = () => {
    if (data[parseInt(change)].answer === 0) {
      successToast("Câu trả lời đúng 🥳")
      setCk(true)
      if (checkNum === true) {
        dispatch(addCorrect())
      }
    }
    else {
      errorToast("Sai mất rồi bạn eyy 🤡")
      setCheckNum(false)
    }
    setCheck0(true)
  }
  const handleChoose1 = (e) => {
    if (data[parseInt(change)].answer === 1) {
      successToast("Câu trả lời đúng 🥳")
      setCk(true)
      if (checkNum === true) {
        dispatch(addCorrect())
      }
    }
    else {
      errorToast("Sai mất rồi bạn eyy 🤡")
      setCheckNum(false)
    }
    setCheck1(true)
  }
  const handleChoose2 = (e) => {
    if (data[parseInt(change)].answer === 2) {
      successToast("Câu trả lời đúng 🥳")
      setCk(true)
      if (checkNum === true) {
        dispatch(addCorrect())
      }
    }
    else {
      errorToast("Sai mất rồi bạn eyy 🤡")
      setCheckNum(false)
    }
    setCheck2(true)
  }
  const handleChoose3 = (e) => {
    if (data[parseInt(change)].answer === 3) {
      successToast("Câu trả lời đúng 🥳")
      setCk(true)
      if (checkNum === true) {
        dispatch(addCorrect())
      }
    }
    else {
      errorToast("Sai mất rồi bạn eyy 🤡")
      setCheckNum(false)
    }
    setCheck3(true)
  }
  const handleKeepDoing = () => {
    setKeep(false)
  }
  const handleMakeNew = () => {
    removeLocalStorage("currentQs")
    dispatch(deleteNum())
    setChange(0)
  }
  return (
    <div className='container' style={{backgroundColor: currentTheme.background, color: currentTheme.textColor, paddingTop: '100px'}}>
      <div className='content'>
      {
      (change > 0 && keep)
      ?
      <div className='option-wrapper'>
        <div className='btn_container'>
          <button style={{borderColor: currentTheme.home_btn_border, backgroundColor: currentTheme.home_btn, color: currentTheme.textColor}} className='btn_keep' onClick={handleKeepDoing}>Tiếp tục</button>
        </div>
        <div className='btn_container'>
          <button style={{borderColor: currentTheme.home_btn_border, backgroundColor: currentTheme.home_btn, color: currentTheme.textColor}} className='btn_keep' onClick={handleMakeNew}>Làm mới</button>
        </div>
      </div>
      :
      (
        (parseInt(change) >= qs.length
        ? 
        (<div className='result_container'>
          <div className='result'>Kết quả: {num} / {qs.length}</div>
        </div>)
        :
        (<div className='ques_container'>
          <div style={{backgroundColor: currentTheme.ques}} className='ques'>Câu {parseInt(change)+1}: {data[parseInt(change)].questionName}</div>
          {
            (data[parseInt(change)].id === '165')
            ?
            <div className='img_container'>
              <img src={p1} alt=""></img>
            </div>
            :
            <></>
          }
          {
            (data[parseInt(change)].id === '278')
            ?
            <div className='img_container'>
              <img src={p2} alt=""></img>
            </div>
            :
            <></>
          }
          {
            (data[parseInt(change)].id === '279')
            ?
            <div className='img_container'>
              <img src={p3} alt=""></img>
            </div>
            :
            <></>
          }
          {
            (data[parseInt(change)].id === '280')
            ?
            <div className='img_container'>
              <img src={p4} alt=""></img>
            </div>            :
            <></>
          }
          <div className='answer_container'>
            <div className='answer_flex'>
              <div className='answer'>
                <button style={{backgroundColor: currentTheme.ans}} className='btn_ans' onClick={handleChoose0} disabled={check0}>
                  <div className='ans'>{data[parseInt(change)].option[0]}</div>
                </button>
              </div>
              <div className='answer'>
                <button style={{backgroundColor: currentTheme.ans}} className='btn_ans' onClick={handleChoose1} disabled={check1}>
                  <div className='ans'>{data[parseInt(change)].option[1]}</div>
                </button>
              </div>
              <div className='answer'>
                <button style={{backgroundColor: currentTheme.ans}} className='btn_ans' onClick={handleChoose2} disabled={check2}>
                  <div className='ans'>{data[parseInt(change)].option[2]}</div>
                </button>
              </div>
              <div className='answer'>
                <button style={{backgroundColor: currentTheme.ans}} className='btn_ans' onClick={handleChoose3} disabled={check3}>
                  <div className='ans'>{data[parseInt(change)].option[3]}</div>
                </button>
              </div>
            </div>
            
          </div>
          {
            (
            ck === true
            ?
            (<div className='btn_container'>
              <button style={{borderColor: currentTheme.home_btn_border, backgroundColor: currentTheme.home_btn, color: currentTheme.textColor}} className='btn_keep' onClick={handleContinue}>Tiếp tục</button>
            </div>)
            :
            (<div className='btn_container'></div>)
          )
          }
          <div className='result_container'>
            <div className='result'>Số câu đúng: {num} / {1 + parseInt(change)}</div>
          </div>
        </div>
        ))
      )
      }
      <div className='btn_back_container'>
        <button style={{borderColor: currentTheme.home_btn_border, color: currentTheme.textColor, backgroundColor: currentTheme.bgr_btn}} className='btn_back' onClick={handleBackHome} >Back to Home</button>
      </div>
      </div>
    </div>
  )
}

export default MMT