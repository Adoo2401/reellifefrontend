import React from 'react'
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import("react-charts").then((mod) => mod.Chart), {
    ssr: false,
});
import {Radio,ConfigProvider } from 'antd';
import { AxisOptions } from 'react-charts'
import {Series} from 'react-charts/types/types'

type MyDatum = { date: Date, reach: number }

const AreaChart = () => {

    const [checked,setChecked] = React.useState("daily");
    console.log(checked);
    

    // Visualization data can come in practically any shape and size, so memoization of data into this shape is almost always necessary.

    const data = React.useMemo(
        () => [
            {
                label: "Reach",
                data: [
                    {
                        date: new Date("2023-09-04"),
                        reach: 36.5
                    },
                    {
                        date: new Date("2023-09-03"),
                        reach: 73
                    },
                    {
                        date: new Date("2023-09-02"),
                        reach: 100
                    },
                    {
                        date: new Date("2023-09-01"),
                        reach: 20
                    },
                    {
                        date: new Date("2023-08-31"),
                        reach: 44.2
                    },
                    {
                        date: new Date("2023-08-30"),
                        reach: 30
                    },
                    {
                        date: new Date("2023-08-29"),
                        reach: 18.5
                    }
                ]
            }
        ]
        , [])

    const primaryAxis: any = React.useMemo(
        (): AxisOptions<MyDatum> => ({
            getValue: datum => datum.date.toLocaleString(undefined,{month:"short",day:"numeric"}),
        
        }),
        []
    )

    const secondaryAxes: any = React.useMemo(
        (): AxisOptions<MyDatum>[] => [
            {
                getValue: datum => datum.reach,
                elementType: "area",
            },
        ],
        []
    )

    const getSeriesStyle = React.useCallback((series:Series<unknown>) => {
        return {
          fill: "#fcf8ff",
          stroke:"#efe2ed"
        };
      }, []);

    return (
        <>
         <div className='flex justify-between lg:flex-row flex-col items-center'>
            <div>
                <h1 className='font-extrabold text-lg'>Reach</h1>
                <p className='font-medium text-sm'>Unique devices that caused an impression</p>
            </div>
            <div className='lg:mt-0 mt-7'>
                <ConfigProvider theme={{components:{Radio:{buttonCheckedBg:"black",colorPrimary:"white"}}}}>
                   <Radio.Group>       
                      <Radio.Button onClick={()=>setChecked("daily")} className={`${checked=="daily"?'bg-black text-white':""}`} value="daily">Daily</Radio.Button>
                      <Radio.Button onClick={()=>setChecked("weekly")} className={`${checked=="weekly"?'bg-black text-white':""}`} value="weekly">Weekly</Radio.Button>
                      <Radio.Button onClick={()=>setChecked("monthly")} className={`${checked=="monthly"?'bg-black text-white':""}`} value="monthly">Monthly</Radio.Button>
                   </Radio.Group>
                </ConfigProvider>
            </div>
         </div>
         <Chart
            className='mt-6'
            options={{
                data,
                primaryAxis,
                secondaryAxes,
                getSeriesStyle:getSeriesStyle
            }}
            />
        </>
    )
}

export default AreaChart