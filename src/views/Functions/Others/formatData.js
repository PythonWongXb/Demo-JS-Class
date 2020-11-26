/*
 * @Author: your name
 * @Date: 2020-11-26 15:38:52
 * @LastEditTime: 2020-11-26 19:45:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ts-demo/src/views/Functions/Others/formatData.js
 */
const ls = [
  {
    id: '32880517552672768',
    name: '企业主要负责人（A类）',
    parent: '32880008137674752',
    type: 1,
    children: null,
    level: 2
  },
  {
    id: '32880586989375488',
    name: '建筑业企业项目负责人（B类）',
    parent: '32880008137674752',
    type: 1,
    children: null,
    level: 2
  },
  {
    id: '32880658342875136',
    name: '建筑业企业专职安全生产管理人员（C类）',
    parent: '32880008137674752',
    type: 1,
    children: null,
    level: 2
  },

  {
    id: '32880045404065792',
    name: '二级注册建筑师',
    parent: '32879928794025984',
    type: 1,
    level: 0
  },
  {
    id: '32880788991250432',
    name: '建筑工程',
    parent: '32880045404065792',
    type: 1,
    children: null,
    level: 2
  },
  {
    id: '32880823946579968',
    name: '公路工程',
    parent: '32880045404065792',
    type: 1,
    children: null,
    level: 2
  },
  {
    id: '32880863171710976',
    name: '水利水电工程',
    parent: '32880045404065792',
    type: 1,
    children: null,
    level: 2
  },
  {
    id: '32880903130845184',
    name: '矿业工程',
    parent: '32880045404065792',
    type: 1,
    children: null,
    level: 2
  },
  {
    id: '32880985288871936',
    name: '市政公用工程',
    parent: '32880045404065792',
    type: 1,
    children: null,
    level: 2
  },
  {
    id: '32881032671924224',
    name: '机电工程',
    parent: '32880045404065792',
    type: 1,
    children: null,
    level: 2
  },

  {
    id: '32879965833924608',
    name: '新取证',
    parent: null,
    type: 1,
    level: 0
  },
  {
    id: '33838416592506880',
    name: '八大员',
    parent: '32879965833924608',
    type: 1,
    level: 1
  },
  {
    id: '33838471709855744',
    name: '施工员',
    parent: '33838416592506880',
    type: 1,
    children: null,
    level: 2
  },

  {
    id: '33838617835212800',
    name: '劳务员',
    parent: '33838416592506880',
    type: 1,
    children: null,
    level: 2
  },
  {
    id: '33838443582853120',
    name: '三类人员',
    parent: '32879965833924608',
    type: 1,
    level: 1
  },
  {
    id: '33838701717098496',
    name: '建筑施工主要负责人',
    parent: '33838443582853120',
    type: 1,
    children: null,
    level: 2
  },
  {
    id: '33838730850734080',
    name: '建筑施工项目主要负责人',
    parent: '33838443582853120',
    type: 1,
    children: null,
    level: 2
  },
  {
    id: '33838771782946816',
    name: '建筑施工专职安全生产管理人',
    parent: '33838443582853120',
    type: 1,
    children: null,
    level: 2
  },
  {
    id: '32879984267890688',
    name: '八大员',
    parent: '32879928794025984',
    type: 1,
    level: 1
  },
  {
    id: '32880149573799936',
    name: '施工员',
    parent: '32879984267890688',
    type: 1,
    children: null,
    level: 2
  },
  {
    id: '32880167668027392',
    name: '质量员',
    parent: '32879984267890688',
    type: 1,
    children: null,
    level: 2
  },
  {
    id: '32880194696122368',
    name: '材料员',
    parent: '32879984267890688',
    type: 1,
    children: null,
    level: 2
  },
  {
    id: '32879928794025984',
    name: '继续教育',
    parent: null,
    type: 1,
    level: 0
  },
  {
    id: '33838493209858048',
    name: '质量员',
    parent: '33838416592506880',
    type: 1,
    children: null,
    level: 2
  },
  {
    id: '33838515599052800',
    name: '材料员',
    parent: '33838416592506880',
    type: 1,
    children: null,
    level: 2
  },
  {
    id: '33838536142753792',
    name: '资料员',
    parent: '33838416592506880',
    type: 1,
    children: null,
    level: 2
  },
  {
    id: '33838556535459840',
    nam: '标准员',
    parent: '33838416592506880',
    typ: 1,
    childre: null,
    level: 2
  },
  {
    id: '33838582686945280',
    name: '机械员',
    parent: '33838416592506880',
    type: 1,
    children: null,
    level: 2
  }
];

function convertToTreeData(data, pid) {
  const result = []
  let temp = []
  for (const item of data) {
    if (item.parent === pid) {
      temp = convertToTreeData(data, item.id)
      if (temp.length) item.children = temp
      result.push(item)
    }
  }
  return result
}

const res = convertToTreeData(ls, null)
console.log(res)

export default convertToTreeData
