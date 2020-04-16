import React, {useState} from "react";
import {Link} from "react-router-dom";
import Input from "../../Layout/Inputs/Input.component";


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
    const [Red, setRed] = useAsyncState(204);
    const [Green, setGreen] = useAsyncState(187);
    const [Blue, setBlue] = useAsyncState(255);

    const [codeBG, setCodeBB] = useState("#121212")
    const [codeFontColor, setCodeFontColor] = useState('#f0f0f0')

    const [buttonActive, setButtonActive] = useState(false);
    const [buttonHover, setButtonHover] = useState(false);
    const [hexOrRGBmode, setHexOrRGBmode] = useState(true);

    const [darkFactor, setDarkFactor] = useState(0.85);
    const [lightFactor, setLightFactor] = useState(1.05);

    const [Blur, setBlur] = useState(30);
    const [Radius, setRadius] = useState(12);
    const [shadowLength, setShadowLength] = useState(5);

    const font = fontColor(Red, Green, Blue)

    function hexToRGB(color) {
        if (color.length === 3) {
            setRed(parseInt(`${color.slice(0, 1)}${color.slice(0, 1)}`,16))
            setGreen(parseInt(`${color.slice(1, 2)}${color.slice(1, 2)}`,16))
            setBlue(parseInt(`${color.slice(2, 3)}${color.slice(2, 3)}`,16))
        }
        if (color.length === 6){
            setRed(parseInt(`${color.slice(0, 2)}`,16))
            setGreen(parseInt(`${color.slice(2, 4)}`,16))
            setBlue(parseInt(`${color.slice(4, 6)}`,16))
        }
    }

    // TODO RGBtoHex function after refactor (function toHex)
    function toHex(colorValue){
        let color
        if (colorValue <= 15) {
            color = `0${Number(colorValue).toString(16).toUpperCase()}`
        } else {
            color = `${Number(colorValue).toString(16).toUpperCase()}`
        }
        return color;
    }
    function rgbToHex(colorValue, colorName) {
        switch (colorName) {
            case 'Red':
                    return `${toHex(Red)}${toHex(Green)}${toHex(Blue)}`
            case 'Green':
                    return `${toHex(Red)}${toHex(Green)}${toHex(Blue)}`
            case 'Blue':
                    return `${toHex(Red)}${toHex(Green)}${toHex(Blue)}`
            default:
                return `${toHex(Red)}${toHex(Green)}${toHex(Blue)}`
        }
    }

    // TODO get hex value from RGB conversion
    const [hexColor, setHexColor] = useAsyncState(
        `${rgbToHex(Red,"Red")}`
    );

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
                calculateColor(Red, lightFactor),
                calculateColor(Green, lightFactor),
                calculateColor(Blue, lightFactor)
            ],
            darkerShadowArray: [
                calculateColor(Red, darkFactor),
                calculateColor(Green, darkFactor),
                calculateColor(Blue, darkFactor)
            ]

        }

    }

    function calculateFactor(number) {
        let factor = number / 100
        if (factor > 2) {
            return 2
        } else if (factor < 0) {
            return 0
        } else {
            return factor
        }
    }

    const shadows = calculateShadows(Red, Green, Blue);
    const lighterShadows = shadows.ligherShadowArray;
    const darkerShadows = shadows.darkerShadowArray;

    const mainColor = `rgb(${Red}, ${Green}, ${Blue})`
    const lighterShadow = `rgb(${lighterShadows[0]}, ${lighterShadows[1]}, ${lighterShadows[2]})`
    const darkerShadow = `rgb(${darkerShadows[0]}, ${darkerShadows[1]}, ${darkerShadows[2]})`

    // TODO Refactor to one function onChangeColor
    const onChangeRed = (event) => {
        // TODO improve code (to many repeats)
        if (fontColor(Red, Green, Blue) === "#000"){
            setCodeBB('#121212')
            setCodeFontColor('#f0f0f0')
        }

        if (fontColor(Red, Green, Blue) === "#FFF"){
            setCodeBB('#F0F0F0')
            setCodeFontColor('#121212')
        }

        // TODO Refactor to function which returns red value
        if (event.target.value > 255) {
            setRed(255).then(color => setHexColor(rgbToHex(color, "Red")))

        } else if (event.target.value < 0) {
            setRed(0).then(color => setHexColor(rgbToHex(color, "Red")))
        } else {
            console.log(rgbToHex(hexColor, event.target.value, "Red"))
            setRed(event.target.value).then(color => setHexColor(rgbToHex(color, "Red")))
        }
    };
    const onChangeGreen = (event) => {
        // TODO improve code (to many repeats)
        if (fontColor(Red, Green, Blue) === "#000"){
            setCodeBB('#121212')
            setCodeFontColor('#f0f0f0')
        }

        if (fontColor(Red, Green, Blue) === "#FFF"){
            setCodeBB('#CCCCCC')
            setCodeFontColor('#121212')
        }
        // TODO Refactor to function which returns green value
        if (event.target.value > 255) {
            setGreen(255).then(color => setHexColor(rgbToHex(color, "Green")))
        } else if (event.target.value < 0) {
            setGreen(0).then(color => setHexColor(rgbToHex( color, "Green")))
        } else {
            setGreen(event.target.value).then(color => setHexColor(rgbToHex(color, "Green")))
        }
    };
    const onChangeBlue = (event) => {
        // TODO improve code (to many repeats)
        if (fontColor(Red, Green, Blue) === "#000"){
            setCodeBB('#121212')
            setCodeFontColor('#f0f0f0')
        }

        if (fontColor(Red, Green, Blue) === "#FFF"){
            setCodeBB('#CCCCCC')
            setCodeFontColor('#121212')
        }

        // TODO Refactor to function which returns blue value
        if (event.target.value > 255) {
            setBlue(255).then(color => setHexColor(rgbToHex(color, "Blue")))
        } else if (event.target.value < 0) {
            setBlue(0).then(color => setHexColor(rgbToHex(color, "Blue")))
        } else {
            setBlue(event.target.value).then(color => setHexColor(rgbToHex(color, "Blue")))
        }
    };

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
    const onChangeShadowLength = (event) => {
        if (event.target.value > 150) {
            setShadowLength(150)
        } else if (event.target.value < 0) {
            setShadowLength(0)
        } else {
            setShadowLength(event.target.value)
        }
    };
    const onChangeColor = (event) => {
        // TODO improve code (to many repeats)
        if (fontColor(Red, Green, Blue) === "#000"){
            setCodeBB('#121212')
            setCodeFontColor('#f0f0f0')
        }

        if (fontColor(Red, Green, Blue) === "#FFF"){
            setCodeBB('#CCCCCC')
            setCodeFontColor('#121212')
        }

        setHexColor(event.target.value).then(value => {
            if (value.indexOf("#") !== -1 ){
                const hexColorWithoutHash = value.replace(/#/,'')
                setHexColor(`${hexColorWithoutHash}`).then(color => hexToRGB(color))
            } else {
                setHexColor(`${value}`).then(color => hexToRGB(color))
            }
        })
    };
    const onChangeLightFactor = (event) => {
        setLightFactor(calculateFactor(event.target.value))
    };
    const onChangeDarkFactor = (event) => {
        setDarkFactor(calculateFactor(event.target.value))
    };

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

    const inputStyle = {
       default: {
           borderColor: mainColor,
           backgroundColor: mainColor,
           color: font,
           boxShadow: `inset 2px 2px 10px 0 ${darkerShadow}, inset -2px -2px 10px 0 ${lighterShadow}`
       },
        active: {
            borderColor: mainColor,
            backgroundColor: mainColor,
            color: font,
            boxShadow: `2px 2px 10px 0 ${darkerShadow}, -2px -2px 10px 0 ${lighterShadow}`
        }
    }

    const buttonStyle = {
       default:{
           width: "100%",
           backgroundColor:mainColor,
           transition: 'background-color .5s, color .5s',
           border:`1px solid ${mainColor}`,
           color:font,
           boxShadow: `${shadowLength}px ${shadowLength}px ${Blur}px 0 ${darkerShadow},
                   -${shadowLength}px -${shadowLength}px ${Blur}px 0 ${lighterShadow}`,
           borderRadius: '12px',
           padding: '.375rem .75rem',
       },
       active:{
           width: "100%",
           backgroundColor:mainColor,
           transition: 'background-color .5s, color .5s',
           border:`1px solid ${mainColor}`,
           color:font,
           boxShadow: `inset ${shadowLength}px ${shadowLength}px ${Blur}px 0 ${darkerShadow},
                   inset -${shadowLength}px -${shadowLength}px ${Blur}px 0 ${lighterShadow}`,
           borderRadius: '12px',
           padding: '.375rem .75rem',
       },
       hover:{
           width: "100%",
           border:`1px solid ${mainColor}`,
           transition: 'background-color .5s, color .5s',
           borderRadius: '12px',
           padding: '.375rem .75rem',
           backgroundColor:font,
           color:mainColor
        }
    }

    function setButtonStyle() {
       if (buttonActive){
           return buttonStyle.active
       } else if (buttonHover) {
           return buttonStyle.hover
       } else return buttonStyle.default
    }

    const hexInput = (
        <div className={'row pt-1'}>
            <div className={'col-12'}>
                <h6>#
                    <span style={{color:'#ed2939', fontWeight:'bold'}}>FF</span>
                    <span style={{color:'#0B6623', fontWeight:'bold'}}>FF</span>
                    <span style={{color:'#0f52Ba', fontWeight:'bold'}}>FF</span></h6>
                <Input type={'text'}
                       onChange={onChangeColor}
                       value={hexColor}
                       placeholder={'#000000'}
                       style={inputStyle.default} />
            </div>
        </div>
    )

    const rgbInput = (
        <div className={'row'}>
            <div className={'col-4'}>
                <h6 style={{color:'#ed2939', fontWeight:'bold'}}>Red</h6>
                <Input type={'number'}
                       onChange={onChangeRed}
                       value={Red}
                       placeholder={Red}
                       style={inputStyle.default}/>
            </div>
            <div className={'col-4'}>
                <h6 style={{color:'#0B6623', fontWeight:'bold'}}>Green</h6>
                <Input type={'number'}
                       onChange={onChangeGreen}
                       value={Green}
                       placeholder={Green}
                       style={inputStyle.default} />
            </div>
            <div className={'col-4'}>
                <h6 style={{color:'#0f52Ba', fontWeight:'bold'}} >Blue</h6>
                <Input type={'number'}
                       onChange={onChangeBlue}
                       value={Blue}
                       placeholder={Blue}
                       style={inputStyle.default} />
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
                                <path id="LighterShadow" d="M160.24,48.474c0,-20.56 -16.692,-37.251 -37.251,-37.251l-74.502,0c-20.56,0 -37.252,16.691 -37.252,37.251l0,74.502c0,20.56 16.692,37.251 37.252,37.251l74.502,0c20.559,0 37.251,-16.691 37.251,-37.251l0,-74.502Z" style={{fill:`#${toHex(Red)}${toHex(Green)}${toHex(Blue)}`}}/>
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
                            <div className={'row'}>
                                <div className={'col-12'}><h6>Button</h6>
                                    <div className={'row'}>
                                        <div className={'col-md-4 mb-3'}>
                                            <button style={buttonStyle.default}>Button</button>
                                        </div>
                                        <div className={'col-md-4 mb-3'}>
                                            <button style={buttonStyle.active}>Active</button>
                                        </div>
                                        <div className={'col-md-4 mb-3'}>
                                            <button style={buttonStyle.hover}>Hover</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={'row'}>
                                <div className={'col-12'}>
                                    <h6>Input</h6>
                                    <div className={'row'}>
                                        <div className={'col-md-6 mb-3'}>
                                            <Input  style={inputStyle.default} placeholder={'Input field'}/>
                                        </div>
                                        <div className={'col-md-6 mb-3'}>
                                            <Input style={inputStyle.active} placeholder={'Active'}/>
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
                                <div className={'row mb-2'}>
                                    <div className={'col-6'}>
                                        <button
                                            onMouseDown={() => setButtonActive(true)}
                                            onMouseUp={() => setButtonActive(false)}
                                            onMouseEnter={() => setButtonHover(true)}
                                            onMouseLeave={() => setButtonHover(false)}
                                            style={setButtonStyle()}
                                            onClick={() => setHexOrRGBmode(!hexOrRGBmode)}
                                            >{hexOrRGBmode ? 'Hexadecimal' : 'RGB'}</button>
                                    </div>
                                    <div className={'col-6'}>
                                        <button
                                            onMouseDown={() => setButtonActive(true)}
                                            onMouseUp={() => setButtonActive(false)}
                                            onMouseEnter={() => setButtonHover(true)}
                                            onMouseLeave={() => setButtonHover(false)}
                                            style={setButtonStyle()}
                                        >{hexOrRGBmode ? 'Hexadecimal' : 'RGB'}</button>
                                    </div>
                                </div>
                                {hexOrRGBmode ? hexInput : rgbInput}
                                <div className={'row'}>
                                    <div className={'col-md-4'}>
                                        <h6>Blur</h6>
                                        <Input type={'number'} onChange={onChangeBlur}
                                               value={Blur}
                                               placeholder={'30'}
                                               style={inputStyle.default} />
                                    </div>
                                    <div className={'col-md-4'}>
                                        <h6>Radius</h6>
                                        <Input type={'number'}
                                               onChange={onChangeRadius}
                                               value={Radius}
                                               placeholder={'12'}
                                               style={inputStyle.default} />
                                    </div>
                                    <div className={'col-md-4'}>
                                        <h6>Shadow Length</h6>
                                        <Input type={'number'}
                                               onChange={onChangeShadowLength}
                                               value={shadowLength}
                                               placeholder={'5px'}
                                               style={inputStyle.default} />
                                    </div>
                                    <div className={'col-md-6'}>
                                        <h6>Dark Shadow</h6>
                                        <Input type={'number'}
                                               onChange={onChangeDarkFactor}
                                               value={Math.round(darkFactor*100)}
                                               placeholder={'Radius'}
                                               style={inputStyle.default} />
                                    </div>
                                    <div className={'col-md-6'}>
                                        <h6>Light Shadow</h6>
                                        <Input type={'number'}
                                               onChange={onChangeLightFactor}
                                               value={Math.round(lightFactor*100)}
                                               placeholder={'Radius'}
                                               style={inputStyle.default} />
                                    </div>
                                </div>
                                <div>
                                    <pre className={'pt-3 pb-3 pr-1 pl-3'} style={{backgroundColor:codeBG,borderRadius:'12px',boxShadow:'black 2px 2px 10px 0px inset, black -2px -2px 10px 0px inset'}}>
                                        <code style={{fontSize:'10px',color:codeFontColor}}>
                                            <span style={{color:'#ed2939'}} >background:</span> <span style={{color:`#${hexColor}`}}>{hexOrRGBmode ? `#${hexColor}` : `rgb(${Red}, ${Green}, ${Blue})`}</span>;<br/>
                                            <span style={{color:'#ed2939'}}>border-radius:</span> {Radius}px;<br/>
                                            <span style={{color:'#ed2939'}}>box-shadow:</span> {shadowLength}px {shadowLength}px {Blur}px 0
                                            {" "}<span style={{color:darkerShadow}}>
                                                {hexOrRGBmode ?
                                                    `#${toHex(darkerShadows[0])}${toHex(darkerShadows[1])}${toHex(darkerShadows[2])}`
                                                    :
                                                    `rgb(${darkerShadows[0]}, ${darkerShadows[1]}, ${darkerShadows[2]})` }</span>,
                                            <br/>
                                            {"            "}-{shadowLength}px -{shadowLength}px {Blur}px 0
                                            {" "}<span style={{color:lighterShadow}}>
                                                {hexOrRGBmode ?
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