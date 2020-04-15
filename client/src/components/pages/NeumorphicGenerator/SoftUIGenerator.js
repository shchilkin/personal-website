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

const SoftUIGenerator = () => {
    const [color, setColor] = useAsyncState("0xED2939");
    const [darkFactor, setDarkFactor] = useState(0.85);
    const [lightFactor, setLightFactor] = useState(1.15);
    const [Red, setRed] = useState(237);
    const [Green, setGreen] = useState(41);
    const [Blue, setBlue] = useState(57);
    const [Blur, setBlur] = useState(30);
    const [Radius, setRadius] = useState(12);

    const font = fontColor(Red, Green, Blue)

    function hexToRGB(color) {
        if (color.length === 5) {
            setRed(parseInt(`0x${color.slice(2, 3)}${color.slice(2, 3)}`))
            setGreen(parseInt(`0x${color.slice(3, 4)}${color.slice(3, 4)}`))
            setBlue(parseInt(`0x${color.slice(4, 5)}${color.slice(4, 5)}`))
        }
        if (color.length === 8){
            setRed(parseInt(`0x${color.slice(2, 4)}`))
            setGreen(parseInt(`0x${color.slice(4, 6)}`))
            setBlue(parseInt(`0x${color.slice(6, 8)}`))
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


    const onChangeRed = (event) => {
        if (event.target.value > 255) {
            setRed(255)
        } else if (event.target.value < 0) {
            setRed(0)
        } else {
            setRed(event.target.value)
        }
    };
    const onChangeGreen = (event) => {
        if (event.target.value > 255) {
            setGreen(255)
        } else if (event.target.value < 0) {
            setGreen(0)
        } else {
            setGreen(event.target.value)
        }
    };
    const onChangeBlue = (event) => {
        if (event.target.value > 255) {
            setBlue(255)
        } else if (event.target.value < 0) {
            setBlue(0)
        } else {
            setBlue(event.target.value)
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
        setColor(event.target.value).then(value => {
            console.log('x', value)
            if (value.indexOf("#") !== -1 ){
                console.log('in IF', value)
                const hexColorWithoutHash = value.replace(/#/,'')
                setColor(`0x${hexColorWithoutHash}`).then(color => hexToRGB(color))
            } else {
                console.log('in else', value)
                setColor(`0x${value}`).then(color => hexToRGB(color))
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
                                               value={color.replace(/0x/,'#')}
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