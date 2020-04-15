import React, {useState} from "react";
import {Link} from "react-router-dom";
import Badge from "../../Layout/Badge/Badge.component";
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
    const [hexColor, setHexColor] = useAsyncState("ED2939");
    const [darkFactor, setDarkFactor] = useState(0.85);
    const [lightFactor, setLightFactor] = useState(1.15);

    const [Red, setRed] = useAsyncState(205);
    const [Green, setGreen] = useAsyncState(237);
    const [Blue, setBlue] = useAsyncState(206);

    const [Blur, setBlur] = useState(30);
    const [Radius, setRadius] = useState(12);

    const font = fontColor(Red, Green, Blue)

    // console.log('int, hex string', parseInt('ED2939',16))

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
    function rgbToHex(hexColor, colorValue, colorName) {
        switch (colorName) {
            case 'Red':
            case 'red':
                let hexRed = Number(colorValue).toString(16);
                if (Number(colorValue) <= 15)
                    return `0${hexRed.toUpperCase()}${hexColor.slice(2,6)}`
                 else
                    return `${hexRed.toUpperCase()}${hexColor.slice(2,6)}`
            case 'Green':
            case 'green':
                let hexGreen = Number(colorValue).toString(16);
                if (Number(colorValue) <= 15)
                    return `${hexColor.slice(0,2)}0${hexGreen.toUpperCase()}${hexColor.slice(4,6)}`
                else
                    return `${hexColor.slice(0,2)}${hexGreen.toUpperCase()}${hexColor.slice(4,6)}`
            case 'Blue':
            case 'blue':
                let hexBlue = Number(colorValue).toString(16);
                if (Number(colorValue) <= 15)
                    return `${hexColor.slice(0,4)}0${hexBlue.toUpperCase()}`
                else
                    return `${hexColor.slice(0,4)}${hexBlue.toUpperCase()}`
            default:
                console.log('returned default case')
                return hexColor
        }
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
        // TODO Refactor to function which returns red value
        if (event.target.value > 255) {
            setRed(255).then(color => setHexColor(rgbToHex(hexColor, color, "Red")))

        } else if (event.target.value < 0) {
            setRed(0).then(color => setHexColor(rgbToHex(hexColor, color, "Red")))
        } else {
            console.log(rgbToHex(hexColor, event.target.value, "Red"))
            setRed(event.target.value).then(color => setHexColor(rgbToHex(hexColor, color, "Red")))
        }
    };
    const onChangeGreen = (event) => {
        // TODO Refactor to function which returns green value
        if (event.target.value > 255) {
            setGreen(255).then(color => setHexColor(rgbToHex(hexColor, color, "Green")))
        } else if (event.target.value < 0) {
            setGreen(0).then(color => setHexColor(rgbToHex(hexColor, color, "Green")))
        } else {
            setGreen(event.target.value).then(color => setHexColor(rgbToHex(hexColor, color, "Green")))
        }
    };
    const onChangeBlue = (event) => {
        // TODO Refactor to function which returns blue value
        if (event.target.value > 255) {
            setBlue(255).then(color => setHexColor(rgbToHex(hexColor, color, "Blue")))
        } else if (event.target.value < 0) {
            setBlue(0).then(color => setHexColor(rgbToHex(hexColor, color, "Blue")))
        } else {
            setBlue(event.target.value).then(color => setHexColor(rgbToHex(hexColor, color, "Blue")))
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
    const onChangeColor = (event) => {
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
       boxShadow: `5px 5px ${Blur}px 0 ${darkerShadow},
       -5px -5px ${Blur}px 0 ${lighterShadow}`,
       border: `1px solid ${mainColor}`,
       borderRadius: `${Radius}px`
    }

    const inputStyle = {
        borderColor: mainColor,
        backgroundColor: mainColor,
        color: font,
        boxShadow: `inset 2px 2px 10px 0 ${darkerShadow}, inset -2px -2px 10px 0 ${lighterShadow}`
    }

    return(
        <div className={"page"}>
            <div className={'container-fluid pb-5'} style={{minHeight:'100vh',backgroundColor:mainColor, color:font}}>
                <div className={'container pt-3'}>
                    <Link to='/' style={{color:'#ed2939'}}>
                        Back to the homepage
                    </Link>
                    <h3>Soft-UI generator</h3>
                    <h5>Version <Badge type={'small'}>0.3</Badge></h5>
                    <div className='row mt-4 mb-4' style={{marginRight:'0px', marginLeft:'0px'}}>
                        <div className={'col-md-6 mb-5'}>
                            <div
                                className={'align-self-center'}
                                style={containerStyle}>Soft UI container
                            </div>
                        </div>
                        <div className={'col-md-6'}>
                            <div style={{
                                minHeight:'100px',
                                backgroundColor: mainColor,
                                color: font,
                                mixBlendMode: 'normal',
                                boxShadow: `5px 5px ${Blur}px 0 ${darkerShadow},
                                 -5px -5px ${Blur}px 0 ${lighterShadow}`,
                                border: `1px solid ${mainColor}`,
                                borderRadius: `${Radius}px`}}
                                className={'pt-3 pb-3 pl-3 pr-3'}>
                                <h6>Enter hexadecimal color code</h6>
                                <div className={'row'}>
                                    {/*<div className={'col-1'}>*/}
                                    {/*    /!*<input style={{height:'45px',width:'45px'}} type={'color'}/>*!/*/}
                                    {/*</div>*/}
                                    <div className={'col-md-4'}>
                                        <Input type={'text'}
                                               onChange={onChangeColor}
                                               value={hexColor}
                                               placeholder={'#'}
                                               style={inputStyle} />
                                    </div>
                                </div>
                                <div className={'row'}>
                                    <div className={'col-md-4'}>
                                        <h6 style={{color:'#ed2939', fontWeight:'bold'}}>Red</h6>
                                        <Input type={'number'}
                                               onChange={onChangeRed}
                                               value={Red}
                                               placeholder={Red}
                                               style={inputStyle}/>
                                    </div>
                                    <div className={'col-md-4'}>
                                        <h6 style={{color:'#0B6623', fontWeight:'bold'}}>Green</h6>
                                        <Input type={'number'}
                                               onChange={onChangeGreen}
                                               value={Green}
                                               placeholder={Green}
                                               style={inputStyle} />
                                    </div>
                                    <div className={'col-md-4'}>
                                        <h6 style={{color:'#0f52Ba', fontWeight:'bold'}} >Blue</h6>
                                        <Input type={'number'}
                                               onChange={onChangeBlue}
                                               value={Blue}
                                               placeholder={Blue}
                                               style={inputStyle} />
                                    </div>
                                </div>
                                <div className={'row'}>
                                    <div className={'col-md-6'}>
                                        <h6>Blur</h6>
                                        <Input type={'number'} onChange={onChangeBlur}
                                               value={Blur}
                                               placeholder={'Blur'}
                                               style={inputStyle} />
                                    </div>
                                    <div className={'col-md-6'}>
                                        <h6>Radius</h6>
                                        <Input type={'number'}
                                               onChange={onChangeRadius}
                                               value={Radius}
                                               placeholder={'Radius'}
                                               style={inputStyle} />
                                    </div>
                                    <div className={'col-md-6'}>
                                        <h6>Dark Shadow</h6>
                                        <Input type={'number'}
                                               onChange={onChangeDarkFactor}
                                               value={Math.round(darkFactor*100)}
                                               placeholder={'Radius'}
                                               style={inputStyle} />
                                    </div>
                                    <div className={'col-md-6'}>
                                        <h6>Light Shadow</h6>
                                        <Input type={'number'}
                                               onChange={onChangeLightFactor}
                                               value={Math.round(lightFactor*100)}
                                               placeholder={'Radius'}
                                               style={inputStyle} />
                                    </div>
                                </div>
                                <div>
                                    Light shadow:{" "}
                                    <Badge>{lighterShadows[0]}</Badge>
                                    <Badge color={'Green'}>{lighterShadows[1]}</Badge>
                                    <Badge color={'Blue'}>{lighterShadows[2]}</Badge>
                                    {" "}
                                    Dark shadow:{" "}
                                    <Badge>{darkerShadows[0]}</Badge>
                                    <Badge color={'Green'}>{darkerShadows[1]}</Badge>
                                    <Badge color={'Blue'}>{darkerShadows[2]}</Badge>
                                </div>
                                <div>
                                    Other:{" "}
                                    <Badge>Blur: {Blur}px</Badge>
                                    <Badge>Radius: {Radius}px</Badge>
                                    <Badge>Dark shadow: {darkFactor*100}%</Badge>
                                    <Badge>Light shadow: {Math.round(lightFactor*100)}%</Badge>
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