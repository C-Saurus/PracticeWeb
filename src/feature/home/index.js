import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeTheme } from '../../store/action';
import './index.css'
import '../../utils/responsive/index.css'
const Home = () => {
    const current = useSelector(state => state)
    const check = current.isCheck
    const currentTheme = current.currentTheme
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleChangeTheme = () => {
        dispatch(changeTheme())
    }
    const handleChangeMMT = () => {
        navigate('/mmt')
    }
    return (
        <div className='container' style={{backgroundColor: currentTheme.background, color: currentTheme.textColor}}>
            <div className='content'>
                <div className='logo_title'>
                    <div className='logoPro'></div>
                    <div className='title'>QuaMôn.ProPTIT</div>
                </div>
                <div className='btn-wrapper'>
                    <div className='btn_mmt_container'>
                        <button style={{borderColor: currentTheme.home_btn_border, backgroundColor: currentTheme.home_btn, color: currentTheme.textColor}} className='btn_mmt btn_slide' onClick={handleChangeMMT}>Mạng Máy Tính</button>
                    </div>
                    {/* <div className='btn_mmt_container'>
                        <button style={{borderColor: currentTheme.home_btn_border, backgroundColor: currentTheme.home_btn, color: currentTheme.textColor}} className='btn_mmt btn_slide' onClick={handleChangeMMT}>Mạng Máy Tính</button>
                    </div>
                    <div className='btn_mmt_container'>
                        <button style={{borderColor: currentTheme.home_btn_border, backgroundColor: currentTheme.home_btn, color: currentTheme.textColor}} className='btn_mmt btn_slide' onClick={handleChangeMMT}>Mạng Máy Tính</button>
                    </div> */}
                </div>
                <div className='toggle_container'>
                    <input type="checkbox" onChange={handleChangeTheme} id="toggle_checkbox" checked={check}></input>
                    <label className='label1' htmlFor="toggle_checkbox">
                    <div id="star">
                        <div className="star" id="star-1">★</div>
                        <div className="star" id="star-2">★</div>
                    </div>
                    <div id="moon"></div>
                    </label>
                    <div className='msg'>From D20 ProPTIT with love 🥰</div>
                </div>
            </div>
        </div>
    )
}

export default Home