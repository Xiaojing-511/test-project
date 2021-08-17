<!--
 * @Author: your name
 * @Date: 2021-07-29 15:33:24
 * @LastEditTime: 2021-08-03 15:35:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /test-project/src/components/g2plot-chart.vue
-->
<template>
    <div>
        <!-- 图表容器 -->
        <div id="container"></div>
        <button class="btn" @click="update">update</button>
    </div>
    
</template>
<script>
import { Pie } from '@antv/g2plot';
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
            const config = {
                
                appendPadding: 10,
                // 扇形切片大小（弧度）所对应的数据字段名
                angleField: 'value',
                // 扇形颜色映射对应的数据字段名
                colorField: 'type',
                // 饼图的半径，原点为画布中心。配置值域为 (0,1]，1 代表饼图撑满绘图区域
                radius: 1,
                // 饼图的内半径
                innerRadius: 0.6,
                // 图表是否自适应容器宽高
                autoFit: true,
                // 是否显示图例
                legend: false
            };
           
            // 设置图表数据源
            config.data = [
                { type: '分类一', value: 27 },
                { type: '分类二', value: 25 },
                { type: '分类三', value: 18 },
                { type: '分类四', value: 15 },
                { type: '分类五', value: 10 },
                { type: '其他', value: 5 },
            ];
            // 文本标签 
            config.label = {
                type: 'inner', // outer
                offset: '-50%', // label偏移量
                content: '{value}',// 展示的文本内容
                style: {
                    textAlign: 'center',
                    fontSize: 14,
                }
            };
            // 增加 中心统计交互pie-statistic-active
            config.interactions = [{ type: 'pie-statistic-active' }];
            // 统计内容组件 只在内半径大于0时生效 默认总计
            config.statistic = {
                title: {
                    content: '总计'
                },
                content: {
                    style: {
                        whiteSpace: 'pre-wrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                    },
                    content: 'AntV\nG2Plot'
                },
            };            
            // 配置图例
            config.legend = { 
                layout: 'vertical', // 布局 horizontal vertical
                position: 'right'
            };
            this.pieChart = new Pie('container', config);
            // 渲染图表
            this.pieChart.render();
        },
        // 更新图表配置项
        update(){
            this.pieChart.update({
                data: [
                    { type: '分类1', value: 27 },
                    { type: '分类2', value: 25 },
                    { type: '分类3', value: 18 },
                    { type: '分类4', value: 15 },
                    { type: '分类5', value: 10 },
                    { type: '其他', value: 5 },
                ]
            })
             
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