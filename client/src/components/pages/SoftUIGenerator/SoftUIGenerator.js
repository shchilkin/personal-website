import React, {useContext, useState} from "react";
import {Link} from "react-router-dom";
import SoftUIGenButton from "./SoftUiGenerator_components/SoftUIGenButton";
import SoftUIGenInput from "./SoftUiGenerator_components/SoftUIGenInput";
import Badge from "../../Layout/Badge/Badge.component";
import ColorPickerSketch from "./SoftUiGenerator_components/colorPickerSketch";
import ThemeContext from "../../../contexts/theme/ThemeContext";
import { toHex } from "./Functions.SoftUIGenerator";


function useAsyncState(initialValue) {
    // https://sung.codes/blog/2018/12/07/setting-react-hooks-states-in-a-sync-like-manner/
    const [value, setValue] = useState(initialValue);
    const setter = x =>
        new Promise(resolve => {
            setValue(x);
            resolve(x);
        });
    return [value, setter];
}

//rgb 0 9 62 night sky color
// 1 161 255 rgb blue

const SoftUIGenerator = () => {
    const themeContext =  useContext(ThemeContext);
    const {
        font,
        colorRGB, colorHEX,
        shadows,
        shadowBlur, shadowLength,
        borderRadius: borderRadius,
        darkShadowFactor, lightShadowFactor,
        changeColor
    } = themeContext;

    const lighterShadows = shadows.ligherShadowArray;
    const darkerShadows = shadows.darkerShadowArray;

    // TODO remove useState hooks hence all data is in state now
    const [Blur, setBlur] = useState(shadowBlur);
    const [color, setColor] = useAsyncState(colorRGB);
    const [Radius, setRadius] = useState(borderRadius);
    const [_shadowLength, setShadowLength] = useState(shadowLength);
    const [_darkShadowFactor, setDarkShadowFactor] = useState(darkShadowFactor);
    const [_lightShadowFactor, setLightShadowFactor] = useState(lightShadowFactor);

    // Taken from theme Context
    const mainColor = `rgb(${colorRGB.Red}, ${colorRGB.Green}, ${colorRGB.Blue})`
    const lighterShadow = `rgb(${lighterShadows[0]}, ${lighterShadows[1]}, ${lighterShadows[2]})`
    const darkerShadow = `rgb(${darkerShadows[0]}, ${darkerShadows[1]}, ${darkerShadows[2]})`



    const [codeBG, setCodeBG] = useState("#121212")
    const [codeFontColor, setCodeFontColor] = useState('#f0f0f0')

    // True for Hex and False for RGB
    const [colorInputMode, setColorInputMode] = useState(true);

    function calculateShadowFactor(number) {
        let factor = number / 100
        if (factor > 2) {
            return 2
        } else if (factor < 0) {
            return 0
        } else {
            return factor
        }
    }

    // function changeFontColor(font) {
    //     if (font === '#000' || font ==='#000000'){
    //         setFont('#FFF')
    //     } else if (font === '#FFF' || font ==='#FFFFFF'){
    //         setFont('#000')
    //     } else setFont(font)
    // }



    const onChangeBlur = (event) => {
        if (event.target.value > 300) {
            setBlur(300)
        } else if (event.target.value < 0) {
            setBlur(0)
        } else {
            setBlur(event.target.value)
        }
    };
    const onChangeRadius = (event) => {
        if (event.target.value > 200) {
            setRadius(200)
        } else if (event.target.value < 0) {
            setRadius(0)
        } else {
            setRadius(event.target.value)
        }
    };
    const onChangeColor = (event, hexOrRGBColorName) => changeColor(hexOrRGBColorName, event.target.value);
    const onChangeShadowLength = (event) => {
        if (event.target.value > 150) {
            setShadowLength(150)
        } else if (event.target.value < 0) {
            setShadowLength(0)
        } else {
            setShadowLength(event.target.value)
        }
    };
    const onChangeLightShadowFactor = (event) => {
        setLightShadowFactor(calculateShadowFactor(event.target.value))
    };
    const onChangeDarkShadowFactor = (event) => {
        setDarkShadowFactor(calculateShadowFactor(event.target.value))
    };

    const componentProps = {
        mainColor:mainColor,
        font:font,
        Blur:shadowBlur,
        shadowLength:shadowLength,
        darkerShadow:darkerShadow,
        lighterShadow:lighterShadow
    }

    const containerStyle = {
       width:'100%',
       height:'300px',
       minHeight:'100px',
       backgroundColor: mainColor,
       color: font,
       mixBlendMode: 'normal',
       boxShadow: `${shadowLength}px ${shadowLength}px ${shadowBlur}px 0 ${darkerShadow},
                   -${shadowLength}px -${shadowLength}px ${shadowBlur}px 0 ${lighterShadow}`,
       border: `1px solid ${mainColor}`,
       borderRadius: `${borderRadius}px`
    }

    const hexInput = (
        <div className={'row pt-1'}>
            <div className={'col-12'}>
                <h6>
                    <Badge style={{backgroundColor:darkerShadow}}>#
                        <span style={{color:'#ed2939', fontWeight:'bold'}}>FF</span>
                        <span style={{color:'#0B6623', fontWeight:'bold'}}>FF</span>
                        <span style={{color:'#0f52Ba', fontWeight:'bold'}}>FF</span>
                    </Badge>
                </h6>
                <SoftUIGenInput
                    onChange={event => onChangeColor(event, 'Hex')}
                    value={colorHEX}
                    placeholder={'#000000'}
                    props={componentProps}
                />
            </div>
        </div>
    )

    const rgbInput = (
        <div className={'row pt-1'}>
            <div className={'col-4'}>
                <h6>
                    <Badge style={{backgroundColor:darkerShadow}}>
                        <span style={{color:'#ed2939'}}>Red</span>
                    </Badge>
                </h6>
                <SoftUIGenInput
                    type={'number'}
                    onChange={event => onChangeColor(event,"Red")}
                    value={colorRGB.Red}
                    placeholder={255}
                    props={componentProps}
                />
            </div>
            <div className={'col-4'}>
                <h6>
                    <Badge style={{backgroundColor:darkerShadow}}>
                        <span style={{color:'#0B6623'}}>Green</span>
                    </Badge>
                </h6>
                <SoftUIGenInput
                    type={'number'}
                    onChange={event => onChangeColor(event,"Green")}
                    value={colorRGB.Green}
                    placeholder={255}
                    props={componentProps}
                />
            </div>
            <div className={'col-4'}>
                <h6>
                    <Badge style={{backgroundColor:darkerShadow}}>
                        <span style={{color:'#0f52Ba'}}>Blue</span>
                    </Badge>
                </h6>
                <SoftUIGenInput
                    type={'number'}
                    onChange={event => onChangeColor(event,"Blue")}
                    value={colorRGB.Blue}
                    placeholder={255}
                    props={componentProps}
                />
            </div>
        </div>
    )

    return(
        <div className={"page"}>
            <div className={'container-fluid pb-5'} style={{minHeight:'100vh',backgroundColor:mainColor, color:font}}>
                <div className={'container pt-3'}>
                    <Link to='/' style={{color:'#ed2939'}}>
                        Back to the homepage
                    </Link>
                    <h3>
                        <span style={{verticalAlign:'10%'}}>
                            <svg width="32px" height="32px" viewBox="0 0 172 172" version="1.1" style={{fillRule:'evenodd', clipRuleule:'evenodd', strokeLinejoin:'round',strokeMiterlimit:2}}>
                                <path id="DarkerShadow" d="M171.505,59.751c0,-20.559 -16.692,-37.251 -37.251,-37.251l-74.503,0c-20.559,0 -37.251,16.692 -37.251,37.251l0,74.503c0,20.559 16.692,37.251 37.251,37.251l74.503,0c20.559,0 37.251,-16.692 37.251,-37.251l0,-74.503Z" style={{fill: `#${toHex(darkerShadows[0])}${toHex(darkerShadows[1])}${toHex(darkerShadows[2])}`}}/>
                                <path id="Main" d="M149.005,37.251c0,-20.559 -16.692,-37.251 -37.251,-37.251l-74.503,0c-20.559,0 -37.251,16.692 -37.251,37.251l0,74.503c0,20.559 16.692,37.251 37.251,37.251l74.503,0c20.559,0 37.251,-16.692 37.251,-37.251l0,-74.503Z"  style={{fill: `#${toHex(lighterShadows[0])}${toHex(lighterShadows[1])}${toHex(lighterShadows[2])}`}} />
                                <path id="LighterShadow" d="M160.24,48.474c0,-20.56 -16.692,-37.251 -37.251,-37.251l-74.502,0c-20.56,0 -37.252,16.691 -37.252,37.251l0,74.502c0,20.56 16.692,37.251 37.252,37.251l74.502,0c20.559,0 37.251,-16.691 37.251,-37.251l0,-74.502Z" style={{fill:`#${toHex(colorRGB.Red)}${toHex(colorRGB.Green)}${toHex(colorRGB.Blue)}`}}/>
                            </svg>
                        </span>
                        {" "}
                        Soft-UI generator
                    </h3>
                    <div className='row mt-4 mb-4' style={{marginRight:'0px', marginLeft:'0px'}}>
                        <div className={'col-md-6 mb-5'}>
                            <div className={'row mb-3'}>
                                <div className={'col-12'}>
                                    <div
                                        className={'align-self-center'}
                                        style={containerStyle}
                                    />
                                </div>
                            </div>
                            {/*Button showcase*/}
                            <div className={'row'}>
                                <div className={'col-12'}><h6 style={{fontWeight:'bold'}}>Button</h6>
                                    <div className={'row'}>
                                        <div className={'col-md-4 mb-3'}>
                                            <SoftUIGenButton
                                                props={componentProps}
                                                state={'initial'}
                                                children={'Button'}
                                            />
                                        </div>
                                        <div className={'col-md-4 mb-3'}>
                                            <SoftUIGenButton
                                                state={'active'}
                                                props={componentProps}
                                                children={'Active'}/>
                                        </div>
                                        <div className={'col-md-4 mb-3'}>
                                            <SoftUIGenButton
                                                state={'hover'}
                                                props={componentProps}
                                                children={'hover'}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Input showcase*/}
                            <div className={'row'}>
                                <div className={'col-12'}>
                                    <h6 style={{fontWeight:'bold'}}>Input</h6>
                                    <div className={'row'}>
                                        <div className={'col-md-6 mb-3'}>
                                            <SoftUIGenInput
                                                props={componentProps}
                                                state={'blur'}
                                                placeholder={'Input on Blur'}/>
                                        </div>
                                        <div className={'col-md-6 mb-3'}>
                                            <SoftUIGenInput
                                                props={componentProps}
                                                state={'focus'}
                                                placeholder={'Input on Focus'}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'col-md-6'}>
                            <div style={{
                                minHeight:'100px',
                                backgroundColor: mainColor,
                                color: font,
                                mixBlendMode: 'normal',
                                boxShadow: `${shadowLength}px ${shadowLength}px ${shadowBlur}px 0 ${darkerShadow},
                                 -${shadowLength}px -${shadowLength}px ${shadowBlur}px 0 ${lighterShadow}`,
                                border: `1px solid ${mainColor}`,
                                borderRadius: `${borderRadius}px`}}
                                className={'pt-3 pb-3 pl-3 pr-3'}>
                                <div className={'row'}>
                                    <div className={'col-6 mr-3'}>
                                        <h5>Pick a color:</h5>
                                    </div>
                                </div>
                                <div className={'row mb-2'}>
                                    <div className={'col-12'}>
                                        <ColorPickerSketch/>
                                        <div className={'ml-3'} style={{width:'30%', display:'inline-block'}}>
                                        <SoftUIGenButton
                                            props={componentProps}
                                            children={colorInputMode ? 'Hex' : 'RGB'}
                                            onClick={() => setColorInputMode(!colorInputMode)}
                                        />
                                        </div>
                                        <div  className={'ml-3'} style={{width:'45%', display:'inline-block'}}>
                                            <SoftUIGenButton
                                                props={componentProps}
                                                children={"Change font color"}
                                            />
                                        </div>
                                    </div>
                                </div>
                                {colorInputMode ? hexInput : rgbInput}
                                <div className={'row'}>
                                    <div className={'col-md-4'}>
                                        <h6>Blur</h6>
                                        <SoftUIGenInput type={'number'} onChange={onChangeBlur}
                                               value={shadowBlur} placeholder={'30'} props={componentProps} />
                                    </div>
                                    <div className={'col-md-4'}>
                                        <h6>Radius</h6>
                                        <SoftUIGenInput type={'number'}
                                               onChange={onChangeRadius}
                                               value={borderRadius} placeholder={'12'} props={componentProps} />
                                    </div>
                                    <div className={'col-md-4'}>
                                        <h6>Shadow Length</h6>
                                        <SoftUIGenInput type={'number'}
                                               onChange={onChangeShadowLength}
                                               value={shadowLength} placeholder={'5px'} props={componentProps} />
                                    </div>
                                    <div className={'col-md-6'}>
                                        <h6>Dark Shadow</h6>
                                        <SoftUIGenInput type={'number'}
                                                    onChange={onChangeDarkShadowFactor} value={Math.round(darkShadowFactor*100)}
                                                        placeholder={'Radius'} props={componentProps} />
                                    </div>
                                    <div className={'col-md-6'}>
                                        <h6>Light Shadow</h6>
                                        <SoftUIGenInput type={'number'}
                                               onChange={onChangeLightShadowFactor}
                                               value={Math.round(lightShadowFactor*100)}
                                               placeholder={'Radius'} props={componentProps}/>
                                    </div>
                                </div>
                                <div>
                                    <pre className={'pt-3 pb-3 pr-1 pl-3'} style={{backgroundColor:codeBG, borderRadius:'12px',boxShadow:`${codeBG} 2px 2px 10px 0px inset, ${codeBG} -2px -2px 10px 0px inset`}}>
                                        <code style={{fontSize:'10px',color:codeFontColor}}>
                                            <span style={{color:'#ed2939'}} >background:</span> <span style={{color:`rgb(${colorRGB.Red}, ${colorRGB.Green}, ${colorRGB.Blue})`}}>{colorInputMode ? `#${colorHEX}` : `rgb(${colorRGB.Red}, ${colorRGB.Green}, ${colorRGB.Blue})`}</span>;<br/>
                                            <span style={{color:'#ed2939'}}>border-radius:</span> {borderRadius}px;<br/>
                                            <span style={{color:'#ed2939'}}>box-shadow:</span> {shadowLength}px {shadowLength}px {shadowBlur}px 0
                                            {" "}<span style={{color:darkerShadow}}>
                                                {colorInputMode ?
                                                    `#${toHex(darkerShadows[0])}${toHex(darkerShadows[1])}${toHex(darkerShadows[2])}`
                                                    :
                                                    `rgb(${darkerShadows[0]}, ${darkerShadows[1]}, ${darkerShadows[2]})` }</span>,
                                            <br/>
                                            {"            "}-{shadowLength}px -{shadowLength}px {shadowBlur}px 0
                                            {" "}<span style={{color:lighterShadow}}>
                                                {colorInputMode ?
                                                    `#${toHex(lighterShadows[0])}${toHex(lighterShadows[1])}${toHex(lighterShadows[2])}`
                                                    :
                                                    `rgb(${lighterShadows[0]}, ${lighterShadows[1]}, ${lighterShadows[2]})` }
                                            </span>;
                                        </code>
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default SoftUIGenerator;