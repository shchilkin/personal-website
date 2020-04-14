import React from "react";
import Page from "../../Layout/Page/Page.component";
import {Link} from "react-router-dom";
import Badge from "../../Layout/Badge/Badge.component";


const NeumorphicGenerator = () => {
    const Red = 237;
    const Green = 41;
    const Blue = 57;

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
                calculateColor(Red, 1.15),
                calculateColor(Green, 1.15),
                calculateColor(Blue, 1.15)
            ],
            darkerShadowArray: [
                calculateColor(Red, 0.85),
                calculateColor(Green, 0.85),
                calculateColor(Blue, 0.85)
            ]

        }

    }

    console.log(calculateShadows(Red, Green, Blue))
    const shadows = calculateShadows(Red, Green, Blue);

    const lighterShadows = shadows.ligherShadowArray;
    const darkerShadows = shadows.darkerShadowArray;

    const mainColor = `rgb(${Red}, ${Green}, ${Blue})`
    const lighterShadow = `rgb(${lighterShadows[0]}, ${lighterShadows[1]}, ${lighterShadows[2]})`
    const darkerShadow = `rgb(${darkerShadows[0]}, ${darkerShadows[1]}, ${darkerShadows[2]})`

    return(
        <Page>
            <div className={'container'}>
                <Link to='/' style={{color:'#ed2939'}}>
                    Back to the homepage
                </Link>
                <h3>Neumorphic color palette generator</h3>
                <h5>Version <Badge type={'small'}>0.1</Badge> <Badge color={'Pink'} type={'small'}>First version!</Badge></h5>
                <h6>Currently in early stage of development</h6>
                <div className='row mt-4 mb-4' style={{marginRight:'0px', marginLeft:'0px'}}>
                    <div className={'col-md-6'}>
                        <div className={'d-flex justify-content-center'}
                             style={{width:'100%', height:'300px',
                                 borderRadius:'12px',
                                 backgroundColor:mainColor}}>
                            <div
                                className={'align-self-center'}
                                style={{
                                    width:'75%',
                                    height:'200px',
                                    backgroundColor:mainColor,
                                    borderRadius:'12px',
                                    boxShadow: `10px 10px 30px 0
                                    ${darkerShadow},
                                    -10px -10px 20px 0
                                    ${lighterShadow}`
                            }}/>
                        </div>
                    </div>
                </div>
            </div>
        </Page>
    )
}


export default NeumorphicGenerator;