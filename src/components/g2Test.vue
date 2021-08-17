<!--
 * @Author: your name
 * @Date: 2021-08-04 14:23:11
 * @LastEditTime: 2021-08-04 14:54:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /test-project/src/components/g2-test.vue
-->
<template>
    <div>
        <!-- 图表容器 -->
        <div id="container"></div>
    </div>
    
</template>
<script>
import { Chart, registerGeometry, registerComponentController, registerEngine } from '@antv/g2/lib/core';
import Line from '@antv/g2/lib/geometry/line';
import Axis from '@antv/g2/lib/chart/controller/axis';
import Tooltip from '@antv/g2/lib/chart/controller/tooltip';
import * as CanvasEngine from '@antv/g-canvas';
export default {
    data() {
        return {
            pieChart:{},
        }
    },
    mounted(){
        // G2Plot 是在 G2 基础上，屏蔽复杂概念的前提下，保留 G2 强大图形能力，
        // 将 G2 能力转换成 config 的形势透出，封装出业务上常用的统计图表库，帮助开发者以最小成本绘制高质量统计图表
        this.renderChart();
    },
    methods: {
        renderChart(){
            const data = [
                { year: '1991', value: 3 },
                { year: '1992', value: 4 },
                { year: '1993', value: 3.5 },
                { year: '1994', value: 5 },
                { year: '1995', value: 4.9 },
                { year: '1996', value: 6 },
                { year: '1997', value: 7 },
                { year: '1998', value: 9 },
                { year: '1999', value: 13 },
            ];
            // 按需注入
            registerEngine('canvas', CanvasEngine);
            registerGeometry('line', Line);
            registerComponentController('axis', Axis);
            registerComponentController('tooltip', Tooltip);

            // 创建折线图，后面的代码没有任何区别
            const chart = new Chart({
                container: 'container',
                width: 600,
                height: 500,
                renderer: 'canvas',
            });

            chart.data(data);
            chart.line().positon('year*value');
            chart.render();
        }
    },
}
</script>
<style lang="less">
    #container{
        width: 500px;
        margin: 0 auto;
    }
    .btn{
        width: 100px;
        height: 30px;
        font-size: 16px;
        cursor: pointer;
    }
</style>