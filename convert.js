// this nodejs script fixes a bug of the preprod temporary version
// all the components have been reset
// run `node convert.js` to move components data from data.elements[0].data.component to data.elements[0].data.component.data
const fs = require('fs')

const path = '20_08_b_cousettes.html.json'
const content = fs.readFileSync(path)
const data = JSON.parse(content.toString())

const newData = {
  ...data,
  elements: data.elements
    .map(el => {
      if(!el.data.component)
        return el
      return {
        ...el,
        data: {
          ...el.data,
          component: {
            templateName: el.data.component.templateName,
            data: el.data.component,
          },
        },
      }
    }),
}
console.log('writing', newData.length, 'elements to', path)
fs.writeFileSync(path, JSON.stringify(newData))
