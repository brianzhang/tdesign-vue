<template>
  <t-tree-select style="width: 300px" v-model="value" :data="options" multiple clearable placeholder="请选择">
  </t-tree-select>
</template>
<script>
export default {
  data() {
    return {
      value: ['guangzhou', 'shenzhen'],
      options: [
        {
          label: '广东省',
          value: 'guangdong',
          children: [
            {
              label: '广州市',
              value: 'guangzhou',
            },
            {
              label: '深圳市',
              value: 'shenzhen',
            },
          ],
        },
        {
          label: '江苏省',
          value: 'jiangsu',
          children: [
            {
              label: '南京市',
              value: 'nanjing',
            },
            {
              label: '苏州市',
              value: 'suzhou',
            },
          ],
        },
      ],
    };
  },
};
</script>
