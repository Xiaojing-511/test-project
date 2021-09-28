/*
 * @Author: your name
 * @Date: 2021-09-28 11:28:15
 * @LastEditTime: 2021-09-28 11:28:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /test-project/src/utils/echartsUI.js
 */
  // 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
  import * as echarts from 'echarts/core';
  // 引入提示框，图例 组件
  import {
      TooltipComponent,
      LegendComponent,
      TitleComponent,
      GridComponent,
      ToolboxComponent
  } from 'echarts/components';
  import {
    LineChart
} from 'echarts/charts';
  // 引入 Canvas 渲染器
  import {
      CanvasRenderer
  } from 'echarts/renderers';
  // 注册必须的组件
  echarts.use(
      [TooltipComponent, LegendComponent,TitleComponent, GridComponent, ToolboxComponent, LineChart, CanvasRenderer]
  );
  export default echarts;

