/*
 * @Author: your name
 * @Date: 2021-09-28 11:33:13
 * @LastEditTime: 2021-09-28 11:33:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /test-project/src/utils/antdUI.js
 */
import Vue from 'vue'
import {
  Alert,
  Avatar,
  Badge,
  Breadcrumb,
  Button,
  Card,
  Checkbox,
  Col,
  DatePicker,
  Divider,
  Drawer,
  Dropdown,
  Form,
  Icon,
  Input,
  InputNumber,
  Layout,
  List,
  Menu,
  message,
  Modal,
  notification,
  Popconfirm,
  Popover,
  Progress,
  Radio,
  Row,
  Select,
  Skeleton,
  Spin,
  Steps,
  Switch,
  Statistic,
  Table,
  Tabs,
  Tag,
  TimePicker,
  Tooltip,
  Upload
} from 'ant-design-vue'

Vue.use(Alert)
Vue.use(Avatar)
Vue.use(Badge)
Vue.use(Breadcrumb)
Vue.use(Button)
Vue.use(Card)
Vue.use(Checkbox)
Vue.use(Col)
Vue.use(DatePicker)
Vue.use(Divider)
Vue.use(Drawer)
Vue.use(Dropdown)
Vue.use(Form)
Vue.use(Icon)
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(Layout)
Vue.use(List)
Vue.use(Menu)
Vue.use(message)
Vue.use(Modal)
Vue.use(notification)
Vue.use(Popconfirm)
Vue.use(Popover)
Vue.use(Progress)
Vue.use(Radio)
Vue.use(Row)
Vue.use(Steps)
Vue.use(Select)
Vue.use(Skeleton)
Vue.use(Spin)
Vue.use(Switch)
Vue.use(Statistic)
Vue.use(Table)
Vue.use(Tabs)
Vue.use(Tag)
Vue.use(TimePicker)
Vue.use(Tooltip)
Vue.use(Upload)

Vue.prototype.$confirm = Modal.confirm
Vue.prototype.$message = message
Vue.prototype.$notification = notification
Vue.prototype.$info = Modal.info
Vue.prototype.$success = Modal.success
Vue.prototype.$error = Modal.error
Vue.prototype.$warning = Modal.warning
