<!--
 * @Author: your name
 * @Date: 2021-08-03 10:42:48
 * @LastEditTime: 2021-08-09 19:34:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /test-project/src/components/echart-pie.vue
-->
<template>
    <div id="main">
    </div>
</template>
<script>
// 会引入所有 ECharts 中所有的图表和组件
// import * as echarts from 'echarts';

// 按需引入
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from 'echarts/core';
// 引入提示框，图例 组件
import {
    TooltipComponent,
    LegendComponent
} from 'echarts/components';
// 引入饼图图表
import {
    PieChart
} from 'echarts/charts';
// 引入 Canvas 渲染器
import {
    CanvasRenderer
} from 'echarts/renderers';
// 注册必须的组件
echarts.use(
    [TooltipComponent, LegendComponent, PieChart, CanvasRenderer]
);

export default {
    data() {
        return {
            
        }
    },
    mounted(){
        this.initEchart();
    },
    methods: {
        initEchart() {
            var chartDom = document.getElementById('main');
            var myChart = echarts.init(chartDom);
            var option;
            option = {
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    top: '5%',
                    left: 'center'
                },
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '40',
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: [
                            {value: 1048, name: '搜索引擎'},
                            {value: 735, name: '直接访问'},
                            {value: 580, name: '邮件营销'},
                            {value: 484, name: '联盟广告'},
                            {value: 300, name: '视频广告'}
                        ]
                    }
                ]
            };

            myChart.setOption(option);
        },
    },
}
</script>
<style lang="less" scoped>
    #main{
        width: 500px;
        height: 400px;
    }
</style>