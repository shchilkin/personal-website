import React, {useState} from "react";
import {Link} from "react-router-dom";
import SoftUIGenButton from "./SoftUiGenerator_components/SoftUIGenButton";
import SoftUIGenInput from "./SoftUiGenerator_components/SoftUIGenInput";
import Badge from "../../Layout/Badge/Badge.component";
import ColorPickerSketch from "./SoftUiGenerator_components/colorPickerSketch";



function fontColor(red, green, blue) {
    let luminance = ((0.299 * red) + (0.587 * green) + (0.114 * blue))/255;

    if (luminance > 0.5) {
        return "#000"
    } else {
        return "#FFF"
    }
}

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

const SoftUIGenerator = () => {
    const [color, setColor] = useAsyncState({
        Red:204,
        Green: 187,
        Blue: 255,
    })
    const [hexColor, setHexColor] = useAsyncState(
        `${toHex(color.Red, "Red")}${toHex(color.Green, "Green")}${toHex(color.Blue, "Blue")}`);

    const [codeBG, setCodeBG] = useState("#121212")
    const [codeFontColor, setCodeFontColor] = useState('#f0f0f0')

    // True for Hex and False for RGB
    const [colorInputMode, setColorInputMode] = useState(true);

    const [Blur, setBlur] = useState(30);
    const [Radius, setRadius] = useState(12);
    const [shadowLength, setShadowLength] = useState(5);
    const [darkShadowFactor, setDarkShadowFactor] = useState(0.85);
    const [lightShadowFactor, setLightShadowFactor] = useState(1.05);
    const [font, setFont] = useState(fontColor(color.Red, color.Green, color.Blue));

    function hexToRGB(hexColor) {
        if (hexColor.length === 3) {
            let newRGB = {
                Red: parseInt(`${hexColor.slice(0, 1)}${hexColor.slice(0, 1)}`,16),
                Green:parseInt(`${hexColor.slice(1, 2)}${hexColor.slice(1, 2)}`,16),
                Blue:parseInt(`${hexColor.slice(2, 3)}${hexColor.slice(2, 3)}`,16)
            }
            setColor(newRGB)
            return newRGB
        }
        if (hexColor.length === 6){
            let newRGB = {
                Red:parseInt(`${hexColor.slice(0, 2)}`,16),
                Green:parseInt(`${hexColor.slice(2, 4)}`,16),
                Blue:parseInt(`${hexColor.slice(4, 6)}`,16)
            }
            setColor(newRGB)
            return newRGB
        }
    }

    function toHex(colorValue){
        let color
        if (colorValue <= 15) {
            color = `0${Number(colorValue).toString(16).toUpperCase()}`
        } else {
            color = `${Number(colorValue).toString(16).toUpperCase()}`
        }
        return color;
    }

    function rgbToHex() {
            return `${toHex(color.Red)}${toHex(color.Green)}${toHex(color.Blue)}`
    }

    function calculateShadows(Red, Green, Blue) {
        function calculateColor(color, factor){
            let _color = color * factor;
            if(_color > 255) {
                return 255
            }
            else {
                return Math.round(_color)
            }
        }

        return {
            ligherShadowArray: [
                calculateColor(Red, lightShadowFactor),
                calculateColor(Green, lightShadowFactor),
                calculateColor(Blue, lightShadowFactor)
            ],
            darkerShadowArray: [
                calculateColor(Red, darkShadowFactor),
                calculateColor(Green, darkShadowFactor),
                calculateColor(Blue, darkShadowFactor)
            ]

        }

    }

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

    function changeFontColor(font) {
        if (font === '#000' || font ==='#000000'){
            setFont('#FFF')
        } else if (font === '#FFF' || font ==='#FFFFFF'){
            setFont('#000')
        } else setFont(font)
    }

    const shadows = calculateShadows(color.Red, color.Green, color.Blue);
    const lighterShadows = shadows.ligherShadowArray;
    const darkerShadows = shadows.darkerShadowArray;

    const mainColor = `rgb(${color.Red}, ${color.Green}, ${color.Blue})`
    const lighterShadow = `rgb(${lighterShadows[0]}, ${lighterShadows[1]}, ${lighterShadows[2]})`
    const darkerShadow = `rgb(${darkerShadows[0]}, ${darkerShadows[1]}, ${darkerShadows[2]})`

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
    const onChangeColor = (event, hexOrRGBColorName) => {
        function numberRangeCheck(colorValue) {
            if (colorValue > 255) {
                return 255
            } else if (colorValue < 0) {
                return 0
            } else {
                return colorValue
            }
        }
        switch (hexOrRGBColorName) {
            case "Red":
                setColor({...color, Red: numberRangeCheck(event.target.value)})
                    .then((color) => setFont(fontColor(color.Red, color.Green, color.Blue)))
                    .then(rgbToHex).then(hex => setHexColor(hex))
                break
            case "Green":
                setColor({...color, Green: numberRangeCheck(event.target.value)})
                    .then((color) => setFont(fontColor(color.Red, color.Green, color.Blue)))
                    .then(rgbToHex).then(hex => setHexColor(hex))
                break
            case "Blue":
                setColor({...color, Blue: numberRangeCheck(event.target.value)})
                    .then((color) => setFont(fontColor(color.Red, color.Green, color.Blue)))
                    .then(rgbToHex).then(hex => setHexColor(hex))
                break
            case "Hex":
                let hexString = (event.target.value).replace(/#/, '')
                setHexColor(`${hexString}`)
                    .then(color => hexToRGB(color)).then(rgb => {
                        if(rgb) {setFont(fontColor(rgb.Red, rgb.Green, rgb.Blue))}})
                break
        }
    }
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
        Blur:Blur,
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
       boxShadow: `${shadowLength}px ${shadowLength}px ${Blur}px 0 ${darkerShadow},
                   -${shadowLength}px -${shadowLength}px ${Blur}px 0 ${lighterShadow}`,
       border: `1px solid ${mainColor}`,
       borderRadius: `${Radius}px`
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
                    value={hexColor}
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
                    value={color.Red}
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
                    value={color.Green}
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
                    value={color.Blue}
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
                                <path id="LighterShadow" d="M160.24,48.474c0,-20.56 -16.692,-37.251 -37.251,-37.251l-74.502,0c-20.56,0 -37.252,16.691 -37.252,37.251l0,74.502c0,20.56 16.692,37.251 37.252,37.251l74.502,0c20.559,0 37.251,-16.691 37.251,-37.251l0,-74.502Z" style={{fill:`#${toHex(color.Red)}${toHex(color.Green)}${toHex(color.Blue)}`}}/>
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
                                boxShadow: `${shadowLength}px ${shadowLength}px ${Blur}px 0 ${darkerShadow},
                                 -${shadowLength}px -${shadowLength}px ${Blur}px 0 ${lighterShadow}`,
                                border: `1px solid ${mainColor}`,
                                borderRadius: `${Radius}px`}}
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
                                                onClick={(() => changeFontColor(font))}
                                                props={componentProps}
                                                children={"Change font color"}
                                            />
                                        </div>
                                    </div>


                                    {/*<div className={'col-1'}>*/}
                                    {/*    <div style={{width:'36px', height:'36px', backgroundColor:"gray"}}>*/}
                                    {/*        <svg width="33px" height="33px" viewBox="0 0 394 438" version="1.1" style={{fillRule:"evenodd",*/}
                                    {/*            clipRule:'evenodd',*/}
                                    {/*            strokeLinejoin:'round',*/}
                                    {/*            strokeMiterlimit:2*/}
                                    {/*        }}>*/}
                                    {/*            <g><*/}
                                    {/*                path d="M0,426.486c7.608,-21.047 20.438,-53.628 32.594,-70.957c2.656,-3.787 9.647,-13.128 9.647,-13.128l150.712,-180.914l58.308,51.533l-159.588,170.402c0,0 -9.478,9.155 -13.276,12.588c-15.704,14.194 -46.461,30.93 -66.413,41.067l-11.984,-10.591Zm20.467,-20.991c2.062,-5.145 4.503,-11.071 7.192,-17.281l0.316,-0.727c3.176,-7.309 6.687,-14.985 10.322,-22.233l1.155,-2.279c0.676,-1.32 1.355,-2.623 2.036,-3.903l0.804,-1.498c0.894,-1.653 1.791,-3.263 2.688,-4.82c0.269,-0.467 0.538,-0.93 0.806,-1.387l0.269,-0.456c1.381,-2.332 2.76,-4.528 4.124,-6.546l0.27,-0.397c0.402,-0.589 0.804,-1.164 1.205,-1.722l0.609,-0.84l0.641,-0.874c2.893,-3.924 7.63,-10.149 7.63,-10.149l0.161,-0.193c0.592,-0.777 0.954,-1.25 0.954,-1.25l136.536,-162.829l47.844,42.285l-144.816,155.512l-1.123,1.1l-0.171,0.183c0,0 -5.596,5.467 -9.135,8.819l-1.547,1.452c-0.505,0.466 -1.026,0.936 -1.561,1.408l-0.36,0.316c-1.836,1.602 -3.846,3.24 -5.991,4.897l-0.419,0.323c-0.421,0.323 -0.846,0.647 -1.277,0.971c-1.435,1.081 -2.924,2.17 -4.453,3.26c-0.306,0.218 -0.614,0.436 -0.923,0.654c-1.237,0.873 -2.5,1.747 -3.782,2.62l-1.938,1.308l-0.489,0.326c-6.524,4.351 -13.461,8.636 -20.119,12.578c-0.577,0.341 -1.151,0.679 -1.723,1.015c-5.703,3.351 -11.151,6.426 -15.902,9.047l-9.833,-8.69Z" style={{fill: '#ebebeb'}}/>*/}
                                    {/*                <path id="Color" d="M8.231,419.539c1.113,-4.071 6.46,-13.485 7.98,-18.371l0.094,-0.303l0.084,-0.269c1.798,-5.75 3.841,-11.764 6.051,-17.4l0.161,-0.408c0.071,-0.18 0.142,-0.36 0.214,-0.539l0.109,-0.273c0.054,-0.135 0.108,-0.269 0.162,-0.404l0.06,-0.146c0.414,-1.025 0.834,-2.034 1.259,-3.024l0.167,-0.388c0.056,-0.129 0.112,-0.258 0.167,-0.386l0.169,-0.384c0.561,-1.276 1.131,-2.516 1.707,-3.711c0.173,-0.359 0.346,-0.713 0.521,-1.063l0.174,-0.349c0.897,-1.785 1.81,-3.455 2.736,-4.976l0.104,-0.171l0.079,-0.127c0.273,-0.444 0.549,-0.876 0.825,-1.293c0.056,-0.085 0.115,-0.173 0.177,-0.266l0.008,-0.011l0.048,-0.072l0.115,-0.171l0.027,-0.04l0.012,-0.017l0.034,-0.051c0.129,-0.19 0.267,-0.392 0.412,-0.602l0.034,-0.049c2.009,-2.925 5.328,-7.546 5.328,-7.546l0.116,-0.141c0.414,-0.576 0.668,-0.927 0.668,-0.927l97.915,-119.13l47.844,42.284l-106.194,111.814c-0.093,0.086 -0.186,0.172 -0.28,0.259l-0.559,0.518l-0.125,0.132c0,0 -4.178,3.861 -6.833,6.215l-0.045,0.039c-0.191,0.17 -0.375,0.332 -0.548,0.483l-0.045,0.04l-0.016,0.014l-0.036,0.032l-0.156,0.135l-0.065,0.057l-0.011,0.009c-0.084,0.073 -0.165,0.142 -0.242,0.208c-0.38,0.326 -0.774,0.652 -1.181,0.978l-0.117,0.094l-0.157,0.124c-1.396,1.106 -2.942,2.217 -4.602,3.327l-0.324,0.216c-0.327,0.216 -0.657,0.432 -0.992,0.647c-1.115,0.719 -2.276,1.437 -3.473,2.151c-0.239,0.142 -0.48,0.285 -0.722,0.428c-0.97,0.569 -1.961,1.137 -2.97,1.7l-0.379,0.211c-0.127,0.071 -0.254,0.141 -0.381,0.211l-0.383,0.21c-0.127,0.07 -0.255,0.14 -0.383,0.21l-0.386,0.21c-5.146,2.791 -10.664,5.471 -15.984,7.898c-0.46,0.21 -0.919,0.418 -1.376,0.624c-4.56,2.057 -12.941,8.65 -16.762,10.221l-9.834,-8.691Z" style={{fill: mainColor}}/>*/}
                                    {/*                <path d="M250.47,75.913l51.434,-58.196c19.182,-21.704 52.375,-23.751 74.078,-4.57c21.703,19.182 23.751,52.375 4.569,74.078l-51.434,58.197l4.131,3.651c10.567,9.339 11.564,25.501 2.225,36.068l-33.844,38.293c-9.339,10.567 -25.501,11.564 -36.068,2.224l-86.909,-76.81c-10.567,-9.339 -11.564,-25.501 -2.224,-36.068l33.843,-38.293c9.339,-10.567 25.501,-11.564 36.068,-2.225l4.131,3.651Z" style={{fill: "#181818"}}/>*/}
                                    {/*            </g>*/}
                                    {/*        </svg>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
                                </div>
                                {colorInputMode ? hexInput : rgbInput}
                                <div className={'row'}>
                                    <div className={'col-md-4'}>
                                        <h6>Blur</h6>
                                        <SoftUIGenInput type={'number'} onChange={onChangeBlur}
                                               value={Blur} placeholder={'30'} props={componentProps} />
                                    </div>
                                    <div className={'col-md-4'}>
                                        <h6>Radius</h6>
                                        <SoftUIGenInput type={'number'}
                                               onChange={onChangeRadius}
                                               value={Radius} placeholder={'12'} props={componentProps} />
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
                                            <span style={{color:'#ed2939'}} >background:</span> <span style={{color:`#${hexColor}`}}>{colorInputMode ? `#${hexColor}` : `rgb(${color.Red}, ${color.Green}, ${color.Blue})`}</span>;<br/>
                                            <span style={{color:'#ed2939'}}>border-radius:</span> {Radius}px;<br/>
                                            <span style={{color:'#ed2939'}}>box-shadow:</span> {shadowLength}px {shadowLength}px {Blur}px 0
                                            {" "}<span style={{color:darkerShadow}}>
                                                {colorInputMode ?
                                                    `#${toHex(darkerShadows[0])}${toHex(darkerShadows[1])}${toHex(darkerShadows[2])}`
                                                    :
                                                    `rgb(${darkerShadows[0]}, ${darkerShadows[1]}, ${darkerShadows[2]})` }</span>,
                                            <br/>
                                            {"            "}-{shadowLength}px -{shadowLength}px {Blur}px 0
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