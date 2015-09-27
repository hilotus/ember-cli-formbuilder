(function(globals) {
  var translations = {
    'en-us': {
      tab: {
        editForm: 'Edit Form',
        addField: 'Add Field',
        editField: 'Edit Field'
      },
      addField: {
        text: 'Text',
        paragraph: 'Paragraph',
        singleChoice: 'Single Choice',
        multipleChoice: 'Multiple Choice',
        date: 'Date',
        time: 'Time',
        number: 'Number',
        price: 'Price',
        email: 'Email',
        link: 'Link',
        label: 'Label',
        section: 'Section'
      },
      newFieldTitle: 'Title',
      sortView: 'Sort View',
      editField: {
        fieldName: 'Name',
        fieldType: 'Type',
        props: {
          label: 'Property',
          title: 'Title',
          desp: 'Description',
          required: 'Required',
          wholeLine: 'Whole line',
          defaultValue: 'Default Value',
          currency: 'Currency',
          choice: {
            addOption: 'Add Option'
          }
        },
        ops: 'Options',
      },
      field: {
        email: 'Email',
        number: 'Number',
        date: 'Date',
        time: 'Time'
      },
      currencies: {
        usd: 'usd',
        cny: 'cny',
        eur: 'eur'
      }
    },

    'zh-cn': {
      tab: {
        editForm: '编辑表格',
        addField: '添加字段',
        editField: '编辑字段'
      },
      addField: {
        text: '文本',
        paragraph: '段落',
        singleChoice: '单选',
        multipleChoice: '多选',
        date: '日期',
        time: '时间',
        number: '数字',
        price: '货币',
        email: '邮件',
        link: '链接',
        label: '标签',
        section: '段'
      },
      newFieldTitle: '标题',
      sortView: '排序视图',
      editField: {
        fieldName: '名称',
        fieldType: '类型',
        props: {
          label: '属性',
          title: '标题',
          desp: '描述',
          required: '必填',
          wholeLine: '整行',
          defaultValue: '默认值',
          currency: '货币',
          choice: {
            addOption: '新增选项'
          }
        },
        ops: '选项'
      },
      field: {
        email: '邮件',
        number: '数字',
        date: '日期',
        time: '时间'
      },
      currencies: {
        usd: '美元',
        cny: '人民币',
        eur: '欧元'
      }
    }
  };

   /*
    var json = {a: {b: {c: 1}}}
    getPath(json, 'a.b.c') => 1
  */
  function getPath(root, path) {
    var parts, idx, len;
    parts = path.split(".");
    len = parts.length;
    for (idx = 0; root != null && idx < len; idx++) {
      root = root[parts[idx]];
    }
    return root;
  }

  /*
    var json = {a: {b: {c: 1}}}
    setPath(json, 'a.b.c', 2) => {a: {b: {c: 2}}}
  */
  function setPath(root, path, value) {
    var keyName = path.slice(path.lastIndexOf('.') + 1);
    path = (path === keyName) ? '' : path.slice(0, path.length - (keyName.length + 1));
    if (path) {
      root = getPath(root, path);
    }
    if (!keyName || keyName.length === 0) {
      throw new Error('Set failed: You passed an empty path');
    }
    if (!root) {
      throw new Error('Set failed: object in path "' + path + '" could not be found or was destroyed.');
    }
    root[keyName] = value;
  }

  if ( globals.I18nForm == null ) { globals.I18nForm = {}; }

  var I18nForm = globals.I18nForm,
    localStorage = globals.localStorage,
    defaultLocale = 'en-us';

  var locale = localStorage.getItem('ember-cli-formbuilder-i18n-locale') || defaultLocale;
  I18nForm.translations = translations[locale] || translations[defaultLocale];

  I18nForm.t = function (keyPath) {
    return getPath(this.translations, keyPath);
  };
}(this));
