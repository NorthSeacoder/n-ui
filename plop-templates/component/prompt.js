const { notEmpty, kebabCase, camelCase } = require("../utils.js");

module.exports = {
  description: "generate a component",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "请输入组件名字(请以驼峰命名)",
      validate: notEmpty("组件名字")
    },
    {
      type: "list",
      name: "type",
      message: "请选择类型",
      choices: [
        {
          name: "指令",
          value: "directive"
        },
        {
          name: "组件",
          value: "component"
        },
        {
          name: "插件",
          value: "plugin"
        }
      ]
    },
    {
      type: "list",
      name: "compType",
      message: "请选择组件类型",
      choices: [
        {
          name: "基础类",
          value: "basic"
        },
        {
          name: "表单类",
          value: "form"
        },
        {
          name: "插件类",
          value: "plugin"
        }
      ]
    }
  ],
  actions: data => {
    const kebabName = kebabCase(data.name);
    const componentName = camelCase(data.name);
    const compTypeReg=new RegExp(`//${data.compType}`);
    const typeReg=new RegExp(`//${data.type}`);

    const actions = [
      {
        type: "add",
        path: `src/${data.type}/${kebabName}/src/${kebabName}.vue`,
        templateFile: "plop-templates/component/index.hbs",
        data: {
          componentName,
          kebabName,
          template: true,
          script: true,
          style: true
        }
      },
      {
        type: "add",
        path: `src/${data.type}/${kebabName}/index.js`,
        templateFile: "plop-templates/component/export.hbs",
        data: {
          componentName,
          kebabName
        }
      },
      {
        type: "add",
        path: `src/styles/${data.type}/${kebabName}.scss`,
        templateFile: "plop-templates/component/css.hbs"
      },
      {
        type: "add",
        path: `docs/comp/${componentName}.md`,
        templateFile: "plop-templates/component/md.hbs",
        data: {
          kebabName
        }
      },
      {
        type: "modify",
        path: `docs/.vuepress/constant/componentsSidebar.js`,
        pattern: compTypeReg,
        template:'//{{compType}}\r\n\t\t\t\t"{{componentName}}",',
        data: {
          componentName,
          compType: data.compType
        }
      },
      {
        type: "modify",
        path: `src/${data.type}/index.js`,
        pattern: typeReg,
        template:'//{{type}}\r\n\t{{componentName}},',
        data: {
          componentName
        }
      },
      {
        type: "modify",
        path: `src/${data.type}/index.js`,
        pattern: new RegExp(`//import`),
        template:"//import\r\nimport {{componentName}} from './{{kebabName}}';",
        data: {
          componentName
        }
      },
      {
        type: "modify",
        path: `src/styles/${data.type}/index.scss`,
        pattern: new RegExp(`//import`),
        template:"//import\r\n@import './{{kebabName}}.scss';",
        data: {
          kebabName,
          componentName
        }
      }

    ];

    return actions;
  }
};
